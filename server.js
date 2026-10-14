const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const root = __dirname;
const contentPath = path.join(root, 'data', 'content.json');
const port = Number(process.env.PORT || 4173);
const adminToken = process.env.ADMIN_TOKEN;
const maxBodyBytes = 1024 * 1024;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf'
};

const send = (response, status, body, type = 'application/json; charset=utf-8') => {
  response.writeHead(status, { 'Content-Type': type, 'X-Content-Type-Options': 'nosniff' });
  response.end(body);
};

const redirect = (response, location) => {
  response.writeHead(302, { Location: location, 'Cache-Control': 'no-store' });
  response.end();
};

const readBody = (request) => new Promise((resolve, reject) => {
  let body = '';
  request.setEncoding('utf8');
  request.on('data', (chunk) => {
    body += chunk;
    if (Buffer.byteLength(body) > maxBodyBytes) {
      reject(new Error('Content exceeds the 1 MB limit.'));
      request.destroy();
    }
  });
  request.on('end', () => resolve(body));
  request.on('error', reject);
});

const validateContent = (content) => {
  if (!content || typeof content !== 'object' || Array.isArray(content)) return 'Content must be an object.';
  if (!content.profile || typeof content.profile !== 'object') return 'Profile is required.';
  if (!Array.isArray(content.projects)) return 'Projects must be an array.';
  if (!Array.isArray(content.history)) return 'History must be an array.';
  const slugs = new Set();
  for (const project of content.projects) {
    if (!project.title || !/^[a-z0-9-]+$/.test(project.slug || '')) return 'Every project needs a title and lowercase URL slug.';
    if (slugs.has(project.slug)) return `Duplicate project slug: ${project.slug}`;
    slugs.add(project.slug);
  }
  return null;
};

const serveFile = async (response, filePath, cacheControl) => {
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(`${root}${path.sep}`)) return send(response, 403, 'Forbidden', 'text/plain; charset=utf-8');
  try {
    const data = await fs.readFile(resolved);
    const type = mimeTypes[path.extname(resolved).toLowerCase()] || 'application/octet-stream';
    response.writeHead(200, {
      'Content-Type': type,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': cacheControl || (/^(text\/html|text\/css|text\/javascript|application\/javascript)/.test(type) ? 'no-cache' : 'public, max-age=300')
    });
    response.end(data);
  } catch (error) {
    send(response, error.code === 'ENOENT' ? 404 : 500, error.code === 'ENOENT' ? 'Not found' : 'Server error', 'text/plain; charset=utf-8');
  }
};

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

  if (url.pathname === '/api/content' && request.method === 'GET') {
    return serveFile(response, contentPath, 'no-store');
  }

  if (url.pathname === '/api/content' && request.method === 'PUT') {
    if (!adminToken) return send(response, 503, JSON.stringify({ error: 'Set ADMIN_TOKEN before editing.' }));
    if (request.headers.authorization !== `Bearer ${adminToken}`) return send(response, 401, JSON.stringify({ error: 'Invalid admin token.' }));
    try {
      const content = JSON.parse(await readBody(request));
      const validationError = validateContent(content);
      if (validationError) return send(response, 400, JSON.stringify({ error: validationError }));
      const temporaryPath = `${contentPath}.tmp`;
      await fs.writeFile(temporaryPath, `${JSON.stringify(content, null, 2)}\n`, 'utf8');
      await fs.rename(temporaryPath, contentPath);
      return send(response, 200, JSON.stringify({ saved: true }));
    } catch (error) {
      return send(response, 400, JSON.stringify({ error: error.message }));
    }
  }

  if (request.method !== 'GET') return send(response, 405, 'Method not allowed', 'text/plain; charset=utf-8');

  let filePath;
  if (url.pathname === '/') filePath = path.join(root, 'index.html');
  else if (url.pathname === '/about') return redirect(response, '/#about');
  else if (url.pathname === '/admin') filePath = path.join(root, 'admin.html');
  else if (/^\/work\/[a-z0-9-]+$/.test(url.pathname)) {
    const legacyRoutes = {
      'organization-understanding': 'organization',
      'conversation-recap': 'recap',
      'meeting-preparation': 'accessibility',
      'accessibility-leadership': 'accessibility',
      'org-sensemaking': 'sensemaking'
    };
    const slug = url.pathname.split('/').pop();
    return redirect(response, legacyRoutes[slug] ? `/#case/${legacyRoutes[slug]}` : '/#work');
  }
  else {
    const requestedPath = decodeURIComponent(url.pathname);
    if (requestedPath === '/server.js' || requestedPath === '/package.json' || requestedPath.startsWith('/data/')) {
      return send(response, 404, 'Not found', 'text/plain; charset=utf-8');
    }
    filePath = path.join(root, requestedPath);
  }
  return serveFile(response, filePath);
});

server.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
  if (!adminToken) console.log('Editing is disabled until ADMIN_TOKEN is set.');
});
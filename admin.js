const form = document.querySelector('#content-form');
const profileFields = document.querySelector('#profile-fields');
const historyFields = document.querySelector('#history-fields');
const projectFields = document.querySelector('#project-fields');
const statusMessage = document.querySelector('#status');
const tokenInput = document.querySelector('#token');
let content;

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
const input = (label, key, value, multiline = false) => `<label>${label}${multiline ? `<textarea data-key="${key}" rows="4">${escapeHtml(value)}</textarea>` : `<input data-key="${key}" value="${escapeHtml(value)}">`}</label>`;

const render = () => {
  profileFields.innerHTML = [
    input('Name', 'name', content.profile.name), input('Current title', 'title', content.profile.title),
    input('Location', 'location', content.profile.location), input('Hero headline', 'headline', content.profile.headline),
    input('Introduction', 'intro', content.profile.intro, true), input('About introduction', 'bio', content.profile.bio, true),
    input('Email', 'email', content.profile.email), input('LinkedIn URL', 'linkedin', content.profile.linkedin),
    input('Résumé URL', 'resume', content.profile.resume)
  ].join('');

  historyFields.innerHTML = content.history.map((item, index) => `<article class="editor-card history-editor" data-index="${index}"><div class="editor-grid">${input('Dates', 'period', item.period)}${input('Focus or role', 'title', item.title)}${input('Description', 'description', item.description, true)}</div><button class="text-button remove-history" type="button">Remove entry</button></article>`).join('');

  projectFields.innerHTML = content.projects.map((project, index) => `<article class="editor-card project-editor" data-index="${index}"><div class="editor-card-head"><h3>${escapeHtml(project.title || 'Untitled project')}</h3><button class="text-button remove-project" type="button">Remove project</button></div><div class="editor-grid">${input('URL slug', 'slug', project.slug)}${input('Title', 'title', project.title)}${input('Kicker', 'kicker', project.kicker)}${input('Case study headline', 'headline', project.headline)}${input('Preview summary', 'summary', project.summary, true)}${input('User problem', 'problem', project.problem, true)}${input('Product context', 'context', project.context)}${input('My role', 'role', project.role)}${input('Team', 'team', project.team)}${input('Timeframe and status', 'timeframe', project.timeframe)}${input('Outcome', 'outcome', project.outcome, true)}${input('Evidence', 'evidence', project.evidence, true)}${input('Design decisions (one per line)', 'decisions', project.decisions, true)}${input('My contribution', 'contribution', project.contribution, true)}${input('Results, limits, and learning', 'result', project.result, true)}</div></article>`).join('');
};

const collect = () => {
  profileFields.querySelectorAll('[data-key]').forEach((field) => { content.profile[field.dataset.key] = field.value.trim(); });
  document.querySelectorAll('.history-editor').forEach((card, index) => card.querySelectorAll('[data-key]').forEach((field) => { content.history[index][field.dataset.key] = field.value.trim(); }));
  document.querySelectorAll('.project-editor').forEach((card, index) => card.querySelectorAll('[data-key]').forEach((field) => { content.projects[index][field.dataset.key] = field.value.trim(); }));
};

fetch('/api/content').then((response) => {
  if (!response.ok) throw new Error('Could not load portfolio content.');
  return response.json();
}).then((data) => { content = data; render(); statusMessage.textContent = 'Ready to edit.'; }).catch((error) => { statusMessage.textContent = error.message; });

document.querySelector('#remember-token').addEventListener('click', () => {
  sessionStorage.setItem('portfolioAdminToken', tokenInput.value);
  statusMessage.textContent = 'Token stored for this browser tab.';
});
tokenInput.value = sessionStorage.getItem('portfolioAdminToken') || '';

document.querySelector('#add-history').addEventListener('click', () => {
  collect(); content.history.push({ period: '[Add dates]', title: 'New focus area', description: '[Add verified details]' }); render();
});
document.querySelector('#add-project').addEventListener('click', () => {
  collect(); content.projects.push({ slug: 'new-project', title: 'New project', kicker: 'Case study', headline: 'Add a clear project headline.', summary: '[Add summary]', problem: '[Add user problem]', context: '[Add product context]', role: '[Add your role]', team: '[Add team]', timeframe: '[Add dates and status]', outcome: '[Add verified outcome]', evidence: '[Add approved evidence]', decisions: '[Add decision]', contribution: '[Add individual contribution]', result: '[Add results, limits, and learning]' }); render(); projectFields.lastElementChild.scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('click', (event) => {
  if (event.target.matches('.remove-history')) { collect(); content.history.splice(Number(event.target.closest('[data-index]').dataset.index), 1); render(); }
  if (event.target.matches('.remove-project')) { collect(); content.projects.splice(Number(event.target.closest('[data-index]').dataset.index), 1); render(); }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault(); collect(); statusMessage.textContent = 'Saving…';
  try {
    const response = await fetch('/api/content', { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokenInput.value}` }, body: JSON.stringify(content) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Save failed.');
    sessionStorage.setItem('portfolioAdminToken', tokenInput.value);
    statusMessage.textContent = 'Saved. Your public site is updated.';
  } catch (error) { statusMessage.textContent = error.message; }
});
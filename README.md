# Eric Ochieng — Product Design Portfolio

Public portfolio showcasing product design work across organization understanding, AI-assisted conversation recap, accessibility leadership, and organization sensemaking.

## Live site

The portfolio is published with GitHub Pages:

<https://eric-ochieng.github.io/portfolio/>

## Run locally

Node.js is the only requirement:

```bash
npm start
```

Open <http://localhost:4173>.

## Editing locally

The local Node server includes a content editor. Set a private token before starting:

```bash
ADMIN_TOKEN="choose-a-long-private-token" npm start
```

Open <http://localhost:4173/admin> and enter the same token. Changes are written to `data/content.json`.

The GitHub Pages deployment is static. After editing locally, commit and push the updated files to publish them. Never commit the admin token.

## Validation

```bash
npm run check
```

## Content and privacy

Product and concept screenshots are included as supplied for portfolio use. Review names, interface content, claims, and supporting evidence before each public release.

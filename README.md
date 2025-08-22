# club98.ch

Landing page for **club98**, the special member club of Floorball Riders.

## Development

```bash
npm install
npm run dev
```

## Static build

```bash
npm run build
```

The generated static files are output to the `out/` directory.

## Deployment

The repository includes a GitHub Actions workflow that builds the site and publishes it to GitHub Pages. Configure the repository settings so that Pages serves from the `gh-pages` branch and add the custom domain `club98.ch`.

The `public/CNAME` file ensures GitHub Pages keeps the custom domain configuration.

# Front end build

## Local development

Front end build is via Vite, which runs _inside_ the ddev `web` container:

```bash
ddev npm run dev
```

Live reloading is configured for your development convenience

## Building for production

The production script can be run from outside `ddev` (e.g. in CI / deployment)


```bash
cd src/
npm run build
```

or within `ddev` for testing:

```bash
ddev npm run build
```


## Asset manifest / versioning

Production asset filenames are hashed. Hashed filenames are injected via the [Craft Vite plugin](https://github.com/nystudio107/craft-vite)

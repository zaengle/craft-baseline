# Front end build

## Local development

Front end build is via Laravel Mix, but runs _inside_ the ddev `web` container:

```bash
ddev npm run watch
# or
ddev npm run hot
```

Browsersync is configured for your live reloading convenience

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

Production asset filenames are hashed. Hashed filenames are injected via the [Twigpack plugin](https://nystudio107.com/docs/twigpack/)

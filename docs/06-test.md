# Testing & Linting

## Testing

### JavaScript

[Vitest](https://vitest.dev/) is included for JS unit testing and can be run with `ddev npm run test`.

## Linting

### JavaScript

[Zaengle's eslint](https://github.com/zaengle/eslint-config) config is included and can be run with `ddev npm run eslint`.

### PHP

Both PHP ECS and PHPStan are included and can be run with:

```bash
ddev composer run-script check-cs # check style without fixing
ddev composer run-script fix-cs # check style and fix
ddev composer run-script phpstan
```

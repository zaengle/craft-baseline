# <% project.handle %>

An opinionated CraftCMS + Tailwind + Vite setup

## Requirements

- [DDEV](./docs/ddev-local-development.md)
- Access to the client space in 1Password

## Installation

Before install, you need a copy of the database and the .env information.
- The database can be downloaded from the backend of the production site (`Utilities > Database Backup`)
- The `.env` file will need to be created in the root of the project and the info will be in 1Password (`Brady v2 Craft dev .env` document).

```bash
ddev composer install
ddev npm install
ddev import-db --file=./path-to/database-dump.sql
ddev craft up
```

## Asset temporary uploads

When on a docker-based or load balanced hosting solution like Servd, the `Temporary Uploads` Filesystem needs to get updated:
- Change the `Filesystem Type` from Local to the shared storage location 
- Set a subfolder like `_temp-uploads`
- Match the `Base URL` to the public asset URL

Once update, make sure the `.env` has `CRAFT_TEMP_ASSET_UPLOAD_FS` set to the handle of the `Temporary Uploads` Filesystem.

## Daily development

```bash
ddev npm run dev
```

For more, see [the docs](./docs/)


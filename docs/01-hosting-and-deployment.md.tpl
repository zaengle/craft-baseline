# Repos, Environments & Deployment

## Repositories

The project repository can be found here on GitHub:

## Environments

The project has N environments:

| Name             | GH Repo + branch                         | URL                                        | Notes                   |
|------------------|------------------------------------------|--------------------------------------------|-------------------------|
| `client-testing` | `<% project.repoUrl %>:develop` | https://v2.scottishrite.client-testing.com | u: `XXXXX` p: `zaengle` |


### Notes

- `client-testing` is hosted on Zaengle's Forge account (Client Testing N) and deployed + built via Envoyer.

## Deployment

**Deploying to `client-testing`**: To deploy the application to `client-testing`: Merge your changes into `develop` and push your changes to the Zaengle GitHub repo. Envoyer will automatically deploy the changes to the `client-testing` server.

**Deploying to `staging`**: @todo

**Deploying to `production`**: @todo

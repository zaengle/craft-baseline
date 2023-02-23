import inquirer from 'inquirer'

const toRepoUrl = (handle) => `https://github.com/zaengle/${handle}.git`

export default async ({ interactive, handle, installDeps, installCraft, securityKey }) => {

  if (!interactive) {
    return {
      handle: handle,
      repoUrl: toRepoUrl(handle),
      installDeps: Boolean(installDeps),
      installCraft: Boolean(installCraft),
    }
  }

  return await inquirer.prompt([{
    name: 'handle',
    message: 'What is the handle for this project?',
    type: 'input',
    default: handle,
    validate: (input) => {
      if (input.length === 0) {
        return 'Please enter a handle'
      }
      if (input.indexOf('.') !== -1) {
        return 'Handle cannot contain a period (breaks ddev integration with PHPStorm)'
      }
      return true
    }
  }, {
    name: 'repoUrl',
    message: 'What is the git repository URL for this project?',
    type: 'input',
    default: toRepoUrl(handle),
  }, {
    name: 'installDeps',
    message: 'Install dependencies?',
    type: 'confirm',
    default: Boolean(installDeps)
  }, {
    name: 'installCraft',
    message: 'Install Craft CMS',
    type: 'confirm',
    default: Boolean(installCraft),
  }, {
    name: 'securityKey',
    message: 'What security key should we use for this project?',
    type: 'input',
    default: securityKey,
  }])
}

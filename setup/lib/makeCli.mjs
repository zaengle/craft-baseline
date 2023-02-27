import { Command } from 'commander'
import { v4 as uuidv4 } from 'uuid'
export default (defaultHandle) => {
  const program = new Command()

  program.summary('Configure a new CraftCMS project')

  program
    .option('-h, --handle <char>',
      'Handle to use for the project',
      defaultHandle
    )
    .option('-r, --repo-url <char>',
      'Repository URL for the project',
    )
    .option(
      '-d, --install-deps',
      'Install dependencies?',
      1
    )
    .option(
      '-c, --install-craft',
      'Install Craft CMS?',
      1
    )
    .option(
      '-s, --security-key <char>',
      'Craft Secuity Key',
      uuidv4()

    )
    .option(
      '--no-interactive',
      'Run in non-interactive mode',
      1
    )

  return program
}

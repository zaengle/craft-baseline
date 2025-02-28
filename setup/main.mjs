import makeCli from './lib/makeCli.mjs'
import getAnswers from './lib/getAnswers.mjs'
import templatify from './lib/templatify.mjs'
import installDependencies from './lib/installDependencies.mjs'
import setupCraft from './lib/setupCraft.mjs'
import moveFiles from './lib/moveFiles.mjs'
import cleanup from './lib/cleanup.mjs'
import commitAllChanges from './lib/commitAllChanges.mjs'
import { pipeAsync } from './lib/utils.mjs'

/**
 * Configure a new CraftCMS project
 *
 * - Configures ddev / package.json / README.md
 * - Installs dependencies
 * - Configures CraftCMS
 * - Commits all changes
 * - Walks your dog
 * - Cures back pain
 *
 */
export default (defaultHandle) => {
  const program = makeCli(defaultHandle)

  program.parse()

  pipeAsync(
    getAnswers,
    templatify,
    moveFiles,
    installDependencies,
    setupCraft,
    cleanup,
    commitAllChanges,
  )(program.opts())
}

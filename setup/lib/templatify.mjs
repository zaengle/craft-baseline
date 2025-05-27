import { replaceInFile } from 'replace-in-file'

/**
 * Replace tokens in .tpl files with answers
 *
 * @example <% project.handle %>
 *
 * @param answers {Object}
 * @returns {Promise<{answers, fileChanges: *}>}
 */
export default async (answers) => {
  const makePattern = (token) => new RegExp(`<% project\.(${token}) %>`, 'g')

  try {
    const fileChanges = await replaceInFile({
      files: ['./**/*.tpl'],
      ignore: ['src/vendor/*', 'node_modules/*'],
      from: Object.keys(answers).map(makePattern),
      to: Object.values(answers),
      glob: {
        dot: true, // include file names starting with a dot
      },
    })
    return { answers, fileChanges }
  } catch (error) {
    console.error('Error occurred:', error)
    exit(1)
  }
}

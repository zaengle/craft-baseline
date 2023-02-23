import { command } from './utils.mjs'

export default async ({ answers }) => {
  try {
    if (answers.installDeps) {
      console.log('Installing dependencies...')
      await command('ddev composer install')
    }
    return { answers }
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

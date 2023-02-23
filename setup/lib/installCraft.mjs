import { command } from './utils.mjs'

export default async ({ answers }) => {
  try {
    if (answers.installCraft) {
      console.log('Installing Craft...')
      await command('ddev craft install/craft')
    }
    return { answers }
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

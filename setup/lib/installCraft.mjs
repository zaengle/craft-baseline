import { command } from './utils.mjs'

export default async ({ answers }) => {
  try {
    if (answers.installCraft) {
      console.log('Installing Craft...')
      await command('ddev craft install/craft')
      await command('ddev craft project-config/touch')
      await command('ddev craft up')
    }
    return { answers }
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

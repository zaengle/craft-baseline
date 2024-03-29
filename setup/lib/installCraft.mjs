import { command } from './utils.mjs'

export default async ({ answers }) => {
  try {
    if (answers.installCraft) {
      console.log('Installing Craft...')
      await command('ddev craft install/craft')
      await command('ddev craft plugin/install ckeditor')
      await command('ddev craft plugin/install conventions')
      await command('ddev craft plugin/install toolbelt')
      await command('ddev craft plugin/install vite')
      await command('ddev mutagen sync')
    }
    return { answers }
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

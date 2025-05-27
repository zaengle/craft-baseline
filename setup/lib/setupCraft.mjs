import { command } from './utils.mjs'

export default async ({ answers }) => {
  try {
    if (answers.installCraft) {
      console.log('Setting up Craft...')
      await command('ddev import-db --file=./setup/db/seed.sql')
      await command('ddev craft up --interactive=0 --no-backup')
      console.log('-------------------------------------')
      console.log('Set up admin user:')
      await command('ddev craft users/create --admin')
      await command('ddev mutagen sync')
    }
    return { answers }
  } catch (error) {
    console.error('Error occurred:', error)
  }
}


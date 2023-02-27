import { execSync } from 'node:child_process'

export default async () => {
  console.log('Syncing changes from ddev...')
  execSync('ddev mutagen sync')
  console.log('Committing changes to git...')
  execSync('git add .')
  execSync(`git commit -m "Configure project"`)
}

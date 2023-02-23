import { resolve } from 'node:path'
import { existsSync, renameSync, unlinkSync, copyFileSync } from 'fs'

export default async ({ answers, fileChanges }) => {
  fileChanges.forEach(({ file }) => {
    try {
      const oldPath = resolve(process.cwd(), file)
      const newPath = oldPath.replace(/\.tpl$/, '')
      console.log(`Updating file at ${newPath}`)
      if (existsSync(newPath)) {
        unlinkSync(newPath)
      }
      renameSync(oldPath, newPath.replace(/\.tpl$/, ''))
    }
    catch (error) {
      console.error('Error occurred:', error)
      exit(1)
    }
  })
  try {
    console.log('Creating .env file')
    copyFileSync(resolve(process.cwd(), '.env.example'), resolve(process.cwd(), '.env'))
  } catch (error) {
    console.error('Error occurred:', error)
    exit(1)
  }

  return { answers }
}

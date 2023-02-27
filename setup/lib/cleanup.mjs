import { rmSync } from 'node:fs'
import path from 'node:path'
export default async ({ answers }) => {
  try {
    console.log('Cleaning up...')
    rmSync(path.resolve(process.cwd(), 'setup'), { recursive: true })
    return { answers }
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

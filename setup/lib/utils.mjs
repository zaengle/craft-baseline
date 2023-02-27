import { spawn } from 'node:child_process'

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)
export const pipeAsync = (...fns) => (x) => fns.reduce((p, f) => p.then(f), Promise.resolve(x))
export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x)

export const command = (command = 'ls') => new Promise((resolve, reject) => {
  const shell = spawn(command, [], {
    stdio: 'inherit',
    shell: true,
  })
  shell.on('close', (code) => {
    console.log(`[${command}] terminated :`, code)
    resolve(code)
  })
  shell.on('error', (error) => {
    console.error(`[${command}] terminated with error:`, error)
    reject(error)
  })
})

export default {
  pipe,
  pipeAsync,
  compose,
  command,
}


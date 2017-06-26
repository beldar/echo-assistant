/*
Usage:
  node build-deps.js install
  node build-deps.js rebuild
*/

const childProcess = require('child_process')

const nodejsImage = 'node:6.10'
const innerWorkingDir = '/app'
const dockerArgs = [
  'run', '-i',
  '-v', `${process.cwd()}:${innerWorkingDir}`,
  '-w', innerWorkingDir,
  nodejsImage, 'npm'
]
const npmArgs = process.argv.slice(2)

const cp = childProcess.execFile(
  'docker',
  dockerArgs.concat(npmArgs),
  {},
  (err, stdout, stderr) => {}
)

cp.stderr.on('data', (data) => console.error(data))
cp.stdout.on('data', (data) => console.log(data))

cp.on('close', (code) => process.exit(code))

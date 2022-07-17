import readline from 'readline'

const rLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rLine.question(`What's your name? \n`, (name) => {
  console.log(`Hi ${name}!`)
  rLine.close()
})

// inquirer
// https://www.npmjs.com/package/inquirer
// A collection of common interactive command line user interfaces.

import express from 'express'
import colors from 'colors'
import chalk from 'chalk'

const app = express()
const port = 5000
app.get('/', (req, res) => res.send('In the name of of Allah the Merciful'))
app.listen(port, () =>
  console.log('App Running'.brightGreen.bold + chalk.magenta('...'))
)

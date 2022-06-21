import moment from 'moment'
import chalk from 'chalk'
import validator from 'validator'
import dotenv from 'dotenv'

moment().format()
dotenv.config()

const URL = process.env.URL

console.log(chalk.magenta(moment().format('LLLL')))
console.log(validator.isMobilePhone('01066078954', 'ar-EG'))
console.log(chalk.blueBright.bold('In the name of of Allah the Merciful'))

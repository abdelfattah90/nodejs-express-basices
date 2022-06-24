import moment from 'moment'
import chalk from 'chalk'
import validator from 'validator'
import dotenv from 'dotenv'
import morgan from 'morgan'
import bcrypt from 'bcryptjs'

moment().format()
dotenv.config()
app.use(morgan('dev'))

const URL = process.env.PORT

// Bcryptjs - Usage - Sync
const userPassword = '12345678'
const hashPassword = bcrypt.hashSync(userPassword, 10)
console.log(hashPassword)
console.log(bcrypt.compareSync(userPassword, hashPassword))

console.log(chalk.magenta(moment().format('LLLL')))
console.log(validator.isMobilePhone('01066078954', 'ar-EG'))
console.log(chalk.blueBright.bold('In the name of of Allah the Merciful'))

// req
app.use('/', (req, res) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>In the name of Allah the Merciful</h1>')
})

//res status
const user = {
  id: 0,
  name: 'Ahmed',
}
function getFriend(req, res) {
  const userId = Number(req.params.userId)
  const user = model[userId]
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({
      error: 'User does not exist',
    })
  }
}

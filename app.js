import express from 'express'

const app = express()
const port = 5000

app.use(express.static('public'))
app.use(['/css', '/js', '/images'], express.static('public'))

app.set('view engine', 'ejs')
app.use(express.json())

const user = {
  name: 'Ahmed',
  job: 'Backend developer',
  admin: true,
}

app.get('/', (req, res) => res.render('pages/index', { user: user }))

app.listen(port, () => console.log('App Running...'))

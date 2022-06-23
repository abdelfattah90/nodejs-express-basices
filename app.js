import express from 'express'
import router from './app/routes/routes.js'
const app = express()
const port = 5000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(['/css', '/js', '/images'], express.static('public'))

app.use(express.json())
app.use(router)

app.listen(port, () => console.log('App Running...'))

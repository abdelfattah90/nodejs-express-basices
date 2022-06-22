import express from 'express'
import user from './models/user.js'
import posts from './models/posts.js'

const app = express()
const port = 5000

app.use(express.json())
app.use(express.static('public'))
app.use(['/css', '/js', '/images'], express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index', { user: user }))
app.get('/posts', (req, res) => res.render('pages/posts', { posts: posts }))

app.listen(port, () => console.log('App Running...'))

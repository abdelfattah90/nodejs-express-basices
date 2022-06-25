import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

// Imported Files
import router from './app/routes/routes.js'
import postsRouter from './app/routes/posts.js'
import postIdRouter from './app/routes/post-id.js'

const app = express()
const port = 5000

// VIEWS
const dirname = path.dirname(fileURLToPath(import.meta.url))
app.set('view engine', 'ejs')
app.set('views', path.join(dirname, './app/views'))
app.use(express.static('./app/public'))

// ROUETS
app.use(express.json())
app.use([router, postsRouter, postIdRouter])

app.listen(port, () => console.log('App Running...'))

import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Imported Files
import router from './app/routes/routes.js'
import postsRouter from './app/routes/posts.js'
import postIdRouter from './app/routes/post-id.js'

const app = express()
dotenv.config()
const port_5 = 5000
const PORT = process.env.PORT

// VIEWS
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './app/views'))
app.use(express.static('./app/public'))

// ROUETS
app.use(express.json())
app.use([router, postsRouter, postIdRouter])

app.listen(PORT || port_5, () => console.log('App Running...'))

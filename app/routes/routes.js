import express from 'express'
import user from '../models/user.js'
import posts from '../models/posts.js'

const router = express.Router()

router.get('/', (req, res) => res.render('pages/index', { user: user }))
router.get('/posts', (req, res) => res.render('pages/posts', { posts: posts }))
router.get('/*', (req, res) => res.render('pages/404'))
export default router

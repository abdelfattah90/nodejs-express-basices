import express from 'express'
const postsRouter = express.Router()

//localhost:5000/api/posts  => GET - POST - DELETE

http: postsRouter
  .route('/api/posts')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  // GET
  .get((req, res, next) => {
    res.end('All Posts...')
  })
  // POST
  .post((req, res, next) => {
    res.end(`Add Post title is: ${req.body.title} `)
  })
  // PUT
  .put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not support /api/posts')
  })
  // DELETE
  .delete((req, res, next) => {
    res.end('Deleting All Posts!!')
  })

export default postsRouter

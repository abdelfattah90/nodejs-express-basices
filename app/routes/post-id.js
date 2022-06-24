import express from 'express'
const postIdRouter = express.Router()

//localhost:5000/api/posts/1  => GET - PUT - DELETE

postIdRouter
  .route('/api/posts/:id')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  // GET-ID
  .get((req, res, next) => {
    res.end(`The Post ID : ${req.params.id}`)
  })

  // POST-ID
  .post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on /api/posts/  ${req.params.id}`)
  })

  // PUT-ID
  .put((req, res, next) => {
    res.write(`Update Post ID: ${req.params.id} -  `)
    res.end(`Update Post Name: ${req.body.title}`)
  })

  // DELETE-ID
  .delete((req, res, next) => {
    res.end(`Deleting the post: ${req.params.id}`)
  })

export default postIdRouter

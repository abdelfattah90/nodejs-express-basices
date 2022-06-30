import http from 'http'

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Ahmed</h1>')
})

server.listen(5000)

console.log(req)
console.log(req.url)
console.log(req.headers)

if (req.url === '/users') {
  res.end('<h1>Users</h1>')
}

res.statusCode = 404

res.setHeader('Content-Type', 'text/html')
res.setHeader('Content-Type', 'text/json')

res.writeHead(200, { 'Content-Type': 'application/json' })

res.end(
  JSON.stringify({
    data: 'Hello World!',
  })
)

const user = {
  id: 1,
  name: 'Ahmed',
}

function getUser(req, res) {
  const userId = Number(req.params.userId)
  const user = user[userId]
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({
      error: 'User does not exist',
    })
  }
}

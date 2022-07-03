import http from 'http'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/items') {
    // BLOCKING CODE!
    for (let i = 0; i < 1000; i++) {
      for (let x = 0; x < 1000; x++) {
        console.log(`${i} - ${x}`)
      }
    }
    res.end('Items Page')
  }
  res.end('404')
})

server.listen(5000, () => console.log('Server Running...'))

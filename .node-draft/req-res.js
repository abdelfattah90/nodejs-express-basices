// req
app.use('/', (req, res) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>In the name of Allah the Merciful</h1>')
})

//res status
const user = {
  id: 0,
  name: 'Ahmed',
}
function getFriend(req, res) {
  const userId = Number(req.params.userId)
  const user = model[userId]
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({
      error: 'User does not exist',
    })
  }
}

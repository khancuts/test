const http = require('http')

// without emitet the syntax
// const server = http.createServer((req, res) => {
//   res.end('welcome')
// })

// using emitter API's
const server = http.createServer()
// emit request event
// subscribe to it/listen for it /respond on it
server.on('request', (req, res) => {
  res.end('welcome')
})

server.listen(5000)

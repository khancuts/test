const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my homepage')
  } else if (req.url === '/about') {
    res.end('here is our short history')
  } else {
    res.end(`
<h1> Ooops!!! </h1>
<p> We can't find the page you looking for </p>
<a href="/"> back to homepage </a>
    `)
  }
})

server.listen(5000)

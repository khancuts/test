const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)
  // refactor
  const filestream = fs.createReadStream('./content/big.txt', 'utf8')
  filestream.on('open', () => {
    filestream.pipe(res)
  })
  filestream.on('error', (err) => res.end(err))
})

server.listen(5000)

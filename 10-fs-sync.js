const { readFileSync, writeFileSync } = require('fs')
console.log('start')
// read the file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

// write file and to apend use flag function so your file will not overwrite
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second} `,
  { flag: 'a' },
)

console.log('done with this task')
console.log('starting next task')

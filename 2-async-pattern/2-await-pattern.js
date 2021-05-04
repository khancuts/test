const { readFile, writeFile } = require('fs').promises
const { reject } = require('lodash')
const { resolve } = require('path')

//1. async await method
const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME: 1. ${first} \n 2. ${second}`,
    )
    console.log(`the result is: 1. ${first} \n 2. ${second}`)
  } catch (error) {
    console.log(error)
  }
}

start()

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf8')
//     const second = await readFilePromise('./content/second.txt', 'utf8')
//     await writeFilePromise(
//       './content/result-mind-grenade.txt',
//       `THIS IS AWESOME: 1. ${first} \n 2. ${second}`,
//     )
//     console.log(`the result is: 1. ${first} \n 2. ${second}`)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }

// 2. async get/then/catch
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

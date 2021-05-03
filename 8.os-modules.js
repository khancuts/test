const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
// return the system uptime in second
console.log(`my system uptime is ${os.uptime()} seconds`)
// find your computer system
const currentOs = {
  name: os.type,
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOs)

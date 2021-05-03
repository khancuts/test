const path = require('path')

// to see your os eparator using symbol
console.log(path.sep)

// to see path
// path.join(folder, subfolder(opt), name file)
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// to get the fileName / baseName directly
const base = path.basename(filePath)
console.log(base)

// to get absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

import path from 'path'
import { fileURLToPath } from 'url'

const filePath = path.join('/files', 'file', 'text.txt')
const filebase = path.basename(filePath)
console.log(path.sep)
console.log(filePath)
console.log(filebase)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const absolute = path.resolve(__dirname, 'files', 'file', 'text.txt')
console.log(absolute)

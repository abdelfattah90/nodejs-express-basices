import util from 'util'
import { readFile } from 'fs'

const readFilePromise = util.promisify(readFile)

const start = async () => {
  try {
    const first = await readFilePromise('./files/file/text.txt', 'utf-8')
    const second = await readFilePromise('./files/file/async.txt', 'utf-8')
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}
start()

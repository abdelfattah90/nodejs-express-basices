import { readFileSync, writeFileSync } from 'fs' // SYNC
import { readFile, writeFile } from 'fs' // ASYNC

// // SYNC
console.log('1 - Start!')
const txtFile = readFileSync('./files/file/text.txt', 'utf-8')
console.log('2 - Before..', txtFile)

writeFileSync('./files/file/text.txt', ' - Alhamdulillah  - SYNC', {
  flag: 'a', // prevent erase the data
})
const txtFileAfter = readFileSync('./files/file/text.txt', 'utf-8')
console.log('3 - After..', txtFileAfter)
console.log('4 - Done! - SYNC')

// ASYNC
console.log('1 - Start!')
readFile('./files/file/text.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    console.log(result)
  }
  writeFile(
    './files/file/text.txt',
    ' - Alhamdulillah - ASYNC ',
    { flag: 'a' },
    (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('2 - Writed..')
    }
  )
})

console.log('3 - Done! - ASYNC')

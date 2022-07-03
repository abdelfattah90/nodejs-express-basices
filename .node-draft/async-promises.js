import { readFile } from 'fs'

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// getText('./files/file/text.txt')

// getText('./files/file/text.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

const start = async () => {
  try {
    const first = await getText('./files/file/text.txt')
    const second = await getText('./files/file/async.txt')
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}
start()

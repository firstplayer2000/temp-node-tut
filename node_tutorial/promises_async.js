const {readFile, writeFile} = require('fs').promises


const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('.content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
}

start()



// FIRST VERSION

// const {readFile, writeFile} = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))



// SECOND VERSION

// const {readFile, writeFile} = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async() => {
//     try {
//         const first = await getText('./first.txt')
//         const second = await getText('./second.txt')
//         console.log(first, second)
//     } catch(error) {
//         console.log(error)
//     }
// }

// start()



// THIRD VERSION

// const {readFile, writeFile} = require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// const start = async() => {
//     try {
//         const first = await readFilePromise('./first.txt', 'utf-8')
//         const second = await readFilePromise('./second.txt', 'utf-8')
//         await writeFilePromise('./result-mind-grenade.txt',
//             `THIS IS AWESOME : ${first} ${second}`)
//         console.log(first, second)
//     } catch(error) {
//         console.log(error)
//     }
// }

// start()
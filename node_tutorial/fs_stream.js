var http = require('http')
var fs = require('fs')

// Penso che il mio processore faccia fatica a reggere lo stream
http.createServer(function(req, res) {
    const fileStream = fs.createReadStream('.content/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)

// http.createServer(function(req, res) {
//     const text = fs.readFileSync('.content/big.txt', 'utf8')
//     res.end(text)
// }).listen(5000)

// const {createReadStream} = require('fs')

// const stream = createReadStream('.content/big.txt', {highWaterMark: 90000, encoding:'utf8'})

// stream.on('data', (result) => {
//     console.log(result)
// })
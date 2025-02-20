const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)

// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name='peter', id=44) => {
//     console.log(`data received user ${name} with id: ${id}`)
// })

// customEmitter.on('response', () => {
//     console.log(`some other logic`)
// })


// customEmitter.emit('response', 'john', 34)
// customEmitter.emit('response')
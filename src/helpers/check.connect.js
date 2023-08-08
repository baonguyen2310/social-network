const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECONDS = 5000

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnections = numCores * 5
        if (numConnections > maxConnections){
            console.log('overload connections')
        }
        console.log(`memory usage: ${memoryUsage/1024/1024} MB`)
        console.log(`active connections: ${numConnections}`)
        

    }, _SECONDS)
}

module.exports = {
    checkOverload
}
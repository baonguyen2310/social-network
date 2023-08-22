const { db: { host, port, name } } = require('../configs/config.mongodb')
const mongoose = require('mongoose')


const connectionString = `mongodb://${host}:${port}/${name}`

class Database {
    constructor(){
        this.connect()
    }

    connect(type = 'mongodb'){
        mongoose.connect(connectionString, {
            maxPoolSize: 100
        }).then(() => console.log('connected database success'))
        .catch((err) => console.log('connect database error'))
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceDatabase = Database.getInstance()
module.exports = instanceDatabase
const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017'

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
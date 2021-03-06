import mongoose from 'mongoose'
import config from './index'

mongoose.connect(config.databaseURI,config.databaseOption)

mongoose.connection.on('connected', () => {
    console.log('mongo connection open')
})

mongoose.connection.on('error', (err) => {
    throw `mongo connection: ${err}`
})

mongoose.connection.on('disconnected', () => {
    console.log('mongo connection disconnected')
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        process.exit(0, console.log('mongo connection disconnected through app termination'))
    })
})

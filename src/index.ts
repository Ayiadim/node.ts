import { Expresss } from './express'
import { Sockets } from './sockets'
import { Redis } from './redis'
import { Mongo } from './mongo'

void async function main() {
    let server = await Expresss.getServer()
    let sockets = await Sockets.getServer(server)
    let redis = await Redis.getClient()
    let db = await Mongo.getDb()

    console.log('Ready to go')
}()

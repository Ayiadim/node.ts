import { Expresss } from './express'
import { Sockets } from './sockets'

void async function main() {
    let server = await Expresss.getServer()
    let sockets = await Sockets.getServer(server)

    console.log(`Listening on 0.0.0.0:${process.env.EXPRESS_PORT || 3000}`)
}()

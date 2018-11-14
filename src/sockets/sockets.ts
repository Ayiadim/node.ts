import * as http from "http";
import * as io from 'socket.io'

export class Sockets {
    private static sockets: io.Server

    static init(server: http.Server) {
        this.sockets = io.listen(server)
        this.sockets.on('connection', this.onConnect)
    }

    private static onConnect(socket) {
        socket.on('disconnect', this.onDisonnect)
        console.log('Client connected')
    }

    private static onDisonnect() {
        console.log('Client disconnected')
    }

    static getServer(server?): io.Server {
        if (!this.sockets && !server) {
            throw new Error('Please initalize')
        }
        if (!this.sockets) {
            this.init(server)
        }
        return this.sockets
    }

    static sendAll(channel, body) {
        this.sockets.emit(channel, body)
    }

    static send(id, channel, body) {
        this.sockets.to(id).emit(channel, body)
    }
}
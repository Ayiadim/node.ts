import { config } from "./services/config.service"
import { app } from "./app.express"
let server

// The steps involved in init
export const init = () => {
    server = app.listen(config.http.port, config.http.hostname, () => console.log(`Server | ${config.http.hostname}:${config.http.port}`))
}

// Server cleanup
export const cleanup = () => {
    server.close()
}
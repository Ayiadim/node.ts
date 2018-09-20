import * as redis from 'redis'

export class Redis {
    static client

    static async getClient() {
        if (this.client) {
            return this.client
        }

        const client = redis.createClient(process.env.REDIS_HOST)

        this.client = await new Promise((res, rej) => {
            client.on('connect', _ => res(client))
            client.on('error', err => rej(err))
        })

        return this.client
    }

    static async set(key, value) {
        const c = await this.getClient()
        return new Promise((res, rej) => c.set(key, value, (err, reply) => err ? rej(err) : res(reply)))
    }

    static async get(key) {
        const c = await this.getClient()
        return new Promise((res, rej) => c.get(key, (err, reply) => err ? rej(err) : res(reply)))
    }
}

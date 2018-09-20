import * as mongo from 'mongodb'
const MongoClient = mongo.MongoClient

export class Mongo {
    private static db: mongo.Db

    static async getDb():Promise<mongo.Db> {
        if (this.db) {
            return this.db
        }

        const dbClient = await MongoClient.connect(process.env.MONGO_HOST, { useNewUrlParser: true })
        this.db = dbClient.db(process.env.MONO_DATABASE_NAME)

        return this.db
    }
}
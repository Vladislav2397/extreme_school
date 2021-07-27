import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default function routes (fastify: FastifyInstance & { mongo: any }, options: FastifyPluginOptions): void {
    const collection = fastify.mongo.db.collection('general')

    console.log(collection)

    fastify.get('/api', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/api/general', async (request, reply) => {
        return await collection.find().toArray()
    })
}


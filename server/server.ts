import {
    fastify,
    FastifyInstance,
    FastifyReply,
    FastifyRequest
} from 'fastify'
import { Collection } from 'mongodb'
import fastifyBlipp from 'fastify-blipp'
import fastifyMongooseAPI from 'fastify-mongoose-api'
import fastifyMongodb from 'fastify-mongodb'
import fastifyCors from 'fastify-cors'
import routes from './routes/routes'

import './generalModel'
const server: FastifyInstance = fastify({logger: true})

server.register(routes)
server.register(fastifyCors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
})
server.register(fastifyMongooseAPI)
server.register(fastifyMongodb, {
    url: 'mongodb://localhost:27017/extreme_school_db',
})
server.register(fastifyBlipp)

function dbCollection (name: string) {
    return server?.mongo?.db?.collection(name)
}

server.get(
    '/api/general',
    {},
    (request: FastifyRequest, reply: FastifyReply) => {
        const response: Collection | undefined = dbCollection('general')
        if (response) {
            response.find({}).toArray().then(result => {
                reply.send(result)
            })
        }
    }
)

server.get(
    '/api/content',
    {},
    (request: FastifyRequest, reply: FastifyReply) => {
        const response: Collection | undefined = server?.mongo?.db?.collection('content')
        if (response) {
            response.find({}).toArray().then(result => {
                reply.send(result)
            })
        }
    }
)

server.put(
    '/api/content',
    async (request: FastifyRequest, reply: FastifyReply) => {
        const contentCollection = dbCollection('content')

        const collections: Collection<Document>[] | undefined =
            await contentCollection?.find({}).toArray()

        console.log(collections)
    }
)

server.listen(8081, (error: Error, address: string) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

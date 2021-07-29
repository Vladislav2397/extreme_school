import { fastify, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fastifyBlipp from 'fastify-blipp'
import fastifyMongodb from 'fastify-mongodb'
import routes from './routes/routes'

import './generalModel'
const server: FastifyInstance = fastify({logger: true})

server.register(routes)
server.register(fastifyMongodb, {
    url: 'mongodb://localhost:27017/extreme_school_db',
})
server.register(fastifyBlipp)

server.get(
    '/api/app',
    {},
    (request: FastifyRequest, reply: FastifyReply) => {
        const response = server?.mongo?.db?.collection('general')
        response?.find({}).toArray().then(result => {
            reply.send(result)
        })
    }
)

server.listen(8081, (error: Error, address: string) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

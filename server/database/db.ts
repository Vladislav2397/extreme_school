import fastifyPlugin from 'fastify-plugin'
import { FastifyInstance } from 'fastify'

async function dbConnector (fastify: FastifyInstance, options: any) {
    fastify.register(import('fastify-mongodb'), {
        url: 'mongodb://localhost:27017/extreme_school_db'
    })
}

export default fastifyPlugin(dbConnector)

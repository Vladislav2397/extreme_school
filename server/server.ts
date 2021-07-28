import { fastify, FastifyInstance } from 'fastify'
import routes from './routes/routes'

const server: FastifyInstance = fastify({logger: true})
    .register(routes)

server.listen(8081, (error: Error, address: string) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

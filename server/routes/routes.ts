import fastifyPlugin from 'fastify-plugin'
import {
    FastifyInstance,
    FastifyPluginAsync,
    FastifyReply,
    FastifyRequest,
} from 'fastify'

export default fastifyPlugin(async (
    fastify: FastifyInstance,
    // opts: FastifyPluginOptions
): Promise<void> => {
    fastify.get(
        '/api',
        {},
        (request: FastifyRequest, reply: FastifyReply) => {
            reply.code(200).send('all ok here')
        }
    )
}) as FastifyPluginAsync

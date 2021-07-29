import { Model } from 'mongoose'
import * as Mongoose from 'mongoose'
import fastifyPlugin from 'fastify-plugin'
import {
    FastifyInstance,
    FastifyPluginAsync,
    FastifyPluginOptions
} from 'fastify'
import fastifyMongodb from 'fastify-mongodb'

export default fastifyPlugin(async (
    fastify: FastifyInstance,
    options: FastifyPluginOptions
): Promise<void> => {
    fastify.register(fastifyMongodb, {
        url: 'mongodb://localhost:27017/extreme_school_db',
        name: 'mongodb'
    } as fastifyMongodb.FastifyMongodbOptions)
}) as FastifyPluginAsync

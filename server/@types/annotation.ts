import { FastifyInstanse } from 'fastify'

declare module 'fastify' {
    export interface FastifyInstanse {
        blipp(): void
    }
}

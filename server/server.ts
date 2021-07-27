import fastify from 'fastify'

const server = fastify({logger: true})

server.register(import('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://localhost:27017/extreme_school_db'
})

server.get('/api/general', function (req: any, reply: any) {
    const db: any = this.mongo.db

    db.collection('general', (error: string, col: any) => {
        if (error) return reply.send(error)

        col.findOne({id: req.params.id}, (err: any, general: any) => {
            reply.send(general)
        })
    })
})

server.listen(8081, error => {
    console.error(error)
})

const fastify = require('fastify')({
    logger: true
})
const routes = require('./routes')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lcofastify')
    .then(() => console.log('Mongo is ready !!'))
    .catch(err => console.log(err))

fastify.get('/', async (request, reply) => {
    return { visitor: 'Learn Code Online' }
})

routes.forEach((route, index) => {
    fastify.route(route)
})

const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server is listening on port ${address}`)
    } catch (error) {

    }
}

start();
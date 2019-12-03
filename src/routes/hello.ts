import { Server, Request, ResponseObject } from '@hapi/hapi'
import HelloController from '../controllers/helloController'

const helloRoute = (server: Server) => {
  const helloController = new HelloController(server)

  server.route({
    method: 'GET',
    path: '/hello',
    // tags: ['api'],
    handler: helloController.show,
  })
}

export default helloRoute

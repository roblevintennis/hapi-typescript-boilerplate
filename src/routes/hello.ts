import { Server, Request, ResponseObject } from '@hapi/hapi'
import HelloController from '../controllers/helloController'

const helloRoute = (server: Server) => {
  const helloController = new HelloController(server)

  server.route({
    method: 'GET',
    path: '/hello',
    options: {
      handler: helloController.show,
      tags: ['api'],
    },
  })
}

export default helloRoute

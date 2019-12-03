import * as hapi from '@hapi/hapi'

// create a server with a host and port
const server: hapi.Server = new hapi.Server({
  host: 'localhost',
  port: 8000,
})
// add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request: hapi.Request, h: hapi.ResponseObject) {
    return 'hello world'
  },
})

export default server

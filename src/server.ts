import * as hapi from '@hapi/hapi'
import helloRoute from './routes/hello'

// create a server with a host and port
const server: hapi.Server = new hapi.Server({
  host: 'localhost',
  port: 8000,
})

helloRoute(server)

export default server

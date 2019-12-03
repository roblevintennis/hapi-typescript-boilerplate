import * as hapi from '@hapi/hapi'
import helloRoute from './routes/hello'
import registerSwagger from './plugins/swagger'

export default async () => {
  const server: hapi.Server = new hapi.Server({
    host: 'localhost',
    port: 8000,
  })

  let pluginPromises: Promise<any>[] = []
  pluginPromises.push(registerSwagger(server))
  // TODO: Mo' plugins :)
  await Promise.all(pluginPromises)

  helloRoute(server)

  return server
}

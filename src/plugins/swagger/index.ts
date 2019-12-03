import * as Hapi from '@hapi/hapi'
import * as HapiSwagger from 'hapi-swagger'
import * as Inert from '@hapi/inert'
import * as Vision from '@hapi/vision'

// code omitted for brevity

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'API Documentation',
    description: 'Api Documentation',
    version: '1.0',
  },
}

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
  {
    plugin: Inert,
  },
  {
    plugin: Vision,
  },
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
]

const register = async (server: Hapi.Server): Promise<void> => {
  try {
    await server.register(plugins)
  } catch (err) {
    console.log(`Error registering swagger plugin: ${err}`)
  }
}

export default register

import deploy from './server'

async function start() {
  try {
    const server = await deploy()
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
start()

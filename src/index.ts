import Server from './server'

async function start() {
  try {
    await Server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server running at:', Server.info.uri)
}
start()

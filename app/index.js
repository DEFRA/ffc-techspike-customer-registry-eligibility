const server = require('./server')
const messaging = require('./messaging')

const init = async () => {
  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

process.on('SIGTERM', async () => {
  await messaging.stop()
  process.exit(0)
})
process.on('SIGINT', async () => {
  await messaging.stop()
  process.exit(0)
})
module.exports = (async function startService () {
  await messaging.start()
  await init()
}())

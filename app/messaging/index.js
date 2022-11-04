const { MessageReceiver } = require('ffc-messaging')
const processEligibilityRequest = require('./process-event-request')
const { eligibilityRequestQueue } = require('../config').messageQueueConfig

let eligibilityReceiver

const start = async () => {
  const eligibilityAction = message => processEligibilityRequest(message, eligibilityReceiver)
  eligibilityReceiver = new MessageReceiver(eligibilityRequestQueue, eligibilityAction)
  await eligibilityReceiver.subscribe()

  console.info('Ready to receive messages')
}

const stop = async () => {
  await eligibilityReceiver.closeConnection()
}

module.exports = { start, stop }

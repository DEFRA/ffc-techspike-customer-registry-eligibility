const { getParcels } = require('../api/parcels')
const sendScheme = require('../messaging/send-scheme')

const processEligibilityRequest = async (message, receiver) => {
  try {
    const messageBody = message.body
    console.log('Received eligibility request', messageBody)
    const sbi = messageBody.sbi
    const parcels = await getParcels(sbi)
    console.log('Checking for more than 20 hectares')
    const hectares = parcels.features.reduce((total, feature) => Math.ceil(total + feature.properties.area_ha), 0)
    console.log('Total hectares', hectares)

    if (hectares >= 20) {
      console.log('Sending eligible scheme')
      await sendScheme(sbi)
    }

    await receiver.completeMessage(message)
  } catch (err) {
    await receiver.deadLetterMessage(message)
    console.error('Unable to process event request:', err)
  }
}

module.exports = processEligibilityRequest

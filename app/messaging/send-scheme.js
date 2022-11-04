const sendMessage = require('../messaging/send-message')
const { customerRegistryRequestQueue } = require('../config').messageQueueConfig

const sendScheme = async (sbi) => {
  const scheme = {
    type: 'update-scheme',
    source: 'ffc-techspike-customer-registry-eligibility',
    timestamp: new Date(),
    updatedBy: 'eligibility',
    data: {
      sbi: 113692789,
      name: 'SFI',
      reference: ''
    }
  }
  await sendMessage(scheme, 'eligibility', customerRegistryRequestQueue)
}

module.exports = sendScheme

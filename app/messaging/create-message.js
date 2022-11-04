const createMessage = (body, type, options) => {
  return {
    body,
    type,
    source: 'ffc-techspike-customer-registry-eligibility',
    ...options
  }
}

module.exports = createMessage

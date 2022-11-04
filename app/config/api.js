
const Joi = require('joi')

const schema = Joi.object({
  landEndpoint: Joi.string().required()
})

const config = {
  landEndpoint: process.env.LAND_ENDPOINT
}

const { error, value } = schema.validate(config, { abortEarly: false })

if (error) {
  throw new Error(`The api config is invalid. ${error.message}`)
}

module.exports = value

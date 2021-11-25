const Joi = require('joi')

const ContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required()
})

module.exports = ContactSchema

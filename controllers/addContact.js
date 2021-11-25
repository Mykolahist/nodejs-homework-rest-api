const contactsOperations = require('../model/db')

const ContactSchema = require('../routes/validation/ContactSchema')

const addContact = async (req, res, next) => {
  try {
    const { error } = ContactSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.message
      })
    }
    const newContact = await contactsOperations.addContact(req.body)
    return res.status(201).json({
      newContact
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact

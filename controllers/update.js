const contactsOperations = require('../model/db')

const ContactSchema = require('../routes/validation/ContactSchema')

const update = async (req, res, next) => {
  try {
    const { error } = ContactSchema.validate(req.body)

    if (error) {
      return res.status(400).json({
        message: error.message
      })
    }
    const { contactId } = req.params
    const updateContact = await contactsOperations.update(contactId, req.body)
    if (!updateContact) {
      return res.status(404).json({
        message: 'Not found'
      })
    }
    return res.status(200).json({
      updateContact
    })
  } catch (error) {
    next(error)
  }
}
module.exports = update

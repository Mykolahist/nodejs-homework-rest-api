const contactsOperations = require('../model/db')

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const deleteContact = await contactsOperations.removeContact(contactId)
    if (!deleteContact) {
      return res.status(404).json({
        message: 'Not found'
      })
    }
    return res.status(200).json({
      message: 'contact deleted'
    })
  } catch (error) {
    next(error)
  }
}
module.exports = removeContact

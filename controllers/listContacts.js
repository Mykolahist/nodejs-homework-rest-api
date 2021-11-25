const contactsOperations = require('../model/db')

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts()
    return res.status(200).json({
      contacts
    })
  } catch (error) {
    next(error)
  }
}

module.exports = listContacts

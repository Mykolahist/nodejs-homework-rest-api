const listContacts = require('./listContacts')
const getById = require('./getById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const update = require('./update')
const updateStatus = require('./updateStatus')

module.exports = {
  listContacts,
  getById,
  addContact,
  removeContact,
  update,
  updateStatus
}

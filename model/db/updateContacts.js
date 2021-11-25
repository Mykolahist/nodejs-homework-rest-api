const fs = require('fs/promises')

const contactsPath = require('./contactsPath')

const updateContacts = async (contacts) => {
  const contactsToString = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactsToString)
}

module.exports = updateContacts

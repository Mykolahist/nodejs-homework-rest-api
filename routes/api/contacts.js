const express = require('express')

const { joiSchema } = require('../../models/contact')
const { validation } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

const validationMiddleware = validation(joiSchema)

const router = express.Router()

router.get('/', ctrl.listContacts)

router.get('/:contactId', ctrl.getById)

router.post('/', validationMiddleware, ctrl.addContact)

router.delete('/:contactId', ctrl.removeContact)

router.put('/:contactId', validationMiddleware, ctrl.update)

router.patch('/:contactId/favorite', ctrl.updateStatus)

module.exports = router

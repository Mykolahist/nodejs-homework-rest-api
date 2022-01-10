const express = require('express')

const { joiContactSchema } = require('../../models')
const { validation, authenticate } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

const validationMiddleware = validation(joiContactSchema)

const router = express.Router()

router.get('/', authenticate, ctrl.listContacts)

router.get('/:contactId', ctrl.getById)

router.post('/', authenticate, validationMiddleware, ctrl.addContact)

router.delete('/:contactId', ctrl.removeContact)

router.put('/:contactId', authenticate, validationMiddleware, ctrl.update)

router.patch('/:contactId/favorite', ctrl.updateStatus)

module.exports = router

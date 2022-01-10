const express = require('express')

const { validation, authenticate, upload } = require('../../middlewares')
const { joiUserSchema } = require('../../models')
const { auth: ctrlAuth, contacts: ctrlContacts, user: ctrlUser } = require('../../controllers')

const validationUserMiddleware = validation(joiUserSchema)

const router = express.Router()

router.post('/users/signup', validationUserMiddleware, ctrlAuth.signup)

router.post('/users/signin', validationUserMiddleware, ctrlAuth.signin)

router.get('/users/signout', authenticate, ctrlAuth.signout)

router.get('/users/current', authenticate, ctrlContacts.listContacts)

router.patch('/users', authenticate, ctrlUser.updateSubscr)

router.get('/users/favorite', authenticate, ctrlContacts.getFavorite)

router.patch('/users/avatars', authenticate, upload.single('avatarURL'), ctrlUser.updateAvatar)

module.exports = router

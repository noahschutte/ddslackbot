const { sendDM } = require('./modules/slack')
const { managerId } = require('config')

sendDM(managerId, 'yo yo yo')
const { sendDM } = require('../modules/slack')
const { readPurchaseRequest, recordPurchaseRequestDecision } = require('../modules/database')

module.exports = app => {
    app.post('/action', async (req, res) => {
        const interactiveMessage = JSON.parse(req.body.payload)
        const originalTextMessage = interactiveMessage.original_message.text
        const databaseKey = interactiveMessage.actions[0].name
        const requestDecision = interactiveMessage.actions[0].value

        res.json({
            text: originalTextMessage,
            attachments: [
                { text: requestDecision }
            ]
        })

        recordPurchaseRequestDecision(databaseKey, requestDecision)

        const purchaseRequest = await readPurchaseRequest(databaseKey)

        sendDM(
            purchaseRequest.userId,
            `Your purchase request for ${purchaseRequest.item} was ${requestDecision}`
        )
    })
}
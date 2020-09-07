const { sendDM } = require('../modules/slack')

module.exports = app => {
    app.post('/action', async (req, res) => {
        const interactiveMessage = JSON.parse(req.body.payload)
        // console.log(interactiveMessage)
        // const requestApproved = interactiveMessage.actions[0].value === 'approved'
        const originalTextMessage = interactiveMessage.original_message.text

        res.json({
            text: originalTextMessage,
            attachments: [
                { text: interactiveMessage.actions[0].value }
            ]
        })
        const matches = originalTextMessage.match(/@(.+)>.+\*(.+)\*/)
        sendDM(
            matches[1],
            `Your purchase request for ${matches[2]} was ${interactiveMessage.actions[0].value}`
        )
    })
}
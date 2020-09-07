const { sendDM } = require('../modules/slack')
const config = require('../config')
const { savePurchaseRequest } = require('../modules/database')

module.exports = app => {
    app.post('/purchase', async (req, res) => {
        const { text, user_id } = req.body
        res.json({
            text: `Thanks for your purchase request of *${text}*. We will request approval from the manager now.`
        })

        const key = savePurchaseRequest(user_id, text)

        sendDM(
            config.managerId,
            `<@${user_id}> has requested *${text}*.`,
            [
                {
                    text: "Would you like to approve?",
                    callback_id: 'purchase_request',
                    actions: [
                        {
                            name: key,
                            text: "Yes, I approve",
                            type: "button",
                            value: "approved"
                        },
                        {
                            name: key,
                            text: "No",
                            type: "button",
                            value: "declined"
                        }
                    ]
                }
            ]
        )
    })
}
const { sendDM } = require('../modules/slack')
const config = require('../config')

module.exports = app => {
    app.post('/purchase', async (req, res) => {
        const { text, user_id } = req.body
        res.json({
            text: `Thanks for your purchase request of *${text}*. We will request approval from the manager now.`
        })
        sendDM(
            config.managerId,
            `<@${user_id}> has requested *${text}*.`,
            [
                {
                    text: "Would you like to approve?",
                    callback_id: 'purchase_request',
                    actions: [
                        {
                            name: "auth_button",
                            text: "Yes, I approve",
                            type: "button",
                            value: "approved"
                        },
                        {
                            name: "auth_button",
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
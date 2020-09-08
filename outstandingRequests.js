const moment = require('moment')
const { readAllPurchaseRequests } = require('./modules/database')
const { sendDM } = require('./modules/slack')
const config = require('./config')

const checkOnPurchaseRequests = async _ => {
    const purchaseRequests = await readAllPurchaseRequests()
        
    const purchaseRequestReminders = []
    
    for (let key of Object.keys(purchaseRequests)) {
        const { decision, item, userId } = purchaseRequests[key]

        if (!decision) {
            purchaseRequestReminders.push({
                item, userId
            })
        }
    }

    sendDM(
        config.managerId,
        "You still have some requests to review.",
        purchaseRequestReminders.map(request => ({
            text: `*${request.item}* requested by <@${request.userId}>`
        }))
    )
}

checkOnPurchaseRequests()
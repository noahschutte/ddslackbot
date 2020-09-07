const admin = require("firebase-admin");
const config = require('../config');
const moment = require("moment");

const serviceAccount = require(`../keys/${config.firebasePrivateKey}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ddslackbot.firebaseio.com"
});

const db = admin.database()
const ref = db.ref('/')

const savePurchaseRequest = (userId, item) => {
    const response = ref.push({
        userId,
        item,
        timestamp: moment().valueOf()
    })
    return response.key
}

const readPurchaseRequest = async key => {
    const snapshot = await ref.child(key).once('value')
    return snapshot.val()
}

const recordPurchaseRequestDecision = async (key, decision) => {
    ref.child(key).update({
        decision
    })
}

module.exports = {
    savePurchaseRequest,
    readPurchaseRequest,
    recordPurchaseRequestDecision
}
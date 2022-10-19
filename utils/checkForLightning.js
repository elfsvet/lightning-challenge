const calculateQuadKey = require('./calculateQuad')
const assetsToMessage = require('./assetsToMessage')
const assets = require('../assets.json')
const alertsObject = {}
const results = []

const checkForLightning = (obj) => {

    const quadKey = calculateQuadKey(obj.latitude, obj.longitude)
    assets.map(asset => {
        if (asset.quadKey === quadKey) {
            if (!alertsObject.hasOwnProperty(asset.assetOwner)) {
                console.log(assetsToMessage(asset.assetOwner, asset.assetName))
                results.push(assetsToMessage(asset.assetOwner, asset.assetName))
                alertsObject[asset.assetOwner] = 1
            } else {
                alertsObject[asset.assetOwner]++;
                console.log('No in the assets area')
            }
        }
    })
    return 
}
console.log(

    checkForLightning({"flashType":1,"strikeTime":1446760902510,"latitude":8.7020156,"longitude":-12.2736188,"peakAmps":3034,"reserved":"000","icHeight":11829,"receivedTime":1446760915181,"numberOfSensors":6,"multiplicity":1})
)

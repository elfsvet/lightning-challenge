const alertToMessage = require('./assetsToMessage')


module.exports = assetCheck = (asset,quadKey) => {
    const { assetOwner, assetName, quadKey: assetQuadKey } = asset;
    if (assetQuadKey === quadKey) {
        return alertToMessage(assetOwner, assetName)
    }
}
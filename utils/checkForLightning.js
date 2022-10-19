const fs = require('fs');
// to calculate the quadKey we will use the npm package
const calculateQuadKey = require('./calculateQuadKey');
const assetsToMessage = require('./assetsToMessage');
const alertAppear = {};
const assets = require('../core/assets.json');
const oneLine = {"flashType":1,"strikeTime":1446761075144,"latitude":33.651259,"longitude":-97.4635108,"peakAmps":4970,"reserved":"000","icHeight":18827,"receivedTime":1446761087837,"numberOfSensors":19,"multiplicity":14}


const checkForLightning = (lightningObj) => { // here's where we do something with a line
    if (
        lightningObj.hasOwnProperty('flashType') &&
        lightningObj.hasOwnProperty('strikeTime') &&
        lightningObj.hasOwnProperty('latitude') &&
        lightningObj.hasOwnProperty('longitude') &&
        lightningObj.hasOwnProperty('peakAmps') &&
        lightningObj.hasOwnProperty('reserved') &&
        lightningObj.hasOwnProperty('icHeight') &&
        lightningObj.hasOwnProperty('receivedTime') &&
        lightningObj.hasOwnProperty('numberOfSensors') &&
        lightningObj.hasOwnProperty('multiplicity')

    ) {
        
        const quadKey = calculateQuadKey(lightningObj.latitude, lightningObj.longitude);   // get the quad key from the object
        assets.map(asset => {   // look up in the assets all assets that much the quadKey and have not alert already
            if (asset.quadKey === quadKey) {
                if (!alertAppear.hasOwnProperty(asset.assetOwner)) {
                    console.log(
                        assetsToMessage(asset.assetOwner, asset.assetName)
                    );
                    alertAppear[asset.assetOwner] = 1;
                } else {
                    alertAppear[asset.assetOwner]++;
                }
            }
        });
    } else {
        return console.log('Invalid input');
    }
};

module.exports = checkForLightning;


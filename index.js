const fs = require('fs')
// to calculate the quadKey we will use the npm package
const calculateQuadKey = require('./utils/calculateQuad')
const assetsToMessage = require('./utils/assetsToMessage')
const alertAppear = {}
const results = []
const assets = require('./assets.json');
const checkForLightning = require('./utils/checkForLightning')
const stream = fs.createReadStream('./lightning.json', { flags: 'r', encoding: 'utf-8' });
let buf = '';
stream.on('data', function (data) {
    buf += data.toString(); // when data is read, stash it in a string buffer
    pump(); // then process the buffer
});

const pump = () => {
    let pos;

    while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
        if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
            buf = buf.slice(1); // discard it
            continue; // so that the next iteration will start with data
        }
        processLine(buf.slice(0, pos)); // hand off the line
        buf = buf.slice(pos + 1); // and slice the processed data off the buffer
    }
}

const processLine =  (line) => { // here's where we do something with a line

    if (line[line.length - 1] == '\r') line = line.substr(0, line.length - 1); // discard CR (0x0D)

    if (line.length > 0) { // ignore empty lines
        const obj = JSON.parse(line); // parse the JSON
        const quadKey = calculateQuadKey(obj.latitude, obj.longitude)   // get the quad key from the object
        assets.map(asset => {   // look up in the assets all assets that much the quadKey and have not alert already
            if (asset.quadKey === quadKey) {
                if (!alertAppear.hasOwnProperty(asset.assetOwner)) {

                    console.log(
                        // assetsToMessage(asset.assetOwner, asset.assetName)
                        `lightning alert for ${asset.assetOwner}:${asset.assetName}`
                    )
                    results.push(
                        // assetsToMessage(asset.assetOwner, asset.assetName)
                        `lightning alert for ${asset.assetOwner}:${asset.assetName}`
                    )
                    alertAppear[asset.assetOwner] = 1
                } else {
                    alertAppear[asset.assetOwner]++;
                }
            }
        })
    }
}



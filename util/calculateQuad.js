// to calculate the quadKey we will use the npm package
const Quadkey = require('quadkeytools');

const calculateQuadKey = (lat, lng) => {
    const location = { lat, lng }
    const detail = 12; //zoom level
    return Quadkey.locationToQuadkey(location, detail);
}

module.exports = calculateQuadKey;
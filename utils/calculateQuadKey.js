// to calculate the quadKey we will use the npm package
const Quadkey = require('quadkeytools');

const calculateQuadKey = (lat, lng, detail = 12) => {  // we can add a custom zoom as option.
    const location = { lat, lng };
    return Quadkey.locationToQuadkey(location, detail);
};

module.exports = calculateQuadKey;
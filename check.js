const obj = {
    
}

// console.log(obj)

function checkObj(key, object) {
    let amount = '';
    amount = object[key];
    // console.log(amount)
}

const assets = require('./assets.json')

assets.map(asset => Object.keys(obj).indexOf(asset.assetOwner) <0  ? obj[asset.assetOwner] = 1 : obj[asset.assetOwner]++)
console.log(obj)
// checkObj('568', obj)
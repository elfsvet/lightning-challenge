const checkForLightning = require('../utils/checkForLightning')

test('should display a line', () => {
    let obj = {"flashType":1,"strikeTime":1446761075144,"latitude":33.651259,"longitude":-97.4635108,"peakAmps":4970,"reserved":"000","icHeight":18827,"receivedTime":1446761087837,"numberOfSensors":19,"multiplicity":14}
    checkForLightning(obj).toMatch('lightning alert for 585:Effertz Center')
  });


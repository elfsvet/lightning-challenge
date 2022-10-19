const assetsToMessage = require('../utils/assetsToMessage')


test('should return a message with the right params', ()=>{
    const owner = '345'
    const name = "Brighton Beach" 
    assetsToMessage(owner,name).toBe('lightning alert for 345:Brighton Beach')
})
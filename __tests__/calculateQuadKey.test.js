const calculateQuadKey = require('../utils/calculateQuadKey');

test('shuld calculate quad key', ()=>{
    calculateQuadKey(33.0988161, -98.0009938).toBe(023112320100)
})
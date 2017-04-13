const assert = require('assert');
const timer = require('../time.js');

it('takes five', done => {
     // test goes here
    const start = new Date();
    timer( () => {
        const elapsed = new Date() - start;
        assert.ok(elapsed > 5000 && elapsed < 6000);
        done();
    }
    );
    
     
}).timeout(7000);

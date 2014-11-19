var ng = require('angular'),
     _ = require('lodash');

ng.module('Test App', []);

_.each([1, 2, 4], function(a) {
    console.log(a);
});


var ng = require('angular'),
    _ = require('lodash');

require("angular-resource");


ng.module('Test App', []);

var resource = ng.module("ngResource");

console.log("angular", ng);
console.log("ngResource", resource);



_.each([1, 2, 4], function(a) {
    console.log(a);
});


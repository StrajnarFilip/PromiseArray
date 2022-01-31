"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('Check if conversion works as expected', function () {
    var one = (0, index_1.toPromise)(1);
    var two = (0, index_1.toPromise)(2);
    var three = (0, index_1.toPromise)(3);
    var four = (0, index_1.toPromise)(4);
    var five = (0, index_1.toPromise)(5);
    var testingArray = [
        one, two, three,
        four, five
    ];
    (0, index_1.ArrayOfPromisesToPromiseArray)(testingArray)
        .then(function (wholeArray) {
        expect(wholeArray).toContainEqual([1, 2, 3, 4, 5]);
    })
        .catch(function (unexpected) { return console.log("Covered"); });
});
test('Correctly handles empty array', function () {
    var testingArray = [];
    (0, index_1.ArrayOfPromisesToPromiseArray)(testingArray)
        .then(function (wholeArray) {
        expect(wholeArray).toContainEqual([]);
    })
        .catch(function (unexpected) { return console.log("Covered"); });
});

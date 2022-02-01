"use strict";
/*
   Copyright 2022 Filip Strajnar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPromise = exports.ArrayOfPromisesToPromiseArray = void 0;
function ArrayHead(source) {
    return new Promise(function (resolve, reject) {
        source[0].then(function (element) {
            resolve(element);
        });
    });
}
function ArrayTail(source) {
    return source.splice(1);
}
function EmptyArray() {
    return new Promise(function (resolve, reject) { resolve([]); });
}
function ConcatenatePromiseRecursively(tailArray, aggregatingArray) {
    if (aggregatingArray === void 0) { aggregatingArray = EmptyArray(); }
    return new Promise(function (resolve, reject) {
        aggregatingArray.then(function (unpromisedAggregate) {
            if (tailArray.length === 0 && unpromisedAggregate.length === 0) {
                resolve([]);
            }
            else {
                if (tailArray.length !== 0) {
                    ArrayHead(tailArray).then(function (head) {
                        resolve(ConcatenatePromiseRecursively(ArrayTail(tailArray), new Promise(function (resolveAccumulator, reject) {
                            resolveAccumulator(unpromisedAggregate.concat([head]));
                        })));
                    });
                }
                else {
                    resolve(unpromisedAggregate);
                }
            }
        });
    });
}
/**
 * Converts Array of promises to a single promise with an array of values.
 * The function uses recursion. It's safe to put in an empty array.
 * @param promises Array of promises, each containing value of type T
 * @returns Promise of an array, containing the values that each promise had
 */
function ArrayOfPromisesToPromiseArray(promises) {
    return new Promise(function (resolve, reject) {
        resolve(ConcatenatePromiseRecursively(promises));
    });
}
exports.ArrayOfPromisesToPromiseArray = ArrayOfPromisesToPromiseArray;
/**
 * Simply converts any value of type T to a promise of itself
 * @param paramIn Regular value
 * @returns Value as a promise
 */
function toPromise(paramIn) {
    return new Promise(function (resolve, reject) { resolve(paramIn); });
}
exports.toPromise = toPromise;

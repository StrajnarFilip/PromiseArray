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

function ArrayHead<T>(
    source: Array<Promise<T>>
): Promise<T> {
    return new Promise((resolve, reject) => {
        source[0].then(element => {
            resolve(element)
        })
    })
}

function ArrayTail<T>(
    source: Array<Promise<T>>
): Array<Promise<T>> {
    return source.splice(1)
}

function EmptyArray<T>() {
    return new Promise<Array<T>>((resolve, reject) => { resolve([]) })
}

function ConcatenatePromiseRecursively<T>(
    tailArray: Array<Promise<T>>,
    aggregatingArray: Promise<Array<T>> = EmptyArray()
): Promise<Array<T>> {
    return new Promise<Array<T>>((resolve, reject) => {
        aggregatingArray.then(unpromisedAggregate => {
            if (tailArray.length === 0 && unpromisedAggregate.length === 0) {
                resolve([])
            } else {
                if (tailArray.length !== 0) {
                    ArrayHead(tailArray).then(head => {
                        resolve(ConcatenatePromiseRecursively(
                            ArrayTail(tailArray),
                            new Promise<Array<T>>((resolveAccumulator, reject) => {
                                resolveAccumulator(unpromisedAggregate.concat([head]))
                            })
                        ))
                    })
                } else {
                    resolve(unpromisedAggregate)
                }
            }
        })
    })
}

/**
 * Converts Array of promises to a single promise with an array of values.
 * The function uses recursion. It's safe to put in an empty array.
 * @param promises Array of promises, each containing value of type T
 * @returns Promise of an array, containing the values that each promise had
 */
export function ArrayOfPromisesToPromiseArray<T>(
    promises: Array<Promise<T>>
): Promise<Array<T>> {
    return new Promise<Array<T>>((resolve, reject) => {
        resolve(
            ConcatenatePromiseRecursively(promises)
        )
    })
}

/**
 * Simply converts any value of type T to a promise of itself
 * @param paramIn Regular value
 * @returns Value as a promise
 */
export function toPromise<T>(paramIn: T): Promise<T> {
    return new Promise<T>((resolve, reject) => { resolve(paramIn) })
}
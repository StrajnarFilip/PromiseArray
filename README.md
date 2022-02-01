# PromiseArray

Change array of promises to promise of array.

![image](https://user-images.githubusercontent.com/46705237/151892314-c92959f2-a350-4161-b8f4-02a9aff70281.png)

# Usage

[View on NPM](https://www.npmjs.com/package/promises-to-array)

Install from NPM: 

```
npm i promises-to-array
```

```ts
import { ArrayOfPromisesToPromiseArray } from "promises-to-array"

// Assumes yourPromises is an array of Promises<AnyType>, for example
// from making many fetch requests

const promiseOfArray=ArrayOfPromisesToPromiseArray(yourPromises)
```

# Example
```ts
import { ArrayOfPromisesToPromiseArray } from "promises-to-array"

const one: Promise<number> = new Promise((resolve, reject) => { resolve(1) })
const two: Promise<number> = new Promise((resolve, reject) => { resolve(2) })
const three: Promise<number> = new Promise((resolve, reject) => { resolve(3) })
const four: Promise<number> = new Promise((resolve, reject) => { resolve(4) })
const five: Promise<number> = new Promise((resolve, reject) => { resolve(5) })

const testingArray: Array<Promise<number>> = [
    one, two, three,
    four, five
]

ArrayOfPromisesToPromiseArray<number>(testingArray)
    .then(wholeArray => {
        // Do whatever with regular .map , .filter ...
        console.log(wholeArray.filter(x => x > 3))
    })
```

# Example 2

![image](https://user-images.githubusercontent.com/46705237/151892960-d31d427a-2e10-4e03-8c27-ad0dba348813.png)

![image](https://user-images.githubusercontent.com/46705237/151892975-004d5b03-6f55-46d3-80c0-36defcc9901e.png)

![image](https://user-images.githubusercontent.com/46705237/151893009-718343cd-3dfb-48a3-8add-4500d3e5b11d.png)

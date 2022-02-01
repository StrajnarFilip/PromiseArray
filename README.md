# PromiseArray

Change array of promises to promise of array.

![image](https://user-images.githubusercontent.com/46705237/151892314-c92959f2-a350-4161-b8f4-02a9aff70281.png)

# Usage
```ts
import { ArrayOfPromisesToPromiseArray } from "promises-to-array"

// Assumes yourPromises is an array of Promises<AnyType>, for example
// from making many fetch requests

const promiseOfArray=ArrayOfPromisesToPromiseArray(yourPromises)
```

# Example
```ts
    const one = new Promise((resolve, reject) => { resolve(1) })
    const two = new Promise((resolve, reject) => { resolve(2) })
    const three = new Promise((resolve, reject) => { resolve(3) })
    const four = new Promise((resolve, reject) => { resolve(4) })
    const five = new Promise((resolve, reject) => { resolve(5) })

    const testingArray = [
        one, two, three,
        four, five
    ]

    ArrayOfPromisesToPromiseArray(testingArray)
        .then(wholeArray => {
            // Do whatever with regular .map , .filter ...
        })
```

# Example 2

![image](https://user-images.githubusercontent.com/46705237/151892960-d31d427a-2e10-4e03-8c27-ad0dba348813.png)

![image](https://user-images.githubusercontent.com/46705237/151892975-004d5b03-6f55-46d3-80c0-36defcc9901e.png)

![image](https://user-images.githubusercontent.com/46705237/151893009-718343cd-3dfb-48a3-8add-4500d3e5b11d.png)

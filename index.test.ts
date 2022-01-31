import { ArrayOfPromisesToPromiseArray, toPromise } from "./index"

test('Check if conversion works as expected', () => {
    const one = toPromise(1)
    const two = toPromise(2)
    const three = toPromise(3)
    const four = toPromise(4)
    const five = toPromise(5)

    const testingArray = [
        one, two, three,
        four, five
    ]

    ArrayOfPromisesToPromiseArray(testingArray)
        .then(wholeArray => {
            expect(wholeArray).toContainEqual([1, 2, 3, 4, 5])
        })
        .catch(unexpected => console.log("Covered"))
});

test('Correctly handles empty array', () => {
    const testingArray: Array<Promise<string>> =[]
    ArrayOfPromisesToPromiseArray(testingArray)
        .then(wholeArray => {
            expect(wholeArray).toContainEqual([])
        })
        .catch(unexpected => console.log("Covered"))
})
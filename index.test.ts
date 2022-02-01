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
            expect(wholeArray)
                .toContainEqual([1, 2, 3, 4, 5])
        })
        .catch(unexpected => console.log("Covered"))
});

test('Check if conversion works for strings', () => {
    const one = toPromise("John")
    const two = toPromise("May")
    const three = toPromise("Elon")
    const four = toPromise("Chris")
    const five = toPromise("Nick")

    const testingArray = [
        one, two, three,
        four, five
    ]

    ArrayOfPromisesToPromiseArray(testingArray)
        .then(wholeArray => {
            expect(wholeArray)
                .toContainEqual(["John", "May", "Elon", "Chris", "Nick"])
        })
        .catch(unexpected => console.log("Covered"))
});

test('Check if conversion works for arrays', () => {
    const one = toPromise(["John", "Elton"])
    const two = toPromise(["May"])
    const three = toPromise(["Elon"])
    const four = toPromise(["Chris", "West"])
    const five = toPromise(["Nick"])

    const testingArray = [
        one, two, three,
        four, five
    ]

    ArrayOfPromisesToPromiseArray(testingArray)
        .then(wholeArray => {
            expect(wholeArray)
                .toContainEqual([["John", "Elton"], ["May"], ["Elon"], ["Chris", "West"], ["Nick"]])
        })
        .catch(unexpected => console.log("Covered"))
});

test('Correctly handles empty array', () => {
    const testingArray: Array<Promise<string>> = []
    ArrayOfPromisesToPromiseArray(testingArray)
        .then(wholeArray => {
            expect(wholeArray).toContainEqual([])
        })
        .catch(unexpected => console.log("Covered"))
})
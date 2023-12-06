const binarySearch = require("./binarySearch");

describe("binarySearch", () => {
    test("returns the correct index for an even-length array", () => {
        const array= [2,3,4,10,40,60];
        expect(binarySearch(array,10)).toBe(3);
    });

    test("returns the correct index for odd-length array", ()=>{
        const array = [2,3,5,10,13,40,60];
        expect(binarySearch(array,13)).toBe(4);
    });

    test("return -1 when element is not found in even-length array", ()=> {
        array = [2,3,4,10,40,60];
        expect(binarySearch(array,50)).toBe(-1);
    })

    test("return -1 when element is not found in odd-length array", ()=> {
        array = [2,3,4,10,40];
        expect(binarySearch(array,50)).toBe(-1);
    })
    // Binary Searches always want to return an integer type, but sometimes it might not be there so the expected behavior that does not return anything is -1 (not found)

    // Binary Searches can only be run in already sorted arrays
})


// 704. Binary Search - https://leetcode.com/problems/binary-search/


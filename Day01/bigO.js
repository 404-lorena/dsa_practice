// Examples of Big O Notation
// Test arrays
test1 = [1];
test2 = [...Array(100)];
test3 = [...Array(10000)];

// Constant time O(1)
function getFirst(arr){
    return arr[0];
}

// console.time('getFirst @ length 1')
// getFirst(test1);
// console.timeEnd('getFirst @ length 1');
//
// console.time('getFirst @ length 100')
// getFirst(test2);
// console.timeEnd('getFirst @ length 100');
//
// console.time('getFirst @ length 10000')
// getFirst(test3);
// console.timeEnd('getFirst @ length 10000');


// Linear Time O(n)
function getSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// console.time('getSum @ length 1')
// getSum(test1);
// console.timeEnd('getSum @ length 1');

// console.time('getSum @ length 100')
// getSum(test2);
// console.timeEnd('getSum @ length 100');

// console.time('getSum @ length 10000')
// getSum(test3);
// console.timeEnd('getSum @ length 10000');


// Quadrtic Time O(n^2)
function getSmaller(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i; j++){
            if(j<i){
                console.log("j is smaller")
            } else{
                console.log("j is not smaller")
            }
        }
    }
}


console.time('getSmaller @ length 1')
getSmaller(test1);
console.timeEnd('getSmaller @ length 1');

console.time('getSmaller @ length 100')
getSmaller(test2);
console.timeEnd('getSmaller @ length 100');

// console.time('getSmaller @ length 10000')
// getSmaller(test3);
// console.timeEnd('getSmaller @ length 10000');





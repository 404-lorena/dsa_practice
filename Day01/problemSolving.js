// PROBLEM: Write a function that determines if any permutation of a string is a palindrom
// Confirm definitions
/// permutation = same characters, same frequency, any sequence
/// palindrome = same string forwards and backwards

// Empty string should return false
// Strings only, letter only

// EXAMPLE
/// racecar -> true
/// abba -> true
/// ttddoopp -> true
/// tddoopp -> false
/// abc -> false
/// "" -> false


// Find all permutations. Then reverse each permutation. Check if permutation = reversed
// Instead of every permutation, I want to count the characters in the string
// A palindrome always has an even count of each character, excepting when there is a character in the middle
// A palindrome has one or fewer with an odd character count
// Create a counter object
// For each character in the string, if its in the counter object - increment
// If the character is not in the counter, add it as a new key with value 1
// If there are one or fewer character with an odd count, it cannot be a palindrome


function permuteToPalindrome(string){
    // check for empty string
    if(string.length==0){
        return false;
    }

    const count = {};
    // count the occurance of each character

    for(let i=0; i<string.length;i++){
        if(string[i] in count){
            count[string[i]]++;
        } else count[string[i]]=1;
    }

    // tally the characters with odd counts
    let odd = 0;

    for(let key in count){
        //is it odd?
        if(count[key] % 2 == 1){
            odd++
        }
    }

    // if more than one character has an odd count, the string cannot permute to a palindrome
    if(odd>1){
        return false;
    }
    return true;
}

console.log(permuteToPalindrome("racecar"));

module.exports = permuteToPalindrome;

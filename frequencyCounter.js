/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //split up magazine array to be ready for comparison
    const arr = magazine.split('');

    //Loop through the length ransomNote array (using for loop)
    for (let i = 0; i < ransomNote.length; i++) {
        // From magazine array find index Of letter from ransomNote
        // === (strict equality)
        // The indexOf() method returns -1 if the value is not found. Check value and the type 
        if (arr.indexOf(ransomNote[i]) === -1) {
        // if letter from magainze and ransomNote DONT match return false
            return false;
        } else {
        // If the i DOES equal something between magazine and ransomNote 
        // Go to next letter from arrays
        // finds the letter in ransomNote and return index of that letter
        // splice will remove or replace the element in it
        // letter is duplicate 
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
}

// Leet Code: https://leetcode.com/problems/ransom-note/submissions/
// Eliana's beautiful mind solution

// https://www.w3schools.com/jsref/jsref_indexof.asp
// https://gist.github.com/ahmet-cetinkaya/c9e79784c150c932b647e1dec90a2154
// https://www.youtube.com/watch?v=aZVCYwCxUzc
// https://www.youtube.com/watch?v=-fGeELFm0vE 
// https://rishabh1403.com/posts/coding/leetcode/2020/05/leetcode-ransom-note
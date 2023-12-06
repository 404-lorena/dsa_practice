const permuteToPalindrome = require('./problemSolving')

test('racecar is a palindrome', () => {
    expect(permuteToPalindrome("racecar")).toBe(true);
});

test('abba is a palindrome', () => {
    expect(permuteToPalindrome("abba")).toBe(true);
});

test('abc is a not palindrome', () => {
    expect(permuteToPalindrome("abc")).toBe(false);
});

test('empty string is a not palindrome', () => {
    expect(permuteToPalindrome('')).toBe(false);
});
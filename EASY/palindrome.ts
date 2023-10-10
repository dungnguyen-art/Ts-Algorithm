function isPalindrome(x: number): boolean {
    let xString = x.toString();
    let xStringReversed = xString.split('').reverse().join('');
    console.log("xStringReversed", xStringReversed);
    let xInt = parseInt(xStringReversed, 10);
    return xInt === x;
}

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
// Note: 
// 1. `split(”)` method: Split the string into an array of characters.
// 2. `join(”)` method: Join the reversed array back into a string.
// 3. link: https://leetcode.com/problems/palindrome-number/
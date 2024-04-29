function isPalindrome(x) {
    if (x < 0) return false; // Negative numbers are not palindromes
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example usage
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false

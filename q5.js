function removeDuplicates(text) {
    const words = text.split(' ');
    const seen = new Set();
    const uniqueWords = words.filter(word => {
        if (!seen.has(word)) {
            seen.add(word);
            return true;
        }
        return false;
    });
    return uniqueWords.join(' ');
}

// Example usage
console.log(removeDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
// Output: 'alpha beta gamma delta'

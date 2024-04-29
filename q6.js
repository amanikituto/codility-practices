function flattenAndSort(arr) {
    const flattened = arr.reduce((acc, val) => acc.concat(val), []);
    return flattened.sort((a, b) => a - b);
}

// Example usage
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

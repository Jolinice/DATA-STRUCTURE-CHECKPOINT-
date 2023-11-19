// PROBLEM 1 SOLUTION
// This is a  Function to find the sum of distinct elements from two sets
function searchDistinctSum(set1, set2) {
    // Initialize sum to 0
    let sum = 0;

    // Compare each element of set one with set two
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            // If the element is not present in set two, let us add it to the sum
            sum += set1[i];
        }
    }

    // We compare each element of set two with set one
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            // If the element is not present in set one, add it to the sum
            sum += set2[i];
        }
    }

    // Return the result
    return sum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = searchDistinctSum(set1, set2);
console.log("Output:", result);

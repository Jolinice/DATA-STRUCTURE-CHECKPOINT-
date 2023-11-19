// Function to calculate dot product of two vectors i.e the sum of the products of the corresponding entries
//  of two sequence of numbers.

function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length");
    }

    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }

    return result;
}

// Algorithm to determine if two vectors are orthogonal
// N/B: Two vectors are orthogonal if they are perpendicular to each other
function areVectorsOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++) {
            // Call the dot_product function to calculate the dot product
            const dotProduct = dot_product(vectors[i], vectors[j]);

            // Check if the dot product is approximately zero (considering floating-point precision)
            if (Math.abs(dotProduct) < 1e-10) {
                console.log(`Vectors ${i + 1} and ${j + 1} are orthogonal.`);
            } else {
                console.log(`Vectors ${i + 1} and ${j + 1} are NOT orthogonal.`);
            }
        }
    }
}

// Example usage
const vectors = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

areVectorsOrthogonal(vectors);

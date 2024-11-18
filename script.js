// Task 2: Sum and Average Calculation

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function sumAndAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    return { sum, average };
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
console.log("Sum and Average Calculation: ");
console.log(sumAndAverage(numbers));

// ------------------------------------------------------

// Task 3: Remove Duplicates from an Array of Strings
// !!! I can't solve this problem in constant time because finding duplicates generally involves at least O(n) operations
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function removeDuplicates1(arr) {
    const seen = new Set();
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// or 
function removeDuplicates2(arr) {
    return [...new Set(arr)];
}

// if does mean "contant space complixtly"
// can solve this problem by sorting the array and uses a two-pointer technique
/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */
function removeDuplicates3(arr) {
    arr.sort();
    let uniqueIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }

    return arr.slice(0, uniqueIndex + 1);
}


// Example usage:
const fruits = ["Apple", "Banana", "Orange", "Apple", "Banana"];
console.log("Remove Duplicates from an Array of Strings");
console.log(removeDuplicates1(fruits));
console.log(removeDuplicates2(fruits));
console.log(removeDuplicates3(fruits));



 
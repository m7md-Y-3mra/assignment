
/**
 * To compile TypeScript to JavaScript:
 * 1. Install TypeScript: npm install -g typescript
 * 2. Run the TypeScript compiler: tsc product.ts
 * 3. This will generate a product.js file that can be used in your project.
*/

// Task 4: TypeScript Interface and Total Price Calculation

// Define the Product interface
interface Product {
    name: string;
    price: number;
}

/**
 * Brute-Force Solution for Total Price Calculation
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function bruteForceTotalPrice(products: Product[]): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

/**
 * Optimized Solution using reduce
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function optimizedTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Example usage:
const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];

console.log(bruteForceTotalPrice(products));
console.log(optimizedTotalPrice(products));

// ------------------------------------------------------

/**
 * Task 5: Email Validation Function using Regular Expression
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(isValidEmail("mohammedyousefamra@example.com"));
console.log(isValidEmail("mohammedyousefamra"));        


// Function to calculate the tip based on the bill value
function calculateTip(bill) {
    // Using ternary operator to determine the tip percentage
    const tipPercentage = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
    
    // Calculate the tip
    const tip = bill * tipPercentage;
    
    // Calculate the final value (bill + tip)
    const total = bill + tip;
    
    // Print the result
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

// Test data
const testBills = [275, 40, 430];

// Calculate and print results for each test bill
testBills.forEach(bill => calculateTip(bill));

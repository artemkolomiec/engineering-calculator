/**
 * This function represents an engineering calculator.
 * It performs various mathematical operations based on the given input.
 *
 * @param {string} operation - The operation to be performed. Valid values are 'add', 'subtract', 'multiply', and 'divide'.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The result of the mathematical operation.
 */
function engineeringCalculator(operation, num1, num2) {
  try {
    // Check if the operation is valid
    if (
      operation !== "add" &&
      operation !== "subtract" &&
      operation !== "multiply" &&
      operation !== "divide"
    ) {
      throw new Error("Invalid operation");
    }

    // Check if both numbers are valid
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Both numbers must be valid numbers");
    }

    // Perform the specified operation
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }
  } catch (error) {
    // Log the error
    console.error("Error:", error.message);
    return null;
  }
}

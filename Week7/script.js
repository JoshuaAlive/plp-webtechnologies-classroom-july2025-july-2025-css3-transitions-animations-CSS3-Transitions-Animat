// ===== Part 2: JavaScript Functions =====

// Global variable
let globalNumber = 10;

// Function with parameters & return value
function multiply(a, b) {
  return a * b;
}

// Function showing local vs global scope
function scopeExample() {
  let localNumber = 5; // local scope
  return globalNumber + localNumber;
}

// Function triggered by button (reusable logic)
function showCalculation() {
  const result = multiply(4, 3); // 12
  const scopeResult = scopeExample(); // 15
  document.getElementById("calc-result").textContent =
    `Multiplication Result: ${result}, Scope Result: ${scopeResult}`;
}

// ===== Part 3: Combining CSS + JS =====
function togglePopup() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}


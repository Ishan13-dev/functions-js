# JavaScript Functions 🚀

A beginner-friendly JavaScript practice repository focused on learning and understanding **functions in JavaScript** through practical coding exercises and examples.

## 📌 About the Project

This repository contains hands-on JavaScript exercises designed to build a strong understanding of functions, parameters, arguments, return statements, and reusable code.

Each file represents a different practice exercise to improve problem-solving skills and strengthen JavaScript fundamentals.

## 📂 Project Structure

```text
functions-js/
│
├── one.js
├── two.js
├── three.js
├── four.js
├── five.js
├── six.js
├── seven.js
├── eight.js
├── nine.js
├── ten.js
├── eleven.js
├── twelve.js
├── thirteen.js
├── fourteen.js
│
└── README.md
```

## 📚 Topics Covered

- **Function Declaration:** Creating reusable blocks of code.
- **Parameters and Arguments:** Passing data into functions.
- **Return Statement:** Returning values from functions.
- **Arithmetic Functions:** Performing addition, subtraction, multiplication, and division.
- **Conditional Logic:** Using conditions inside functions.
- **Ternary Operator:** Writing concise conditional expressions.
- **Exponentiation Operator:** Calculating squares and powers.
- **Math Methods:** Using built-in methods such as `Math.sqrt()`.
- **String Manipulation:** Working with strings inside functions.
- **Email Masking:** Hiding sensitive parts of an email address.
- **Temperature Conversion:** Converting Celsius into Fahrenheit.
- **Function Reusability:** Writing code that can be reused with different arguments.

## 💻 Code Examples

### 1. Function with Parameters and Return

```javascript
function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(2, 5)); 
// Output: 7
```

### 2. Function with Conditional Logic

```javascript
function calculateQuotient(num1, num2) {
    return num2 === 0
        ? "Error: Division by zero"
        : num1 / num2;
}

console.log(calculateQuotient(10, 2));
// Output: 5
```

### 3. Function Using Math Methods

```javascript
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
// Output: 5
```

### 4. Function for Temperature Conversion

```javascript
function convertCtoF(celsius) {
    return celsius * (9 / 5) + 32;
}

console.log(convertCtoF(30));
// Output: 86
```

### 5. Function for Email Masking

```javascript
function maskEmail(email) {
    const atIndex = email.indexOf("@");

    const firstChar = email[0];
    const lastChar = email[atIndex - 1];

    const maskedMiddle = "*".repeat(atIndex - 2);
    const domain = email.slice(atIndex);

    return firstChar + maskedMiddle + lastChar + domain;
}

console.log(maskEmail("apple.pie@example.com"));
// Output: a*******e@example.com
```

## 🛠️ Technologies Used

- JavaScript (Vanilla JavaScript)
- Node.js
- Visual Studio Code

## ⚙️ How to Run

**Step 1: Clone the repository**

```bash
git clone https://github.com/Ishan13-dev/functions-js.git
```

**Step 2: Navigate to the project folder**

```bash
cd functions-js
```

**Step 3: Run any JavaScript file**

```bash
node one.js
```

You can run any of the other exercise files:

```bash
node two.js
node three.js
node four.js
```

Replace the filename with the exercise you want to practice.

## 🎯 Learning Objectives

- Understand how JavaScript functions work.
- Learn the difference between parameters and arguments.
- Understand how return statements work.
- Create reusable functions.
- Perform calculations using functions.
- Apply conditional logic inside functions.
- Solve practical programming problems.
- Improve logical thinking and problem-solving skills.

## 👨‍💻 Author

**Ishan Verma**

GitHub: [@Ishan13-dev](https://github.com/Ishan13-dev)

## ⭐ Support

If you find this repository helpful, consider giving it a star ⭐.

---

**Keep Learning, Keep Practicing, Keep Coding! 💻🚀**

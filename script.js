"use strict";

// DOM Elements
const allclear = document.getElementById('allclear');
const clear = document.getElementById('clear');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multi = document.getElementById('multi');
const divi = document.getElementById('divi');
const mod = document.getElementById('mod');
const equal = document.getElementById('equal');
const val = document.getElementById('val');

// Logging setup
const log = (message) => console.log(`[Calculator] ${message}`);

// Expression evaluation function
function evaluateExpression(expression) {
  // log(`Evaluating expression: ${expression}`);
  try {
    const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/|\%)/g);
    if (!tokens) throw new Error("Invalid expression");

    const values = [];
    const operators = [];
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2 };

    function processOperation() {
      const b = values.pop();
      const a = values.pop();
      const op = operators.pop();

      switch (op) {
        case "+":
          values.push(a + b);
          break;
        case "-":
          values.push(a - b);
          break;
        case "*":
          values.push(a * b);
          break;
        case "/":
          if (b === 0) throw new Error("Division by zero");
          values.push(a / b);
          break;
        case "%":
          if (b === 0) throw new Error("Modulo by zero");
          values.push(a % b);
          break;
        default:
          throw new Error(`Unknown operator: ${op}`);
      }
    }

    for (let token of tokens) {
      if (!isNaN(token)) {
        values.push(Number(token));
      } else {
        while (
          operators.length &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          processOperation();
        }
        operators.push(token);
      }
    }

    while (operators.length) processOperation();

    return values[0];
  } catch (error) {
    // log(`Evaluation error: ${error.message}`);
    return `Error: ${error.message}`;
  }
}

// Button click event listener
document.querySelector('table').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const buttonId = button.id;
    // log(`Button clicked: ${button.textContent}`);

    if (buttonId === 'allclear') {
      // log("Clearing all input");
      val.value = '';
    } else if (buttonId === 'clear') {
      // log("Clearing last character");
      val.value = val.value.slice(0, -1);
    } else if (buttonId === 'equal') {
      const userval = val.value;
      // log(`Calculating result for: ${userval}`);
      if (/[\d+\-*/%.]/.test(userval) && userval !== '') {
        const result = evaluateExpression(userval);
        if (typeof result === 'number') {
          val.value = result;
          // log(`Result: ${result}`);
        } else {
          val.value = result;
        }
      } else {
        val.value = 'Not valid';
        // log('Invalid input');
      }
    } else {
      val.value += button.textContent;
      // log(`Input appended: ${button.textContent}`);
    }
  }
});
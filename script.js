"use strict";

const allclear = document.getElementById('allclear')
const clear = document.getElementById('clear')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multi')
const divi = document.getElementById('divi')
const mod = document.getElementById('mod')
const equal = document.getElementById('equal')
const val = document.getElementById('val')
const resDis = document.querySelector('.res')
const display = document.querySelector('.display')
const reBefore = /(?<![\+\*\.\%\/\-])\d+/
const reBehind = /(?<=[\+\*\.\%\/\-])\d+/
const digitFinder = /[\+\*\.\=\/\%\-]/
const rePowhind = /(?<=\*\*)\d+/
const rePowfor = /(?<!\*\*)\d+/
let calc


function evaluateExpression(expression) {
  const tokens = expression.match(/(\d+|\+|\-|\*|\/|\^)/g);
  const values = [];
  const operators = [];

  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 4 };

  function processOperation() {
    const b = values.pop();
    const a = values.pop();
    const op = operators.pop();

    switch (op) {
      case "+": values.push(a + b); break;
      case "-": values.push(a - b); break;
      case "*": values.push(a * b); break;
      case "/": values.push(a / b); break;
      case "^": values.push(Math.pow(a, b)); break; // Added exponentiation
      default: throw new Error(`Unknown operator: ${op}`);
    }
  }

  for (let token of tokens) {
    if (!isNaN(token)) {
      values.push(Number(token));
    } else {
      while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
        processOperation();
      }
      operators.push(token);
    }
  }

  while (operators.length) processOperation();

  return values[0];
}

function calculateExpression() {
  const expression = val.value;
  try {
    val.value = evaluateExpression(expression); // Calls improved parser function
  } catch (error) {
    val.value = "Check your input";
  }
}

document.querySelector('table').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const buttonId = button.id;

    if (buttonId === 'allclear') {
      val.value = '';
      resDis.classList.add('hidden');
      display.textContent = '';
    } else if (buttonId === 'clear') {
      val.value = val.value.slice(0, -1);
    } else if (buttonId === 'equal') {
      resDis.classList.remove('hidden');
      const userval = val.value;
      if (digitFinder.test(userval)) {
        try {
          calc = eval(userval);
          display.textContent = calc;
        } catch (error) {
          display.textContent = 'Check your input';
        }
      } else {
        display.textContent = 'Not valid';
      }
    } else {
      val.value += button.textContent;
    }
  }
})


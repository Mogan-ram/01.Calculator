# Basic Calculator

## Project Overview
This is a web-based Basic Calculator developed as part of the Unified Mentor Internship Program. The calculator performs fundamental arithmetic operations (addition, subtraction, multiplication, division, and modulo) with a user-friendly interface. It includes error handling for invalid inputs (e.g., division by zero) and supports real-time input via button clicks.

### Technologies Used
- **HTML**: Structures the calculator layout, including buttons and input field.
- **CSS**: Styles the interface with a modern design, hover effects, and responsive layout.
- **JavaScript**: Implements the calculator logic, including expression evaluation and error handling.

### Features
- **Basic Arithmetic Operations**: Supports addition (+), subtraction (-), multiplication (*), division (/), and modulo (%).
- **Error Handling**: Displays messages like "Check your input" for invalid expressions or "Not valid" for non-mathematical inputs.
- **Clear Functions**: Includes "AC" (All Clear) to reset the calculator and "C" (Clear) to remove the last input.
- **Responsive Design**: Works on both desktop and mobile devices with a centered layout.
- **Visual Feedback**: Displays results in green and uses a semi-transparent input field for clarity.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd basic-calculator
   ```
3. **Open the Application**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).
   - No additional dependencies or servers are required, as the project uses vanilla HTML, CSS, and JavaScript.

### How to Use
1. **Enter Numbers and Operators**:
   - Click the number buttons (0-9) and operator buttons (+, -, *, /, %) to build an expression in the input field.
   - Example: To calculate `5 + 3`, click `5`, `+`, `3`, then `=`.
2. **Calculate Result**:
   - Press the `=` button to evaluate the expression. The result appears below the input field.
3. **Clear Input**:
   - Use `AC` to reset the entire input and result.
   - Use `C` to delete the last character entered.
4. **Error Handling**:
   - If an invalid expression is entered (e.g., `5/0` or `5++3`), the calculator displays "Check your input" or "Not valid".

### Project Structure
```
basic-calculator/
├── index.html      # Main HTML file for the calculator structure
├── style.css       # CSS file for styling the calculator
├── script.js       # JavaScript file for calculator logic
└── view.jpg        # Background image used in the interface
```

### Code Quality
- **Modular**: The JavaScript code uses a separate `evaluateExpression` function for parsing and calculating expressions.
- **Safe**: Error handling prevents crashes from invalid inputs.
- **Testable**: The code is structured to allow unit testing of the `evaluateExpression` function.
- **Maintainable**: Clear variable names and comments enhance readability.
- **Portable**: Runs in any modern web browser without dependencies.


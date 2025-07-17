# Variables and Operators

**Date completed:** July 16, 2025

## Key Summary
- JavaScript variables store data and are declared with `let`, `const`, or (rarely) `var`.
- Use descriptive, readable names; follow camelCase for multi-word names.
- Numbers in JavaScript are always 64-bit floating point; both integers and decimals use the same type.
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**` (exponentiation).
- The `+` operator also concatenates strings; adding a string and a number results in a string.
- Other operators (`-`, `*`, `/`, etc.) convert operands to numbers.
- Modulo `%` returns the remainder after division.
- Increment (`++`) and decrement (`--`) operators increase or decrease a variable by 1; prefix and postfix forms differ in when the value is returned.
- Assignment operators (`+=`, `-=`, etc.) update variables in place.
- Operator precedence determines calculation order; use parentheses to override.
- The comma operator evaluates multiple expressions, returning the last value (rarely used outside loops).
- `NaN` means "Not a Number" and results from invalid math operations; `Infinity` results from division by zero or overflow.

## Assignment List
- [x] Add 2 numbers together
- [x] Add 6 different numbers together
- [x] Log the value of an expression
- [x] Use variables and re-assign them
- [x] Use constants and calculate percentage
- [x] Experiment with expressions and variables

## Knowledge Checks
- [x] What three keywords can you use to declare new variables?
  - `let`, `const`, and `var`.
- [x] Which of the three variable declarations should you avoid and why?
  - Avoid `var` because it is function-scoped, can be hoisted, and may create globals, leading to bugs. Prefer `let` and `const` for block scope and safety.
- [x] What rules should you follow when naming variables?
  - Use letters, digits, `$`, and `_`. Start with a letter, `$`, or `_`. Case sensitive. Use camelCase for multi-word names. Avoid reserved words. Prefer descriptive names.
- [x] What happens when you add numbers and strings together?
  - The number is converted to a string and concatenated. Example: `10 + "10"` results in `"1010"`.
- [x] How does the Modulo (%) operator work?
  - Returns the remainder after dividing one number by another. Example: `8 % 3` is `2`.
- [x] What’s the difference between == and ===?
  - `==` is loose equality (type conversion allowed), `===` is strict equality (no type conversion, both value and type must match).
- [x] When would you receive a NaN result?
  - When performing invalid arithmetic, such as dividing a number by a non-numeric string, or any operation involving `NaN`.
- [x] How do you increment and decrement a number?
  - Use `++` to increment and `--` to decrement, or manually with `a = a + 1` or `a = a - 1`.
- [x] What’s the difference between prefixing and postfixing increment/decrement operators?
  - Prefix (`++a`): increments first, then returns the new value. Postfix (`a++`): returns the current value, then increments.
- [x] What is operator precedence and how is it handled in JS?
  - Determines the order of operations. Multiplication/division happen before addition/subtraction. Parentheses can override precedence.
- [x] How do you access developer tools and the console?
  - Press F12 or right-click and select "Inspect" in the browser, then go to the "Console" tab.
- [x] How do you log information to the console?
  - Use `console.log()`.
- [x] What does unary plus operator do to string representations of integers?
  - Converts the string to a number. Example: `+"10"` results in `10`.

## Open Questions / Concepts Struggled With
- None noted

---
**Let me know if you want to add any open questions or if you want to discuss any concept in more depth before moving on.**

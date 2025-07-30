# Project: Calculator

**Date Completed:** July 28, 2025

## Key Summary

Built a fully functional on-screen calculator using JavaScript, HTML, and CSS. This project combined all fundamental concepts learned in the Foundations course:

- **JavaScript Functions**: Created separate functions for math operations (add, subtract, multiply, divide)
- **DOM Manipulation**: Event handling for buttons and keyboard input, updating display elements
- **State Management**: Used global variables to track current operation state
- **Error Handling**: Implemented divide-by-zero protection and input validation
- **CSS Layout**: Used Flexbox for responsive calculator layout
- **User Experience**: Added visual feedback with hover/active states

## Assignment Checklist

- [x] Create functions for basic math operations (add, subtract, multiply, divide)
- [x] Create variables for first number, operator, and second number
- [x] Create `operate` function that calls correct math function
- [x] Build HTML calculator with digit/operator buttons and display
- [x] Make digit buttons populate display
- [x] Implement calculator logic with proper operation chaining
- [x] Handle edge cases:
  - [x] Evaluate only one pair of numbers at a time (12 + 7 - 1 works correctly)
  - [x] Round long decimals (using `.toFixed(3)` and `removeTrailingZeros()`)
  - [x] Clear button resets everything
  - [x] Divide by zero error handling
  - [x] Only run operations with proper inputs
  - [x] Consecutive operators use last operator entered
  - [x] New digit after result starts fresh calculation

## Extra Credit Completed

- [x] **Decimal button**: Added with validation to prevent multiple decimals
- [x] **Backspace/Delete button**: Implemented delete functionality
- [x] **Keyboard support**: Full keyboard mapping including Enter, Escape, Backspace

## Technical Implementation Highlights

**State Management Approach:**
- Used string-based state management with `mainScreenString` and `infoScreenString`
- Clean separation between display logic and calculation logic

**Smart Operation Chaining:**
- `handleOp()` automatically evaluates pending operations before setting new operator
- Proper state transitions between number entry and operation selection

**Robust Error Handling:**
- Division by zero protection in `doOp()` function
- Input validation for decimal points
- Graceful handling of edge cases

**Code Organization:**
- Clear function naming and single responsibility principle
- Effective use of switch statements for operation routing
- Good separation of concerns between event handling and business logic

## Learning Outcomes Achieved

✅ **Problem Decomposition**: Successfully broke down complex calculator logic into manageable functions  
✅ **Event-Driven Programming**: Implemented both click and keyboard event handling  
✅ **State Management**: Maintained application state across user interactions  
✅ **DOM Manipulation**: Dynamic updates to calculator display  
✅ **Error Handling**: Defensive programming practices  
✅ **CSS Layout**: Advanced Flexbox usage for responsive design  
✅ **Code Quality**: Clean, readable, and well-organized JavaScript  

## Notes

This project successfully demonstrates mastery of all core JavaScript concepts covered in the Foundations course. The implementation goes beyond basic requirements with excellent user experience features and robust error handling.

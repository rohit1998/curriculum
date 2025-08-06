# CSS Functions

**Date completed:** August 5, 2025

## Key Summary

CSS functions are built-in helpers that take arguments in parentheses and return a value for a CSS property. You can’t define your own, but you can use many provided by CSS. The most important math functions are:

- `calc()`: Lets you do calculations in CSS, even mixing units (e.g., `width: calc(100% - 80px)`).
- `min()`: Returns the smallest value from its arguments (e.g., `width: min(150px, 100%)`).
- `max()`: Returns the largest value from its arguments (e.g., `width: max(100px, 50%)`).
- `clamp()`: Takes a minimum, preferred, and maximum value (e.g., `font-size: clamp(1rem, 2vw, 3rem)`).

These functions make layouts and styles more flexible and responsive, and help avoid hardcoding values.

## Assignments

- [ ] Review the [complete list of CSS functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) and how they are used.
- [ ] Explore [min, max, and clamp CSS functions](https://web.dev/min-max-clamp/) in action.

## Knowledge Checks

- What are the four CSS math functions we covered above?
- How do we use CSS math functions in our CSS?
- How can CSS functions help make websites and applications more responsive?

## My Answers

1. **What are the four CSS math functions we covered above?**
   - calc(), min(), max(), clamp()

2. **How do we use CSS math functions in our CSS?**
   - We can use CSS math functions in our CSS just by specifying these functions where we want them to return their values. For example, if you want to use max, just write max and put round brackets and put all the arguments among which you want to take the max from.

3. **How can CSS functions help make websites and applications more responsive?**
    - Using these functions we can have dynamic values. For example, we can have dynamic font size using clamp. This dynamic feature actually makes our websites and applications more responsive.


## Open Questions / Concepts I Struggled With



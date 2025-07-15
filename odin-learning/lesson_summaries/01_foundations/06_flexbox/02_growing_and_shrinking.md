# Growing and Shrinking

**Date completed:** (in progress)

## Key Summary
- The `flex` property in CSS is a shorthand for three properties: `flex-grow`, `flex-shrink`, and `flex-basis`.
- `flex-grow` determines how much a flex item will grow relative to others when there is extra space in the container.
- `flex-shrink` determines how much a flex item will shrink relative to others when there is not enough space.
- `flex-basis` sets the initial size of a flex item before growing or shrinking is applied.
- The most common usage is `flex: 1`, which is equivalent to `flex-grow: 1; flex-shrink: 1; flex-basis: 0;`—this makes all items grow and shrink evenly from a base size of 0.
- You can use the full shorthand (e.g., `flex: 2 1 200px`) to control each aspect, or use keywords like `flex: auto` (which is `flex: 1 1 auto`).
- Setting `flex-shrink: 0` prevents an item from shrinking, which can be useful for fixed-size elements.
- The default value for `flex-basis` is `auto`, but the shorthand `flex: 1` sets it to `0`.
- In practice, you’ll mostly use `flex: 1` for equal growth, and `flex-shrink: 0` to prevent shrinking.

## Assignment List
- [✅] Read [W3C’s flex section](https://www.w3.org/TR/css-flexbox-1/#flex-common) (Completed July 15, 2025)
- [✅] Read [MDN’s documentation on flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) (Completed July 15, 2025)

## Knowledge Checks
- [✅] What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?
- [✅] What are the 3 defined values for the flex shorthand flex:auto?


## My Answers to Knowledge Checks

**1. What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?**
- The three values are `flex-grow`, `flex-shrink`, and `flex-basis`.
- `flex-grow` determines how flex items grow in size and in what proportion they grow relative to each other when there is extra space.
- `flex-shrink` determines how flex items shrink in size and in what proportion they shrink relative to each other when there is not enough space.
- `flex-basis` sets the initial size that the flex item will start with before any growing or shrinking happens.

**2. What are the 3 defined values for the flex shorthand flex:auto?**
- The three values are `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: auto`.
- So, `flex: auto` is equivalent to `flex: 1 1 auto`.

## Open Questions / Concepts I Struggled With


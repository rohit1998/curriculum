# Axes

**Date completed:** July 15, 2025

## Key Summary
- Flexbox layouts are controlled by two axes: the main axis and the cross axis.
- The `flex-direction` property determines the main axis:
  - `row` (default): main axis is horizontal (left-to-right).
  - `column`: main axis is vertical (top-to-bottom).
- The cross axis is always perpendicular to the main axis.
- `flex-basis` refers to width in a row direction, and to height in a column direction.
- Shorthand properties like `flex: 1` can behave differently depending on the axis direction.
- Understanding axes is essential for controlling layout, alignment, and sizing in Flexbox.

## Assignments
- [ ] Complete any interactive demos or code exercises in the official lesson (if available).

## Knowledge Checks
- [ ] How do you make flex items arrange themselves vertically instead of horizontally?
- [ ] In a column flex-container, what does flex-basis refer to?
- [ ] In a row flex-container, what does flex-basis refer to?
- [ ] Why do the previous two questions have different answers?

## My Answers to Knowledge Checks

1. **How do you make flex items arrange themselves vertically instead of horizontally?**  
Set the `flex-direction` property of the flex container to `column`. By default, it is set to `row` (horizontal), but setting it to `column` arranges items vertically.

2. **In a column flex-container, what does flex-basis refer to?**  
In a column flex-container, `flex-basis` refers to the height of each flex item (the initial main size before growing or shrinking).

3. **In a row flex-container, what does flex-basis refer to?**  
In a row flex-container, `flex-basis` refers to the width of each flex item (the initial main size before growing or shrinking).

4. **Why do the previous two questions have different answers?**  
Because the main axis changes depending on the `flex-direction`. In a column, the main axis is vertical (height), and in a row, it is horizontal (width). So, `flex-basis` always refers to the main axis size, which changes with direction.

## Open Questions / Concepts I Struggled With

_None at this time._

# Positioning

**Date completed:** August 5, 2025

## Key Summary

CSS positioning allows you to control where elements appear on a web page, beyond what is possible with margin, padding, flexbox, or grid. The main positioning modes are:

- **Static:** Default; elements follow the normal document flow. `top`, `right`, `bottom`, and `left` have no effect.
- **Relative:** Similar to static, but you can move the element relative to its normal position. The original space is preserved.
- **Absolute:** Removes the element from the normal flow and positions it relative to the nearest positioned ancestor. Useful for overlays, tooltips, and icons.
- **Fixed:** Removes the element from the flow and positions it relative to the viewport. The element stays in place when scrolling (e.g., sticky navbars).
- **Sticky:** Acts like a normal element until you scroll past it, then it "sticks" to a position (usually the top). Useful for headers that remain visible while scrolling.

**Best Practice:** Use absolute, fixed, and sticky positioning for special cases, not for full layouts. Prefer flexbox and grid for most layout needs.

## Assignments

- [x] Watch Web Dev Simplified’s [Learn CSS Position](https://www.youtube.com/watch?v=jx5jmI0UlXU)
- [x] Read [MDN’s docs on position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [x] Read CSS Tricks’ [Absolute, Relative, Fixed Positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)
- [x] Read Kevin Powell’s [difference between fixed and sticky positioning](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/)

## Knowledge Checks

- [x] What is the difference between static and relative positioning?
    - Static positioning is the default; elements appear as normal. Relative positioning by itself does nothing visually, but if you specify top/left/right/bottom, it moves the element by that amount from its normal spot, while keeping its original space. Relative also enables z-index and acts as a reference for absolutely positioned children.
- [x] What is absolute positioning useful for?
    - Absolute positioning is useful for placing elements at specific spots, regardless of other elements. The element is removed from the normal flow and positioned relative to its nearest positioned ancestor. Common use cases: overlays, tooltips, icons, etc.
- [x] What is the difference between fixed and sticky positioning?
    - Fixed positioning keeps an element in the same place relative to the viewport, always visible as you scroll. Sticky positioning keeps the element in the normal flow until a scroll threshold is reached, then it "sticks" to a position (like the top), but only within its parent container.

## Open Questions / Concepts I Struggled With

- 

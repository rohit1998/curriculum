# Alignment

**Date completed:** July 15, 2025

## Key Summary

Flexbox alignment allows you to control how items are positioned within a flex container, both horizontally and vertically. The two main properties are:

- `justify-content`: Aligns items along the main axis (horizontal by default). Useful values include `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `space-evenly`.
- `align-items`: Aligns items along the cross axis (vertical by default). Useful values include `flex-start`, `flex-end`, `center`, `stretch`, and `baseline`.

Changing the `flex-direction` property swaps the axes, so the meaning of these alignment properties changes accordingly. The `gap` property is also useful for adding consistent spacing between flex items without extra margins.

Other useful properties:
- `align-self`: Override alignment for a single item.
- `align-content`: Aligns multiple rows (when wrapping).
- `flex-wrap`, `flex-direction`, `order`: Control layout and item order.

Mastering these properties lets you create flexible, responsive layouts and easily center or distribute content.

## Assignments

- [x] Read the [Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [x] Read [Typical use cases of Flexbox (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
- [x] Review [CSS Tricks “Guide to Flexbox”](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), especially parts 1-3 and 5
- [x] Complete exercises in [CSS exercises repository’s foundations/flex directory](https://github.com/TheOdinProject/css-exercises/tree/main/foundations/flex):
    - [x] 01-flex-center
    - [x] 02-flex-header
    - [x] 03-flex-header-2
    - [x] 04-flex-information
    - [x] 05-flex-modal
    - [x] 06-flex-layout
    - [x] 07-flex-layout-2

## Knowledge Checks

- What is the difference between justify-content and align-items?
- How do you use flexbox to completely center a div inside a flex container?
- What’s the difference between justify-content: space-between and justify-content: space-around?

## My Answers to Knowledge Checks

1. **What is the difference between justify-content and align-items?**
   - `justify-content` aligns items along the main axis (horizontal by default), controlling horizontal spacing and distribution.
   - `align-items` aligns items along the cross axis (vertical by default), controlling vertical alignment.

2. **How do you use flexbox to completely center a div inside a flex container?**
   - Set `display: flex;` on the container, then use `justify-content: center;` and `align-items: center;` to center the child both horizontally and vertically.

3. **What’s the difference between justify-content: space-between and justify-content: space-around?**
   - `space-between`: Items are pushed to the edges, and all space is distributed only between the items (no space at the container edges).
   - `space-around`: Each item gets equal space on both sides, so the space at the edges is half the space between items.

## Open Questions / Concepts I Struggled With

None at this time.



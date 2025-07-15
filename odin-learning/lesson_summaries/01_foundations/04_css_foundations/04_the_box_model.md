# The Box Model

**Date completed:** July 15, 2025

## Key Summary
The CSS box model is a fundamental concept that describes how elements are rendered on a web page. Every element is a rectangular box, consisting of four areas:
- **Content:** The actual content (text, image, etc.)
- **Padding:** Space between the content and the border
- **Border:** The edge surrounding the padding (and content)
- **Margin:** Space outside the border, separating the element from others

Key properties:
- `width`, `height`: Set the size of the content area
- `padding`, `border`, `margin`: Add space around the content
- `box-sizing`: Controls whether `width`/`height` include padding and border (`content-box` vs. `border-box`)

Other important concepts:
- **Margin collapsing:** Adjacent vertical margins combine into one
- **Negative margins:** Can pull elements closer or cause overlap
- **Units:** px, em, rem, %, vw, vh, etc.

## Assignments
- [x] Read official lesson and external resources
- [x] Complete sandbox margin and box-sizing experiments
- [x] Create pseudo-element example
- [x] Organize sandbox folders and add documentation
- [x] Complete knowledge checks

## Knowledge Checks (with answers)
1. **What are the four parts of the box model?**
   - Content, padding, border, margin
2. **What does `box-sizing: border-box` do?**
   - Makes `width` and `height` include padding and border
3. **What is margin collapsing?**
   - When two vertical margins meet, only the larger one is used
4. **How do negative margins behave?**
   - They pull elements closer or cause overlap
5. **Name three units you can use for margin or padding.**
   - px, em, rem (also %, vw, vh)

## Open Questions / Struggles
- None at this time. All concepts and behaviors were tested in the sandbox and are understood.

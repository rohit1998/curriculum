# Advanced Selectors

**Date completed:** August 4, 2025

## Key Summary

Advanced CSS selectors provide powerful ways to target elements in your HTML for styling, beyond basic type, class, and ID selectors. They help you write more maintainable and flexible CSS, especially when you can't or don't want to change your HTML markup.

### Main Concepts
- **Combinators:**
  - `>` (child): Selects direct children only (e.g., `main > div`).
  - `+` (adjacent sibling): Selects the next sibling (e.g., `.item + .item`).
  - `~` (general sibling): Selects all following siblings (e.g., `.item ~ .item`).
- **Pseudo-classes:**
  - Target elements based on state or position (e.g., `:hover`, `:focus`, `:nth-child()`, `:first-child`, `:last-child`).
- **Pseudo-elements:**
  - Target parts of elements (e.g., `::before`, `::after`, `::first-letter`, `::selection`).
- **Attribute selectors:**
  - Select elements by attribute and value (e.g., `[type="text"]`, `[src$=".jpg"]`, `[class^="aus"]`).

These selectors allow for precise, context-aware styling without extra classes or IDs, making your CSS more robust and expressive.

## Assignment List
- [ ] Complete CSS Diner
- [ ] Read Shay Howe’s article on Complex Selectors
- [ ] Do the Selectors Assessment from MDN

## Knowledge Checks
- What is the difference between the child combinator and the descendant combinator?
- How does the syntax of pseudo-classes and pseudo-elements differ?
- Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?
- Name two ways you could select every second child of an element, starting with the first.
- What is the difference between div:first-child and div:last-child? What will each select?
- What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?
- How could you select all input elements with a type of text?
- How could you select all classes that begin with thunder?


## My Answers to Knowledge Checks

All knowledge checks completed in detail on August 4, 2025. No open questions or unresolved concepts.

## Open Questions / Concepts I Struggled With

None.


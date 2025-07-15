# Intro to CSS

**Date completed:** In Progress (July 14, 2025)

## Key Summary
- CSS is used to style HTML elements and control the visual appearance of web pages.
- Selectors determine which elements are styled. Core selectors: universal (`*`), type (`div`), class (`.class`), and ID (`#id`).
- You can group selectors with commas, chain them for more specific targeting, and use descendant selectors (space) for nested elements.
- Pseudo-classes (e.g., `:hover`, `:active`) allow styling based on element state or position.
- Common properties include `color`, `background-color`, `font-family`, `font-size`, `width`, `height`, `margin`, `padding`, and `border`.
- CSS can be added to HTML via external stylesheets, internal `<style>` tags, or inline `style` attributes.

## Assignments
- [ ] Go to the [CSS exercises repository](https://github.com/TheOdinProject/css-exercises) and read the README file.
- [ ] Complete the following exercises in the [foundations/intro-to-css directory](https://github.com/TheOdinProject/css-exercises/tree/main/foundations/intro-to-css):
  - [ ] 01-css-methods
  - [ ] 02-class-id-selectors
  - [ ] 03-grouping-selectors
  - [ ] 04-chaining-selectors
  - [ ] 05-descendant-combinator

## Knowledge Checks
- [ ] What is the syntax for class and ID selectors?
- [ ] How would you apply a single rule to two different selectors?
- [ ] Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
- [ ] What does the descendant combinator do?
- [ ] What are the names of the three ways to add CSS to HTML?
- [ ] What are the main differences between the three ways of adding CSS to HTML?

## My Answers to Knowledge Checks

1. **What is the syntax for class and ID selectors?**  
Class: `.classname { ... }`  
ID: `#idname { ... }`

2. **How would you apply a single rule to two different selectors?**  
Group them with a comma: `.first, #second { ... }` applies the rule to both selectors.

3. **Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?**  
Use a chaining selector: `#title.primary { ... }` (or `.primary#title { ... }`). This targets elements with both the id and class.

4. **What does the descendant combinator do?**  
The descendant combinator (a space between selectors) selects all elements that are descendants (children, grandchildren, etc.) of a specified ancestor. Example: `div p { ... }` targets all `<p>` inside `<div>`.

5. **What are the names of the three ways to add CSS to HTML?**  
1. External CSS (separate `.css` file linked in `<head>`)  
2. Internal CSS (CSS in a `<style>` tag in the `<head>`)  
3. Inline CSS (CSS in the `style` attribute of an element)

6. **What are the main differences between the three ways of adding CSS to HTML?**  
- External CSS: Best for large projects, reusable, keeps HTML and CSS separate.  
- Internal CSS: Good for single-page or page-specific styles, but can get messy for big projects.  
- Inline CSS: For quick, one-off changes; not maintainable for large projects; highest specificity.

## Open Questions / Concepts I Struggled With

- None at this time. Selectors required extra practice but are now clear.

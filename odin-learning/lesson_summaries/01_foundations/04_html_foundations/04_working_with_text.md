# Working with Text

**Date Started:** July 5, 2025
**Date Completed:** July 5, 2025
**Lesson Link:** https://www.theodinproject.com/lessons/foundations-working-with-text

## Lesson Overview
This lesson covers the fundamental HTML text elements you'll use most frequently:
- How to create paragraphs
- How to create headings
- How to create bold text
- How to create italicized text
- The relationships between nested elements
- How to create HTML comments

## Key Concepts Summary

### Paragraphs
- HTML compresses multiple line breaks into single spaces
- Use `<p>` tags to create proper paragraphs
- Each `<p>` element adds a new line after it

### Headings
- 6 levels of headings: `<h1>` to `<h6>`
- `<h1>` is largest/most important, `<h6>` is smallest
- Use `<h1>` for main page heading, lower levels for subsections
- Headings provide content hierarchy

### Strong Element
- `<strong>` makes text bold AND semantically important
- Affects screen readers and accessibility tools
- Can be used alone or within other elements

### Em Element
- `<em>` makes text italic AND adds semantic emphasis
- Also affects screen readers
- Can be used alone or within other elements

### Nesting and Indentation
- Elements inside other elements create parent-child relationships
- Elements at the same nesting level are siblings
- Proper indentation (2 spaces per level) improves readability

### HTML Comments
- `<!-- comment text -->` syntax
- Not visible in browser
- Help document code for other developers
- VSCode shortcut: Cmd + / (Mac) or Ctrl + / (Windows/Linux)

## Assignments
- [x] Watch Kevin Powell's [HTML Paragraph and Headings Video](https://www.youtube.com/watch?v=yqcd-XkxZNM&t=35s)
- [x] Watch Kevin Powell's [HTML Bold and Italic Text Video](https://www.youtube.com/watch?v=gW6cBZLUk6M&t=5s)
- [x] Create a plain blog article page using different headings, paragraphs, and formatted text (use Lorem Ipsum dummy text)

## Knowledge Check Answers
*(To be filled after completing assignments)*

1. **How do you create a paragraph in HTML?**
   - Your answer: Use the `<p>` tag to wrap your paragraph text.

2. **How do you create a heading in HTML?**
   - Your answer: Use `<h1>` through `<h6>` tags for headings, depending on the level.

3. **How many different levels of headings are there and what is the difference between them?**
   - Your answer: There are six levels (`<h1>` to `<h6>`), which differ in size and semantic importance.

4. **What element should you use to make text bold and important?**
   - Your answer: Use the `<strong>` tag for semantic bold (preferred), or `<b>` for visual bold only.

5. **What element should you use to make text italicized to add emphasis to it?**
   - Your answer: Use the `<em>` tag for semantic emphasis (preferred), or `<i>` for visual italics only.

6. **What relationship does an element have with any nested elements within it?**
   - Your answer: The outer element is the parent, and the inner element is the child.

7. **What relationship do two elements have if they are at the same level of nesting?**
   - Your answer: They are siblings of each other.

8. **How do you create HTML comments?**
   - Your answer: Use `<!-- comment here -->`. In VS Code, you can use Cmd+/ to quickly comment lines.

## Notes & Questions
- VSCode tip: Type `lorem` + Enter to generate Lorem Ipsum text
- Remember: `<strong>` and `<em>` have semantic meaning beyond just styling
- Proper nesting and indentation are crucial for maintainable code

## Additional Resources
- [The semantic difference between <strong> and <b> or <em> and <i> tags](https://scribe.rip/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)
- [Interactive HTML text formatting article](https://www.w3schools.com/html/html_formatting.asp)

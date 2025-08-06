# Custom Properties

**Date completed:** August 6, 2025

## Key Summary

- Custom properties (CSS variables) let you store reusable values in CSS, improving maintainability and enabling theming.
- Declare with double hyphens inside a selector (e.g., `:root { --text-color: blue; }`).
- Access with `var(--property-name)`.
- Use `:root` for global scope; override in other selectors for local scope.
- Can be updated in media queries (e.g., for dark mode) and with JavaScript.
- The `@property` at-rule lets you define type, inheritance, and initial value for a variable, making it safer and animatable.
- Fallbacks: `var(--property, fallback)` provides a backup value if the property isn’t set.
- Custom properties cascade and inherit, but you can control inheritance with `@property`.
- Useful for DRY code, responsive design, and advanced patterns (splitting values, dynamic themes, etc.).

## Assignments
- [x] Watch the video on CSS custom properties
- [x] Read MDN: Using CSS custom properties
- [x] Read CSS Tricks: Complete guide to custom properties
- [x] Inspect Odin Project lesson page for custom properties

## Knowledge Checks
  - `--text-color: blue;` (inside a selector)
  - `background: var(--background-color);`
  - Inside the `:root` selector.
  - Set a default in `:root`, then override in a media query like `@media (prefers-color-scheme: dark)`.
---
All assignments and knowledge checks completed. Topic marked as ✅ Completed.
## Open Questions / Concepts I Struggled With

---
All knowledge checks completed. Ready to move forward!

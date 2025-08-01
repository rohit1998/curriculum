# CSS Units

**Date Started:** July 31, 2025  
**Date Completed:** July 31, 2025  
**Status:** ✅ Completed

## Key Summary

CSS units are measurement systems for defining sizes, distances, and dimensions. They fall into two main categories:

### Absolute Units
- **px (pixels)** - The only absolute unit you should use for web development
- Fixed size that doesn't change based on context
- Good for borders, small decorative elements

### Relative Units
- **em** - Relative to current element's font size (or parent's if setting font-size)
- **rem** - Relative to root element's font size (more predictable than em)
- **vh (viewport height)** - 1vh = 1% of viewport height
- **vw (viewport width)** - 1vw = 1% of viewport width

### Key Principles
- Prefer `rem` over `em` for consistency
- Use relative units for accessibility (respects user font size preferences)
- Use viewport units for full-screen layouts
- Use `px` for borders and fixed decorative elements

## Assignments

- [x] Read [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [x] Read [CSS units](https://codyloyd.com/2021/css-units/) (em, rem, px in depth)
- [x] Read [Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/)

## Knowledge Check Questions

1. Why would you want to use em or rem for font-size instead of px?
2. What are some instances where you might want to use vh and vw?
3. What are some instances where you might want to use px instead of a relative unit?

## My Answers

### 1. Why would you want to use em or rem for font-size instead of px?
Em and rem are relative font sizes that respond when users zoom in/out, making them more responsive than px. The key reason is **accessibility** - many users increase their browser's default font size for better readability (vision issues, preferences). When you use rem for font-sizes, your text respects their settings, while px ignores user preferences completely.

### 2. What are some instances where you might want to use vh and vw?
- **Full-screen layouts** where you need to work with exact viewport dimensions (like 100vh for app-like interfaces)
- **Hero sections** that take up specific portions of screen height (e.g., min-height: 80vh)
- **Responsive typography** using calc() functions to scale fonts with viewport size
- **Breaking containers** technique (calc(50% - 50vw)) to make elements span full width
- Any time you need precise control over screen real estate

### 3. What are some instances where you might want to use px instead of a relative unit?
- **Spacing** - gaps, paddings, and margins (Cody Loyd's recommendation for consistent layouts)
- **Borders** - 1px borders shouldn't scale with font size
- **Small decorative elements** that need to stay fixed
- **Complex layouts** where relative units cause problems with scaling
- **Icons and fixed UI elements** that should remain consistent
- When your design doesn't work well with relative scaling behavior

## Notes & Questions
*Space for additional thoughts and questions during learning*

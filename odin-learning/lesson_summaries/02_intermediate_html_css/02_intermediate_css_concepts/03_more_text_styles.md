# More Text Styles

**Date Started:** August 1, 2025

## Key Summary

This lesson covers advanced typography techniques in CSS, including custom font implementation and sophisticated text styling properties. Focus areas include font management strategies, performance considerations, and the semantic vs. visual distinction in text styling.

## Learning Objectives
- Use custom fonts on web projects through various methods
- Apply advanced text-related CSS properties effectively
- Understand font loading performance implications
- Distinguish between semantic HTML and visual CSS styling

## Main Concepts

### Font Implementation Methods
1. **System Font Stack**: Using pre-installed system fonts for reliability and performance
2. **Online Font Libraries**: Importing fonts from services like Google Fonts
3. **Self-Hosted Fonts**: Downloading and hosting font files locally using @font-face

### Advanced Text Properties
- `font-style`: Italic styling (CSS vs semantic `<em>`)
- `letter-spacing`: Character spacing adjustments
- `line-height`: Line spacing for readability
- `text-transform`: Case conversion (uppercase, lowercase, capitalize)
- `text-shadow`: Shadow effects on text
- Text overflow with ellipsis: Handling overflowing text gracefully

### Performance & Best Practices
- Always include fallback fonts
- Consider GDPR compliance with font services
- Balance design needs with loading performance
- Use semantic HTML for meaning, CSS for visual styling

## Assignments

### Assignment 1: MDN Web Fonts
- [x] Read MDN's article on web fonts
- [x] Complete the exercises in the article

**Summary Completed:** The article covers font implementation methods (self-hosted vs online services), @font-face syntax, browser compatibility, and provides hands-on exercises using Font Squirrel and Google Fonts. Key concepts include licensing considerations, performance optimization with font-display: swap, and proper fallback font implementation.

### Assignment 2: Font Performance
- [x] Read "Font Best Practices" to understand performance considerations
- [x] Learn mitigation strategies for font loading issues

**Summary Completed:** The article covers three critical areas: Font Loading (early discovery through inlining and preconnect), Font Delivery (self-hosting vs third-party, WOFF2 usage, subsetting), and Font Rendering (font-display strategies). Key insights include understanding that fonts are request-driven (not loaded on @font-face declaration), WOFF2 is now the recommended format, and font-display choices should align with performance vs aesthetics priorities. Critical optimization techniques include preconnecting to third-party origins, inlining font declarations, using system fonts where appropriate, and choosing font-display values based on content importance (optional for performance, swap for quick text + web font, block for web font requirement).

### Assignment 3: Typography Design
- [x] Read web.dev Typography article
- [x] Understand developer considerations for typography

**Summary Completed:** The article covers responsive typography principles including fluid text sizing with clamp() for controlled scaling, optimal line length using ch units (66 characters ideal), line height relationships to readability, font loading optimization with preload and font-display strategies, and variable fonts for performance. Key developer considerations include balancing aesthetics with performance, respecting user preferences, implementing smooth responsive scaling rather than fixed breakpoints, and understanding that typography encompasses loading speed as part of user experience. The article emphasizes text is responsive by default but requires intentional design for optimal readability across devices and viewing distances.

## Knowledge Check Questions

1. What are the 2 ways to add fonts that are not installed on a user's computer?
   - **My Answer:** You can use a font server for this, either a 3rd party or a self hosted.
   - ✅ **Correct!** More specifically: **(1) Online font services** (like Google Fonts, Adobe Fonts) and **(2) Self-hosted fonts** (downloading font files and hosting them yourself using @font-face). Both approaches let you serve custom fonts to users who don't have them installed locally.

2. What is the 'system font stack' and why would you want to use it?
   - **My Answer:** System font stack means using fonts that are provided by the system rather than like external fonts or 3rd party fonts. These are much more efficient to use since you don't have to load fonts.
   - ✅ **Excellent!** The system font stack (like `font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) uses fonts already installed on the user's device. Benefits: **instant loading** (no download time), **consistency** with OS interface, **reliability** (always available), and **privacy** (no external requests).

3. Which property would you use to increase or decrease the space between letters in a word?
   - **My Answer:** The property is called letter-spacing that you can use to do this.
   - ✅ **Perfect!** `letter-spacing` controls character spacing. Use sparingly - great for headers/all-caps text, but can hurt readability if overdone.

4. Which property would you use to increase or decrease the space between lines in a paragraph?
   - **My Answer:** You can use line-height to do that.
   - ✅ **Spot on!** `line-height` controls vertical spacing between lines. Best practice: use **unitless values** (like `line-height: 1.5`) so it scales with font size. Shorter lines can handle larger line-heights, longer lines need tighter spacing for easier reading.

## Notes & Questions

<!-- Add any additional notes, insights, or questions that come up during learning -->

## Status
- [x] All assignments completed
- [x] All knowledge checks completed  
- [x] Ready to move to next topic

**Completion Date:** August 1, 2025

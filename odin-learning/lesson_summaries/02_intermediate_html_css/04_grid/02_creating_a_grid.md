# Creating a Grid

**Date completed:** September 16, 2025

## Key Summary
- CSS Grid lets you build two-dimensional layouts easily.
- Any element with `display: grid` or `display: inline-grid` becomes a grid container; its direct children become grid items.
- Grid tracks are defined with `grid-template-columns` and `grid-template-rows`.
- Grid lines separate tracks; the space between lines is a track.
- Implicit tracks are created automatically if you add more items than defined tracks.
- Control implicit track sizes with `grid-auto-rows` and `grid-auto-columns`.
- Gutters (alleys) are set with `gap`, `row-gap`, and `column-gap`.
- Grid items can be positioned and sized using `grid-row` and `grid-column`.

## Assignments
- [x] Read Parts I, II, III from CSS-Tricks Complete Guide to Grid
- [x] Watch Wes Bos video on implicit vs explicit tracks
- [x] Review Chrome DevTools docs for CSS Grid

## Knowledge Checks
- How does an HTML element become a grid item?
  - By making its parent a grid container with `display: grid` or `display: inline-grid`.
- What is the space between lines on the grid?
  - The space is called a grid track; the lines themselves are grid lines.
- How do you set gutters (alleys) in the grid?
  - Use the `gap`, `row-gap`, and `column-gap` properties.
- Describe what happens when you have more content than defined tracks.
  - CSS Grid automatically creates new implicit tracks for extra items.
- How could you change the size for those undefined tracks?
  - Use `grid-auto-rows` and `grid-auto-columns` to set their size.

## Open Questions / Concepts I Struggled With
- None for this lesson.

---
If you want to revisit any concept or need deeper examples, let me know!

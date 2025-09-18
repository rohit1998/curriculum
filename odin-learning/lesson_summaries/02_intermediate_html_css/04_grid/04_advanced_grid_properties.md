---
title: Advanced Grid Properties
date_completed: September 17, 2025
---

# Advanced Grid Properties — Summary

## Key Concepts
- **Fractional Units (`fr`)**: Distributes leftover space among grid tracks. Example: `1fr 2fr` means the second column gets twice as much space as the first.
- **`repeat()` Function**: Quickly creates multiple tracks. Example: `repeat(4, 1fr)` creates four equal columns.
- **`minmax(min, max)`**: Sets a lower and upper bound for track size. Example: `minmax(250px, 1fr)` means each column is at least 250px wide, but can grow to fill available space.
- **`auto-fit` vs `auto-fill`**: Both used with `repeat()` and `minmax()` for responsive grids. `auto-fit` collapses empty columns, stretching items to fill space. `auto-fill` keeps empty columns, so items don’t stretch as much.
- **Responsive Grids Without Media Queries**: By combining `repeat(auto-fit, minmax(250px, 1fr))`, your grid adapts to container size and item count automatically.

## Assignments
- [x] 01-responsive-holy-grail
- [x] 02-holy-grail-mockup

## Knowledge Check Answers
1. **What does the `fr` unit do in CSS Grid?**
   - The `fr` unit is a fractional unit that distributes available space among grid tracks. For example, `1fr 2fr` means the second column gets twice as much space as the first. It’s not a percentage, but a ratio of remaining space.
2. **How does `repeat(auto-fit, minmax(250px, 1fr))` work in a grid layout?**
   - It creates as many columns as will fit, each at least 250px wide, but able to grow to fill available space. `auto-fit` collapses empty tracks, so the grid adapts to the number of items and container size.
3. **What’s the difference between `auto-fit` and `auto-fill` in grid templates?**
   - `auto-fit` collapses empty columns and stretches items to fill space. `auto-fill` keeps empty columns, so items don’t stretch as much, reserving space for “phantom” columns.
4. **How can you make a grid responsive without writing media queries?**
   - By using `repeat(auto-fit, minmax(minWidth, 1fr))` or `repeat(auto-fill, minmax(minWidth, 1fr))`, the grid automatically adjusts the number of columns based on the container’s width and item count.
5. **What is the purpose of `minmax()` in grid layouts?**
   - `minmax(min, max)` sets a lower and upper bound for track size, ensuring a grid track will never be smaller than the minimum value and never larger than the maximum value. This helps create flexible, responsive layouts.

## Open Questions / Notes
- No open questions. All concepts understood and applied in assignments.
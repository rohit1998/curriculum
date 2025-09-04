# Form Validation

**Date completed:** August 31, 2025

## Topic title
Form Validation

## Key Summary
Form validations restrict what users can enter into form controls and provide feedback when input doesn't meet constraints. HTML offers built-in validations via attributes like `required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, and specialized input types (e.g., `email`, `url`, `number`) that perform format checking. Styling hooks like the `:valid` and `:invalid` pseudo-classes let us visually indicate validation state. Built-in validations are fast and accessible but limited; complex rules (cross-field checks, async uniqueness checks) require JavaScript and server-side validation to be secure.

## Assignment List
- [x] Read MDN's Client-Side Form Validation Guide (skip the JavaScript section for now)
- [x] Read SitePoint's Complete Guide to HTML Forms and Constraint Validation (skip JS sections)
- [x] Read Silo Creativo's "Improving UX in forms"
- [x] Created comprehensive form validation UX demo in sandbox/21-form-validation-ux/

## Knowledge Checks
- What does the `required` attribute do?
- Which attributes control text length validation?
- How do you validate numeric ranges on inputs?
- What is the `pattern` attribute used for?
- Which pseudo-classes style valid/invalid inputs?

## My Answers to Knowledge Checks
1. **What does the `required` validation do?**
   - It marks the input field as non-optional, something user has to fill. If it's empty, the form does not get submitted. The browser prevents submission and shows an error message.

2. **What validations can you use for checking text length?**
   - `minlength` and `maxlength` attributes control the minimum and maximum number of characters for text-based inputs and textareas.

3. **How can you validate the minimum and maximum of numeric inputs?**
   - `min` and `max` attributes (not min-value/max-value) set lower and upper bounds for number-based inputs. Also work on date/time inputs like `type="date"`, `type="time"`, `type="range"`.

4. **What can you use the pattern validation for?**
   - Pattern validation uses regular expressions for format validation. Perfect for user IDs, credit card numbers, phone numbers, postal codes - anything that can be described by regex. Only works on `<input>` elements.

5. **What pseudo CSS selectors are available for styling valid and invalid inputs?**
   - `:valid` - styles inputs that pass validation
   - `:invalid` - styles inputs that fail validation
   - Bonus: `:invalid:not(:placeholder-shown)` only shows invalid styles after user interaction

## Open Questions / Concepts I Struggled With
- When is it better to rely on built-in validation UX vs. providing custom JS messages? (Research: accessibility and internationalization of error messages)
- Examples of accessible patterns for replacing native controls that are hard to style (date pickers, file inputs).

**Notes / Next steps:**
- ✅ Completed all three reading assignments and checked off items above.
- ✅ Successfully answered all knowledge checks with detailed explanations.
- ✅ Created comprehensive form validation UX demo with CSS classes and techniques.
- Ready to move to the next topic: Project: Sign-up Form.

**Completion note:**
- Status: ✅ Completed on August 31, 2025
- All knowledge checks passed
- Practical understanding demonstrated through sandbox demo


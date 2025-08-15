# Form Basics

**Date completed:** August 6, 2025

## Key Summary
Forms are the main way users interact with your site’s backend, providing data for processing or storage. The `<form>` element wraps all input controls and uses `action` (destination URL) and `method` (HTTP method) attributes. Form controls include text inputs, email/password/number/date fields, textareas, dropdowns, radio buttons, checkboxes, and buttons. Each input should have a label for clarity and accessibility, and a `name` attribute for backend identification. Organizing inputs with `<fieldset>` and `<legend>` improves usability. Styling forms often requires overriding browser defaults, and some controls are harder to style than others.

## Assignment List
- [ ] Read and follow along with MDN’s Introductory Guides to Forms ([Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form), [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form))
- [ ] Read and follow along with MDN’s The Different Form Controls Guides ([link](https://developer.mozilla.org/en-US/docs/Learn/Forms#the_different_form_controls))
- [ ] Read and follow along with MDN’s Form Styling Tutorials ([link](https://developer.mozilla.org/en-US/docs/Learn/Forms#form_styling_tutorials))
- [ ] Read and follow along with the internetingishard guide to forms ([link](https://internetingishard.netlify.app/html-and-css/forms/index.html))

## Knowledge Checks
- Explain what the form element is for and what two attributes it should always include.
- Explain what form controls are at a high level.
- What is the name attribute for?
- What are the three most common form controls you can use for allowing users to select predefined options?
- What are the three types of buttons in HTML?
- What are the two most challenging aspects of styling forms?

## My Answers to Knowledge Checks
1. The `<form>` element groups controls that collect user input and sends that data to a server. Two essential attributes are:
	- `action` — the URL that will receive the submitted data (if omitted, the current page is used).
	- `method` — the HTTP method to use (commonly `GET` to retrieve or `POST` to submit/change data).  
	Related attributes: `enctype` (needed for file uploads) and `target` (optional — controls where the response opens).

2. Form controls are the interactive elements inside a form that collect user data. Examples include `<input>` (various `type`s like `text`, `email`, `password`, `number`, `date`, `radio`, `checkbox`), `<textarea>`, `<select>/<option>` (and `<optgroup>`), `<datalist>`, `<button>`, `<output>`, `<meter>`, and `<progress>`. Each control should have a `name` to be submitted and an associated `<label>` for accessibility.

3. The `name` attribute is the key used in the submitted form payload — it becomes the field name the server receives. Inputs without a `name` are omitted from submission. When multiple controls share the same `name`: radio groups produce a single selected value, while multiple checkboxes with the same name produce multiple values (often handled as an array on the server).

4. Common controls for predefined selections:
	- Radio buttons (`<input type="radio">`) — use for a small set of mutually exclusive options that should be visible on the page.
	- Select/dropdown (`<select>`) — use for longer lists or to save space; supports grouping with `<optgroup>` and multi-select via the `multiple` attribute.
	- Checkboxes (`<input type="checkbox">`) — use for independent boolean options or when multiple choices can be selected.

5. Three button types:
	- `type="submit"` — submits the form (default for `<button>` inside forms if `type` is omitted).
	- `type="reset"` — resets form controls to their initial values.
	- `type="button"` — a generic button for custom JavaScript actions (won't submit the form).
	Note: use `formnovalidate` on a submit button if you need to bypass HTML validation for that action.

6. Two challenging styling aspects and quick tips:
	- Browser default widgets differ (date pickers, native selects, file inputs): tip — accept native behavior where possible; for custom visuals, provide an accessible replacement and test across browsers/devices.
	- Styling controls like checkboxes and radio buttons consistently is tricky: tip — use `accent-color` for simple color changes, or hide the native control visually and create a labeled, keyboard-focusable replacement using CSS and accessible markup.
## Open Questions / Concepts I Struggled With


**Completion note:** Completed the Form Basics lesson, worked through assignments and knowledge checks on August 15, 2025.



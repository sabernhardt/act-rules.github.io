---
id: ep1s13
name: Additional content triggered on hover is hoverable
rule_type: atomic
description: |
  This rule checks that any additional content that was triggered by hovering an element remains available to the user while the mouse pointer is over that content
accessibility_requirements:
  wcag21:1.4.13: # Content on Hover or Focus (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Mouse pointer
acknowledgments:
  authors:
    - Carlos Duarte
---

## Applicability

The rule applies to any element that when [hovered][] causes [visible changes in content][].

## Expectation

There are no [visible changes in content][] while the target element is [hovered][] or the mouse pointer remains inside a rectangle defined by the following coordinates:

- (**top**:) the lowest value of the y coordinate of any pixel affected by the [visible changes in content][]; and
- (**left**:) the lowest value of the x coordinate of any pixel affected by the [visible changes in content][]; and
- (**bottom**:) the highest value of the y coordinate of any pixel affected by the [visible changes in content][]; and
- (**right**:) the highest value of the x coordinate of any pixel affected by the [visible changes in content][].

## Assumptions

- The user does not dismiss the tooltip causing the changes in content by pressing a key on the keyboard. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- The content displayed on the rectangle with the changes in content does not become irrelevant. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.13: Content on Hover or Focus][sc1.4.13]
- [F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95)

## Test Cases

### Passed

#### Passed Example 1

This button element causes [changes in content][] by presenting a tooltip when [hovered][]. The tooltip remains displayed, resulting in no further [changes in content][] while the mouse pointer does not leave its boundaries or the button's boundaries.

```html
<link rel="stylesheet" type="text/css" href="/test-assets/ep1s13/styles.css" />
<div class="tooltip-container">
	<button aria-labelledby="tooltip">
		<span aria-hidden>WCAG</span>
	</button>
	<p id="tooltip" role="tooltip" hidden>Web Content Accessibility Guidelines</p>
</div>
<script src="/test-assets/ep1s13/scripts.js"></script>
```

### Failed

#### Failed Example 1

Description...

```html
<!-- code -->
```

#### Failed Example 2

...

### Inapplicable

#### Inapplicable Example 1

Description...

```html
<!-- code -->
```

#### Inapplicable Example 2

...

[hovered]: #hovered 'Definition of hovered'
[sc1.4.13]: https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html 'Understanding Success Criterion 1.4.13: Content on Hover or Focus, July 24, 2020'
[visible changes in content]: #visible-changes-in-content 'Definition of visible changes in content'
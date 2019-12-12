---
id: cf77f2
name: Bypass Blocks of Content
rule_type: composite
description: |
  This rule checks that each page has a mechanism to bypass blocks of content.
accessibility_requirements:
  wcag20:2.4.1: # Bypass Blocks (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 047fe0
  - 7b576d
  - 8a213c
  - b40fd1
  - 3e12e1
  - e53727
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [Document has headings](https://act-rules.github.io/rules/047fe0); or
- [Document has a main landmark](https://act-rules.github.io/rules/b40fd1); or
- [Link for skipping block of content](https://act-rules.github.io/rules/7b576d); or
- [Block of content is expandable and collapsible][]; or
- [First focusable element is link to main content](https://act-rules.github.io/rules/8a213c); or
- [First focusable elements are links to sections of content](https://act-rules.github.io/rules/e53727).

## Assumptions

This rule assumes that one of the techniques listed here is used to comply to WCAG. Other methods could be used to pass this Success Criterion, notably:

- server side scripting can provide a functionality similar to [Block of content is expandable and collapsible][] by serving a modified version of the page;
- `frameset` and `frame` elements can be used to organize content as per [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70) and [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64) but are ignored here given that they are deprecated in HTML5.

## Accessibility Support

Techniques and solutions that identify blocks of content are sufficient ways of passing [Success Criterion 2.4.1: Bypass blocks][sc241]. They are, however, directed users of assistive technologies. Techniques and solutions based on links will benefit all users (for example, keyboard users with no other assistive technology) and are therefore recommended.

## Background

- [Understanding Success Criterion 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)
- Creating links to skip blocks of content:
  - [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)
  - [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)
  - [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)
- Grouping and identifying blocks of content:
  - [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
  - [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
  - [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

## Test Cases

### Passed

#### Passed Example 1

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Passed Example 2

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Passed Example 3

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

### Failed

#### Failed Example 1

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 2

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 3

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 4

```html
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [document element][] of this [document][] is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[block of content is expandable and collapsible]: https://act-rules.github.io/rules/3e12e1
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[sc241]: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html 'Success Criterion 2.4.1: Bypass blocks'
[html web page]: #web-page-html 'Definition of web page (HTML)'
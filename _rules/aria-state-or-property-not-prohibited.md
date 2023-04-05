---
id: 
name: ARIA state or property is not prohibited
rule_type: atomic
description: |
  This rule checks that WAI-ARIA states or properties are not prohibited for the element they are specified on. 
accessibility_requirements:
  wcag-technique:ARIA5: # Using WAI-ARIA state and property attributes to expose the state of a user interface component
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  aria12:state_property_processing:
    title: ARIA 1.2, 8.6 State and Property Attribute Processing
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
  wcag20:1.3.1: # Info and Relationships (A)
    secondary: true
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: true
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Jean-Yves Moyen
    - Trevor Bostic
  funding:
    - WAI-Tools
  assets:
    - JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.
---

## Applicability

This rule applies to any [WAI-ARIA state or property][] that is specified on an [HTML or SVG element][namespaced element] that is [included in the accessibility tree][].

## Expectation

No test target (i.e., state or property) is prohibited on the semantic role of the element on which it is specified.

## Assumptions

There are no assumptions.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and their attributes fail this rule with some technologies but users of other technology would not experience any accessibility issue.

## Background

The presence of prohibited ARIA attributes is often the result of a developer using an incorrect role, or a misunderstanding of the attribute. These attributes are ignored by browsers and other assistive technologies. This often means that a state or property which should exist is missing. This can cause issues under success criterion [1.3.1 Info and Relationships][sc131] or [4.1.2 Name, Rule Value][sc412].

Assessing the value of the attribute is out of scope for this rule.

### Related rules

- [ARIA state or property has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/proposed/)
- [ARIA state or property is permitted](https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/proposed/)

### Bibliography

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.2, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.2/#states_and_properties)
- [WAI-ARIA 1.2, Global States and Properties](https://www.w3.org/TR/wai-aria-1.2/#global_states)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)

## Test Cases

### Passed

#### Passed Example 1

The `aria-pressed` [state][] is [supported][] with `button`, which is the [implicit role][] for `button` elements.

```html
<button aria-pressed="false">My button</button>
```

#### Passed Example 2

The `aria-pressed` [state][] is [supported][] with `button`, which is the [explicit role][] of this `div` element.

```html
<div role="button" aria-pressed="false">My button</div>
```

### Failed

#### Failed Example 1

The `aria-label` property is [prohibited](https://www.w3.org/TR/wai-aria-1.2/#prohibitedattributes) for an element with a generic role.
```html
<div aria-label="Bananas"></div>
```

#### Failed Example 2
The `aria-labelledby` property is [prohibited](https://www.w3.org/TR/wai-aria-1.2/#prohibitedattributes) for an element with an emphasis role. 
```html
<label id="importance">A very important fruit</label>
<p><em aria-labelledby="importance">Bananas</em> are a great fruit</p>
```

#### Failed Example 3
The `aria-roledescription` property is [prohibited](https://www.w3.org/TR/wai-aria-1.2/#prohibitedattributes) for an element with a generic role.
```html
<div aria-roledescription="fruit"><p>Banana</p></div>
```

### Inapplicable

#### Inapplicable Example 1

This `div` element has no [WAI-ARIA state or property][].

```html
<div role="region">A region of content</div>
```

#### Inapplicable Example 2

This `div` element is not [included in the accessibility tree][], hence its [WAI-ARIA state or property][] is not checked.

```html
<div role="button" aria-sort="" style="display:none;"></div>
```

[attribute value]: #attribute-value 'Definition of attribute value'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.2/#global_states 'Definition of Global ARIA States and Properties'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inherited]: https://www.w3.org/TR/wai-aria-1.2/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria-1.2/#dfn-property 'Definition of ARIA Property'
[required]: https://www.w3.org/TR/wai-aria-1.2/#requiredState 'Definition of Required ARIA States and Properties'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state 'Definition of ARIA State'
[supported]: https://www.w3.org/TR/wai-aria-1.2/#supportedState 'Definition of Supported ARIA States and Properties'
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.2/#state_prop_def 'Definition of ARIA States and Properties'
[namespaced element]: #namespaced-element
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value
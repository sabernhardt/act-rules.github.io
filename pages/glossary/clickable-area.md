---
title: Clickable area
key: clickable-area
unambiguous: true
objective: false
input_aspects:
  - CSS styling
  - DOM tree
---

The _directly clickable area_ of an element is the set of all viewport coordinates for which the element is the [topmost event target][]

The _clickable area_ of an element is the union of its _directly clickable area_ and that of its [implicit][implicit label] or [explicit label][]. Clickable areas may contain several disconnected parts.

[explicit label]: #programmatic-label:explicit 'Definition of Explicit Label'
[implicit label]: #programmatic-label:implicit 'Definition of Implicit Label'
[topmost event target]: https://w3c.github.io/uievents/#topmost-event-target 'CSS definition of Topmost Event Target'
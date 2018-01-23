[![Build Status](https://travis-ci.org/advanced-rest-client/raml-docs-method-viewer.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-docs-method-viewer)  

# raml-docs-method-viewer

`<raml-docs-method-viewer>` Documentation view for the method defined in RAML file

This element is meant to work with data structure returned by the
`<raml-js-parser>` and `<raml-path-to-object>`. Regular JSON output from the
RAML JS parser will not work with this element.

### Example
```
<raml-docs-method-viewer
  raml="[[methodDefinition]]"
  parent-endpoint="[[selectedParent]]"></raml-docs-method-viewer>
```
To properly compute values displayed in the view it needs to know its
`parentEndpoint`. Though, it will work properly if the parent is not passed.
Parent is used to display title of the method.

## Disabling the "try it" button
You can either set the `noTryIt` property to true (or set the `no-try-it` attribute on the element)
or send for the `tryit-toggle` custom event with the `state` property set to the detail object.
The element will listen on `window` object for the event.

### Styling
`<raml-docs-method-viewer>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-docs-method-viewer` | Mixin applied to the element | `{}`
`--raml-docs-h1` | Mixin applied to H1 | `{}` |
`--raml-docs-h2` | Mixin applied to H2 | `{}` |
`--raml-docs-h3` | Mixin applied to H3 | `{}` |
`--raml-docs-method-viewer-title-method-font-weight` | Font weight of the name if the method | `500` |
`--raml-docs-method-viewer-http-method-font-weight` | Font weight of the HTTP method | `500` |
`--raml-docs-item-description` | Mixin applied to the description field. | `{}` |
`--raml-docs-method-viewer-url-color` | Color of the URL field | `--accent-color` |
`--raml-docs-method-viewer-url-font-style` | font-style of the URL value | `italic` |
`--raml-docs-method-viewer-url` | Mixin applied to the URL field | `{}` |
`--action-button` | Mixin applied to the main action button (Try it) | `{}`
`--action-button-hover` | Mixin applied to the main action button on hover (Try it) | `{}`
`--arc-font-headline` | Mixin applied to the h1 element (API title) | `{}`
`--arc-font-title` | Mixin applied to the h2 elements (section title) | `{}`
`--arc-font-subhead` | Mixin applied to the h3 elements (section sub-titles) | `{}`
`--toggle-button` | Mixin applied to toggling button (show/hide) | `{}`
`--toggle-button-hover` | Mixin applied to toggling button on hover (show/hide) | `{}`
`--raml-docs-method-viewer-title-area-actions` | Mixin applied to toggling actions area | `{}`
`--raml-docs-method-viewer-traits-list` | Mixin applied to the list of traits container | `{}`
`--raml-docs-method-viewer-traits-list-values` | Mixin applied to the list of traits values (names) | `{}`
`--raml-docs-method-viewer-traits-list-label` | Mixin applied to the list of traits list label | `{}`
`--raml-docs-method-viewer-traits-list-color` | Color of the traits list section | `rgba(0,0,0,0.74)`
`--raml-docs-method-viewer-traits-list-values-color` | Color of the traits list values (names) | `rgba(0,0,0,0.94)`
`--raml-docs-method-viewer-traits-list-label-color` | Color of the traits list label | `inherit`



### Events
| Name | Description | Params |
| --- | --- | --- |
| tryit-requested | Fired when the user pressed the `try it` button. | __none__ |

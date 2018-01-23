[![Build Status](https://travis-ci.org/advanced-rest-client/raml-summary-view.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-summary-view)  

# raml-summary-view

# `<raml-summary-view>`
A basic information about the RAML definition viewer for the documentation panel.

### Example
```
<raml-summary-view raml="[[raml]]"></raml-summary-view>
```
or in vanila JavaScript
```
let summary = document.querySelector('raml-summary-view');
summary.raml = raml;
```

### Styling
`<raml-summary-view>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-summary-view` | Mixin applied to the element | `{}`
`--raml-summary-view-title` | Mixin applied to the API title element | `{}`
`--raml-summary-view-property` | Mixin applied to each line of attributes applied in the basic documentation view | `{}`
`--raml-summary-view-description-color` | Color of the description of the API. | `rgba(0, 0, 0, 0.54)`
`--raml-summary-view-description-max-width` | Max width of the API description | `700px`
`--raml-summary-view-description-value-color` | The color of the property value description | `rgba(0, 0, 0, 0.74)`
`--raml-summary-view-uri-section-title` | Mixin applied to URI description section. | `{}`
`--raml-summary-view-uri-section-margin-top` | Margin top of the URI description section | `24px`
`--raml-summary-view-base-uri-font-size` | Font size of the URI display. | `16px`;
`--raml-summary-view-base-uri` | Mixin applied to the URI display | `{}`,
`--raml-summary-view-parameters-table-max-width` | Max width of the URI parameters table | `700px`
`--raml-summary-view-parameters-table` | Mixin applied to the URI parameters table | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-path-changed | An event fired when the user click on a resource link. | __none__ |

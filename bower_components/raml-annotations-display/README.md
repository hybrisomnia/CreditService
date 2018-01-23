[![Build Status](https://travis-ci.org/advanced-rest-client/raml-annotations-display.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-annotations-display)  

# raml-annotations-display

The `<annotations-display>` element displays list of annotations added to a
property.

It creates its own model out of RAML definition.
Currently this element support annotations that it's values are either string,
nil or a properties list that have primitive values.

### Example
```
<raml-annotations-display annotations='[...]'></raml-annotations-display>
```

### Styling
`<raml-annotations-display>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--annotations-display` | Mixin applied to the element | `{}`
`--annotations-display-name` | Mixin applied to annotation name element | `{}`
`--annotations-display-value` | Mixin applied to the value container. Note that it may contain `<marked-element>`, `ul` for properties list or be empty | `{}`
`--annotations-display-list` | Mixin applied to the list of annotation properties. The `ul` element in value container. | `{}`
`--annotations-display-list-name` | Mixin applied to the property list names | `{}`
`--annotations-display-list-value` | Mixin applied to the property list values | `{}`
`--annotations-display-list-value-font-weight` | Font weight of the annotation list value | `500`


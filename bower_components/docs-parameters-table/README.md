[![Build Status](https://travis-ci.org/advanced-rest-client/docs-parameters-table.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/docs-parameters-table)  

# docs-parameters-table

`<docs-parameters-table>` A query and URI parameters list and description table for the RAML documentation view

This element renders a table of paramteres with the doccumentation. It can be used to display
URL parameters.
For headers documentation table pleae, use `<docs-headers-table>` element.
For types documentation table pleae, use `<docs-body-parameters-table>` element.

### Example
```
<docs-parameters-table
  uri-parameters="[[uriParameters]]"
  query-parameters="[[queryParameters]]"></docs-parameters-table>
```

### Object properties
An object in both arrays can contain any property that URI and query parameters can contain.

Currently following properties are supported:

- name (required) - name of the property, in case of UIR parameter it should be the parameter itself
- type - the type of the parameter, any RAML allowed value will be accepted
- description - description of the parameter
- required - mark that the property is a required property
- pattern - validation pattern to be applied to the parameter value
- example - example value of the parameter
- min - minimum value of the parametre when the type is numeric
- max - maximum value of the parametre when the type is numeric
- enum - List of possible values.

### Styling
`<docs-parameters-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-parameters-table` | Mixin applied to all parameter table elements | `{}`
`--docs-parameters-url-table` | Mixin applied to this elements | `{}`
`--params-table-header-background-color` | Background color of table header | `#00A1DF`
`--params-table-header-color` | Font color of table header | `rgba(255, 255, 255, 0.87)`
`--params-table-subheader-background-color` | Background color of table subheader | `rgba(0, 161, 223, 0.24)`
`--params-table-subheader-color` | Font color of table subheader | `rgba(0, 0, 0, 0.87)`
`--params-table-row-border-color` | Border color of table's each row | `#00A1DF`
`--params-table-row-background-color` | Background color of table's each row |  `#fff`
`--params-table-row-color` | Font color of table's each row |  `#fff`
`--docs-parameters-table-cell` | Mixin applied to each cell | `{}`
`--docs-parameters-table-meta` | Mixin applied to property's metadata (example, pattern, etc) | `{}`

# docs-headers-table

`<docs-headers-table>` A headers list documentation table for the RAML documentation view.

### Example
```
<docs-headers-table
  headers="[[headers]]"></docs-headers-table>
```

### Object properties
An object in headers object can contain any property that header can contain
according to the RAML spec.

Currently following properties are supported:

- name (required) - name of the property, in case of UIR parameter it should be the parameter itself
- type - the type of the parameter, any RAML allowed value will be accepted
- description - description of the parameter
- required - mark that the property is a required property
- pattern - validation pattern to be applied to the parameter value
- example - example value of the parameter
- min - minimum value of the parametre when the type is numeric
- max - maximum value of the parametre when the type is numeric

### Styling
`<docs-headers-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-parameters-table` | Mixin applied to all parameter table elements | `{}`
`--docs-parameters-url-table` | Mixin applied to this elements | `{}`
`--params-table-header-background-color` | Background color of table header | `#00A1DF`
`--params-table-header-color` | Font color of table header | `rgba(255, 255, 255, 0.87)`
`--params-table-subheader-background-color` | Background color of table subheader | `rgba(0, 161, 223, 0.24)`
`--params-table-subheader-color` | Font color of table subheader | `rgba(0, 0, 0, 0.87)`
`--params-table-row-border-color` | Border color of table's each row | `#00A1DF`
`--params-table-row-background-color` | Background color of table's each row |  `#fff`
`--params-table-row-color` | Font color of table's each row |  `#fff`
`--docs-parameters-table-cell` | Mixin applied to each cell | `{}`
`--docs-parameters-table-meta` | Mixin applied to property's metadata (example, pattern, etc) | `{}`

# docs-body-parameters-table

`<docs-parameters-table>` A parameters list and description table for the RAML documentation view

This element renders a table of body type paramteres with the doccumentation.

For headers documentation table pleae, use `<docs-headers-table>` element.
For uri parameters documentation table pleae, use `<docs-parameters-table>`
element.

### Example
```
<docs-body-parameters-table
  type="[[bodType]]"></docs-body-parameters-table>
```

Currently following properties are supported:

- name (required) - name of the property, in case of UIR parameter it should be the parameter itself
- type - the type of the parameter, any RAML allowed value will be accepted
- description - description of the parameter
- required - mark that the property is a required property
- pattern - validation pattern to be applied to the parameter value
- example - example value of the parameter
- min - minimum value of the parametre when the type is numeric
- max - maximum value of the parametre when the type is numeric

### Styling
`<docs-body-parameters-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-parameters-table` | Mixin applied to all parameter table elements | `{}`
`--docs-parameters-url-table` | Mixin applied to this elements | `{}`
`--params-table-header-background-color` | Background color of table header | `#00A1DF`
`--params-table-header-color` | Font color of table header | `rgba(255, 255, 255, 0.87)`
`--params-table-subheader-background-color` | Background color of table subheader | `rgba(0, 161, 223, 0.24)`
`--params-table-subheader-color` | Font color of table subheader | `rgba(0, 0, 0, 0.87)`
`--params-table-row-border-color` | Border color of table's each row | `#00A1DF`
`--params-table-row-background-color` | Background color of table's each row |  `#fff`
`--params-table-row-color` | Font color of table's each row |  `#fff`
`--docs-parameters-table-cell` | Mixin applied to each cell | `{}`
`--docs-parameters-table-meta` | Mixin applied to property's metadata (example, pattern, etc) | `{}`
`--docs-body-parameters-table-json` | Mixin applied to the JSON output | `{}`
`--docs-body-parameters-table-type-name` | Mixin applied to the name of the type | `{}`
`--toggle-button` | Mixin applied to toggle button | `{}`
`--toggle-button-hover` | Mixin applied to the :hover state of toggle button | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-docs-content-type-changed | Fired when selected body content type have changed. It is not fired if value is not set or if change was caused by computation of available content types automatically set fist available content type. | value **String** - Selected body content type. |
# docs-xml-parameters-table

`<docs-xml-parameters-table>` displays a documentation view for XML structured body.

### Example
```
<docs-xml-parameters-table
  type="[[ramlXmlType]]"></docs-xml-parameters-table>
```

### Styling
`<docs-json-parameters-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-xml-parameters-table` | Mixin applied to this elements | `{}`
`--no-info-message` | A mixin applied to the "missing type" paragraph. | `{}`

Use `paper-tabs`, `paper-tab` and `structure-display` mixins to style this element.

# docs-form-parameters-table

`<docs-form-parameters-table>` Displays a list of parameters for the
`x-www-form-urlencoded` form type.

### Example
```
<docs-form-parameters-table
  type="[[ramlType]]"></docs-form-parameters-table>
```

### Styling
`<docs-form-parameters-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-parameters-table` | Mixin applied to all parameter table elements | `{}`
`--docs-parameters-url-table` | Mixin applied to this elements | `{}`
`--params-table-header-background-color` | Background color of table header | `#00A1DF`
`--params-table-header-color` | Font color of table header | `rgba(255, 255, 255, 0.87)`
`--params-table-subheader-background-color` | Background color of table subheader | `rgba(0, 161, 223, 0.24)`
`--params-table-subheader-color` | Font color of table subheader | `rgba(0, 0, 0, 0.87)`
`--params-table-row-border-color` | Border color of table rows | `rgba(0, 161, 223, 1)`
`--params-table-row-subproperty-border-color` | Border color of table row which is a description of child property. | `rgba(0, 161, 223, 0.24)`
`--params-table-row-background-color` | Background color of table's each row |  `#fff`
`--params-table-row-color` | Font color of table's each row |  `#fff`
`--docs-parameters-table-cell` | Mixin applied to each cell | `{}`
`--docs-parameters-table-meta` | Mixin applied to property's metadata (example, pattern, etc) | `{}`
`--docs-body-parameters-table-json` | Mixin applied to the JSON output | `{}`
`--docs-body-parameters-table-type-name` | Mixin applied to the name of the type | `{}`

# docs-json-parameters-table

`<docs-json-parameters-table>` displays a documentation view for JSON structured body.

### Example
```
<docs-json-parameters-table
  type="[[ramlJsonType]]"></docs-json-parameters-table>
```

### Styling
`<docs-json-parameters-table>` provides the following custom properties
and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-parameters-table` | Mixin applied to all parameter table elements | `{}`
`--docs-parameters-url-table` | Mixin applied to this elements | `{}`
`--params-table-header-background-color` | Background color of table header | `#00A1DF`
`--params-table-header-color` | Font color of table header | `rgba(255, 255, 255, 0.87)`
`--params-table-subheader-background-color` | Background color of table subheader | `rgba(0, 161, 223, 0.24)`
`--params-table-subheader-color` | Font color of table subheader | `rgba(0, 0, 0, 0.87)`
`--params-table-row-border-color` | Border color of table rows | `rgba(0, 161, 223, 1)`
`--params-table-row-subproperty-border-color` | Border color of table row which is a description of child property. | `rgba(0, 161, 223, 0.24)`
`--params-table-row-background-color` | Background color of table's each row |  `#fff`
`--params-table-row-color` | Font color of table's each row |  `#fff`
`--docs-parameters-table-cell` | Mixin applied to each cell | `{}`
`--docs-parameters-table-meta` | Mixin applied to property's metadata (example, pattern, etc) | `{}`
`--params-table-subproperty-prefix-color` | Color of the parent property name in the subproperty list | `rgba(0, 0, 0, 0.54)`

# example-display

An element to render an example of the RAML property.

## Usage
```
<example-display content="[[json]]" is-json></example-display>
```

### Styling
`<docs-json-parameters-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--example-display` | Mixin applied to this elements | `{}`
`--example-display-actions-container` | Mixin applied to the top actions container | `{}`
`--example-display-button-active-background-color` | Background color of active button | `#e0e0e0`
`--example-display-button-active` | Mixin applied to selected content button | `{}`
`--example-display-title` | Mixin applied to the title element | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| json-table-state-changed | Fired when the `table` property change to inform other elements to switch corresponding view as well. | enabled **Boolean** - If true then the view is enabled. |
# structure-display

A `<pre>` element that displays highlighted text.

## Usage
```
<pre is="[[structure-display]]" display="[[json]]"></pre>
```

## Theming
Custom property | Description | Default
----------------|-------------|----------
`--code-block` | Mixin applied to the code block. | `{}`
`--code-background-color` | Background color of the code block | `#f5f2f0`

# docs-json-structure-view

`<docs-json-structure-view>` displays a type structure in code view.
It renders structure (or schema) and examples if available.

The element expects `hasType` and `isSchema` that can be computed by parent
element or application. See `docs-json-parameters-table` to see how this
properties are computed.

### Example
```
<docs-json-structure-view type="[[ramlJsonType]]" has-type></docs-json-structure-view>
```

### Styling
`<docs-json-parameters-table>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-parameters-table` | Mixin applied to all parameter table elements | `{}`
`--docs-parameters-url-table` | Mixin applied to this elements | `{}`
`--params-table-header-background-color` | Background color of table header | `#00A1DF`
`--params-table-header-color` | Font color of table header | `rgba(255, 255, 255, 0.87)`
`--params-table-subheader-background-color` | Background color of table subheader | `rgba(0, 161, 223, 0.24)`
`--params-table-subheader-color` | Font color of table subheader | `rgba(0, 0, 0, 0.87)`
`--params-table-row-border-color` | Border color of table rows | `rgba(0, 161, 223, 1)`
`--params-table-row-subproperty-border-color` | Border color of table row which is a description of child property. | `rgba(0, 161, 223, 0.24)`
`--params-table-row-background-color` | Background color of table's each row |  `#fff`
`--params-table-row-color` | Font color of table's each row |  `#fff`
`--docs-parameters-table-cell` | Mixin applied to each cell | `{}`
`--docs-parameters-table-meta` | Mixin applied to property's metadata (example, pattern, etc) | `{}`
`--docs-body-parameters-table-type-name` | Mixin applied to the name of the type | `{}`
`--params-table-subproperty-prefix-color` | Color of the parent property name in the subproperty list | `rgba(0, 0, 0, 0.54)`
`--no-info-message` | A mixin applied to the "missing type" paragraph. | `{}`

Use `paper-tabs`, `paper-tab` and `structure-display` mixins to style this element.

# docs-body-media-type-selector

A dropdown with media types selector for RAML body declaration.

It extracts media types for provided `body` and displays a dropdown. When value
of the dropdown changes then it sets `selectedType` property to type declaration
for selected body.

By default first media type is selected.


### Styling
`<docs-body-media-type-selector>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--docs-body-media-type-selector` | Mixin applied to this elements | `{}`
`--docs-body-media-type-selector` | Mixin applied to the dropdown element | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-docs-media-type-changed | Fired when selected body content type have changed. It is not fired if value is not set or if change was caused by computation of available content types automatically set fist available content type. | value **String** - Newly selected media type. |

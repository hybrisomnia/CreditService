[![Build Status](https://travis-ci.org/advanced-rest-client/raml-headers-form.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-headers-form)  

# raml-headers-form

An element that renders a form of headers with pre-populated values.
It uses RAML headers definitions as a data source for data population.

The RAML headers must be an array. RAML javascript parser returns an object by
default. The object must be transformed using `raml-json-enhance` element -
for example.

### Usage
```html
<raml-headers-form></raml-headers-form>
```

```javascript
var form = document.querySelector('raml-headers-form');
form.ramlHeaders = [...];
form.addEventListener('value-changed', function(e) {
  var value = e.detail.value;
});
```

## Events

The element listens to `headers-value-changed` custom event. If the event is
handled it changes the `value` of the editor.

### Styling
`<raml-headers-form>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-headers-form` | Mixin applied to the element | `{}`
`--raml-headers-form-action-button` | Mixin applied to the acrion button | `{}`
`--raml-headers-form-action-button-hover` | Mixin applied to the acrion button when hovering | `{}`
`--raml-headers-form-action-button-color` | Color of the action button. | `--secondary-button-color` or `--accent-color`
`--raml-headers-form-action-button-color-hover` | Color of the action button when hovered | `--secondary-button-color` or `--accent-color`
`--raml-headers-form-action-button-background` | Background of the action button | `--secondary-button-background` or `#fff`
`--raml-headers-form-action-button-background-hover` | Background of the action button when hovered | `--secondary-button-background` or `#fff`
`--raml-headers-form-action-button-hover` | Mixin applied to the secondary button when hovered | `{}`
`--secondary-button` | Theme mixin applied to the secondary button | `{}`
`--secondary-button-hover` | Theme mixin applied to the secondary button when hovered | `{}`
`--from-row-action-icon-color` | Color of the icon button to display help | `--icon-button-color` or `rgba(0, 0, 0, 0.74)`
`--from-row-action-icon-color-hover` | Color of the icon button to display help when hovered | `--accent-color` or `rgba(0, 0, 0, 0.74)`
`--raml-headers-form-action-icon-color` | Color of the add action icon button | `--secondary-button-color` or `--accent-color`
`--raml-headers-form-action-icon-color-hover` | Theme variable, color of the action icon button when hovered | `--secondary-button-color` or `--accent-color`
`--raml-headers-form-action-icon-opacity` | Opacity of the add action icon button | `0.54`
`--raml-headers-form-action-icon-opacity-hover` | Opacity of the add action icon button when hovered | `0.74`

See styles for `raml-headers-form-item` for more styling options.



### Events
| Name | Description | Params |
| --- | --- | --- |
| headers-value-changed | Fired when the headers value changed. | value **String** - The headers value. |
# raml-headers-form-item

An element that renders form controls for the editor.

### Styling
`<raml-headers-form>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-headers-form-item` | Mixin applied to the element | `{}`
`--raml-headers-form-input-label-color` | Color of the label of the `paper-input` element. | `--raml-request-parameters-editor-input-label-color` or `rgba(0, 0, 0, 0.54)`
`--raml-headers-form-input-label-color-required` | Color of the label of the `paper-input` element when it's required. | `--raml-request-parameters-editor-required-input-label-color` or `rgba(0, 0, 0, 0.72)`
`--from-row-action-icon-color` | Color of the icon button to display help | `--icon-button-color` or `rgba(0, 0, 0, 0.74)`
`--from-row-action-icon-color-hover` | Color of the icon button to display help when hovered | `--accent-color` or `rgba(0, 0, 0, 0.74)`
`--inline-documentation-color` | Color of the documentation string below the input field. Note that it will appy also `marked-element` styles to this element | `rgba(0, 0, 0, 0.87)`
`--raml-request-parameters-editor-row` | Mixin applied to each form row | `{}`
`--raml-request-parameters-editor-row-narrow` | In narrow layouts | `{}`
`--raml-headers-form-name-input` | Mixin applied to the name input field | `{}`
`--raml-headers-form-name-input-narrow` | Mixin applied to the name input field in narrow layout | `{}`


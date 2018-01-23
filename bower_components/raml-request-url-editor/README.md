[![Build Status](https://travis-ci.org/advanced-rest-client/raml-request-url-editor.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-request-url-editor)  

# raml-request-url-editor

`<raml-request-url-editor>` An URL editor for the RAML request panel.

The element renders an input that produces final URL for a request.
It expects the `base-uri` and `endpoint-uri` properties to be set to produce any
output. This properties can be read from the RAML.

The editor works with `raml-request-parameters-model` element. URI and query
parameters model computed by the `raml-request-parameters-model` element.
When set it adds support for updating query and URI parameters from other
parts of the application (like `raml-request-parameters-editor`).
If the models are not set then this element behaves as regular input.

### Example of use (Polymer app)

```html
<raml-request-url-editor auto-validate required value="{{url}}"
  base-uri="[[raml.baseUri]]"
  endpoint-uri="[[raml.selectedMethod.relativeUri]]"
  query-model="[[qm]]"
  uri-model="[[um]]"></raml-request-url-editor>

<raml-request-parameteres-model
  query-parameters="[[raml.queryParameters]]"
  uri-parameters="[[raml.allUriParameters]]"
  query-model="{{qm}}"
  uri-model="{{um}}"></raml-request-parameteres-model>

<script>
var input = document.querySelector('raml-request-url-editor');
input.addEventListener('value-changed', function(e) {
  if (input.validate()) {
    var url = e.detail.value;
    console.log(url);
  }
});
</script>
```

### Example for pure JavaScript

```html
<raml-request-url-editor auto-validate required id="editor"></raml-request-url-editor>
<raml-request-parameteres-model id="model"></raml-request-parameteres-model>

<script>
var model = document.getElementById('model');
var editor = document.getElementById('url');

function passDataToView(e) {
  var type = e.type;
  type = type.replace('-changed', '');
  var property = type.replace(/-[a-z]/g, function(m) {
    return m[1].toUpperCase();
  });
  editor[property] = e.detail.value;
}

model.addEventListener('query-model-changed', passDataToView);
model.addEventListener('uri-model-changed', passDataToView);

editor.addEventListener('value-changed', function(e) {
  console.log(e.detail.value);
});

var raml = await getRamlSomehow();
var selected = raml.resources[0].methods[0];
model.queryParameters = selected.queryParameters;
model.uriParameters = selected.allUriParameters;
editor.baseUri = raml.baseUri;
editor.endpointUri = selected.relativeUri;
</script>
```

The element listens for `url-value-changed` event and updated the URL value
from event's detail object.

```javascript
document.dispatchEvent(new CustomEvent('url-value-changed', {
  bubbles: true,
  detail: {
    value: 'http://www.domain.com'
  }
}));
```

Firing this event updates the value to `http://www.domain.com`.

### Validation

This element implements `Polymer.IronValidatableBehavior`. You can call `validate()`
function to check if the form is valid.
An attribute `invalid` is set if the form is invalid. It can be used for
styling. The form is invalid if the value contains URL variables.


### Styling
`<raml-request-url-editor>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-request-url-editor` | Mixin applied to the element | `{}`
`--raml-request-url-editor-documentation` | Mixin applied to the documentation field. Not that this node has the `--arc-font-body1` mixin and also `markdown-styles` applies. | `{}`

Additionally use styles defined for the `paper-input` element.



### Events
| Name | Description | Params |
| --- | --- | --- |
| url-value-changed | Fired when the URL value change. Note that this event is fifed before validation occur and therefore the URL may be invalid. | value **String** - The URL. |

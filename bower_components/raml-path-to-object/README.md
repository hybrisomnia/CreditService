[![Build Status](https://travis-ci.org/advanced-rest-client/raml-path-to-object.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-path-to-object)  

# raml-path-to-object

The `<raml-path-to-object>` is a convenient way of getting information about
currently selected path.
Selected path is a result of `raml-path-selector` element.

The element will give additional information about the path:
- what type of data it represents (type, documentation, resource, method, summary)
- the object pointed by the path
- in case of resources / methods - parent resource (if available).

The element will assign information listed above to it's properties so you can
listen for changes directly on the element. However, the element will fire a
custom event when any property change. See events list for more details.

If the `auto` property is set then it will set a listeners for the
`raml-selected-path-changed` event and fire back one of the events supported by
this element as descrived below in the event section.

### Usage

```html
<raml-path-selector></raml-path-selector>
<raml-path-to-object auto></raml-path-to-object>

<script>
// You can construct path manually, but there's an element for that!
var selector = document.querySelector('raml-path-selector');
var object = document.querySelector('raml-path-to-object');

// Sets the (enhanced) RAML object on the element
// See https://elements.advancedrestclient.com/elements/raml-json-enhance
window.addEventListener('raml-json-enhance-ready', function(e) {
  selector.raml = e.detail.json;
  object.raml =  e.detail.json;
});

// Fired when the object for the path is computed.
// Though, it's a synchronous operation so the `selectedObject` can be read
// from the `object` element right after assigning the path value.
window.addEventListener('raml-selected-object-changed', function(e) {
  var selectedObject = e.detail.selectedObject;
  // Assign to request or documentation panel.
});

// This event's boubbles so it's safe to listen on `window` object.
window.addEventListener('raml-is-resource-changed', function(e) {
  var isResource = e.detail.state;
  // if true then selected object is a resource.
});
</script>
```

In the Polymer powered application:
```
<raml-path-selector raml="[[raml]]" selected-path="{{selectedPath}}"></raml-path-selector>
<raml-path-to-object
  selected-path="{{selectedPath}}"
  selected-object="{{selectedObject}}"
  is-method="{{isMethod}}"
  is-resource="{{isResource}}"
  is-documentation="{{isDocumentation}}"
  is-type="{{isType}}"
  is-summary="{{isSummary}}"></raml-path-to-object>
```



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-is-documentation-changed | Fired when selected object is a documentation description | state **Boolean** - `true` if selected object is a documentation and `false` otherwise |
| raml-is-method-changed | Fired when selected object is a method description | state **Boolean** - `true` if selected object is a method and `false` otherwise |
| raml-is-resource-changed | Fired when selected object is a resource description. | state **Boolean** - `true` if selected object is a resource and `false` otherwise |
| raml-is-summary-changed | Fired when selected object is a summary. | state **Boolean** - `true` if selected object is a summary and `false` otherwise |
| raml-is-type-changed | Fired when selected object is a type description. | state **Boolean** - `true` if selected object is a type and `false` otherwise |
| raml-selected-object-changed | Fired when the object from the path has been computed. | selectedObject **Object** - The object on which the path points to. |
| raml-selected-parent-changed | Fired when computed value for the parent of the selected object changed. This can change only for the resources and methods. | selectedParent **Boolean** - Computed parent object of the `selectedObject`. |

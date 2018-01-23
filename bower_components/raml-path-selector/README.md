[![Build Status](https://travis-ci.org/advanced-rest-client/raml-path-selector.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-path-selector)  

# raml-path-selector

Navigation element to select a path in the RAML structure. It displays RAML
API's structure in the tree view and allow to select a node and signal path
selected by the user.

The **selectedPath** is a property that is recognizable by most of the ARC
elements. It tells elements which view to render.
The path (or JSON path) is a string representing a path to the object in the
JSON structure. For example if selected view is to display a documentation for
the first method in the first resource in the RAML structure the path will
look like the following:
```
resources.0.methods.0
```

To better understand paths consider following RAML example
```yaml
#%RAML 1.0
title: Google Drive

types:
  type1: ...
  type2: ...
documentation:
  - title: Doc
    content: Documentation
/files:
  post: ...
  get: ...
  /{fileId}:
    path: ...
    get: ...
/apps:
  post: ...
  get: ...
```

##### The `summary` path
Represents a summary view of the RAML file. It's not a path in the JSON
structure (don't exists in RAML) but it's a virtual path to signal to display
the summary docs view.

##### The `resources` path

Path representing a resource documentation. Valid path requires presence of a
resource index in the RAML structure according to regexp:
```
(resource\.(\d+)-?)+
```
It can be recursive.

Examples:
- `resources.1` - second resource in the RAML structure, the `/apps` in example
- `resources.0.resources.0` - First sub-resource of the first resource, the `/files/{fileId}` in the example

##### The resources-methods path
Represents method documentation in the RAML. Valid path requires presence of a
mathod index in the resource structure according to regexp:
```
(resource\.(\d+)\.?)\.(method(\d+)\.?)
```
Examples:
- `resources.0.resources.0.methods.0` - First method in the first sub-resource of the first resource, the `PATCH /files/{fileId}` in the example
- `resources.1.methods.1` - Second method of the second resource, the `GET /apps` in the example


##### The `types` path
Represents a type documentation. Valid path requires presence of a
type index in the RAML structure according to regexp:
```
type\.(\d+)
```
Examples:
- `types.0` - First type in RAML structure, the `type1` in the example
- `types.1` - Second type in RAML structure, the `type2` in the example


##### The `documentation` path
Links to the documentation object in the RAML structure
```
documentation\.(\d+)
```
Examples:
- `documentation.0` - First element in the documentation list, the `Doc` documentation in the example.

See demo for working example.

## Usage
```html
<raml-path-selector first-level-opened resources-opened documentation-opened></raml-path-selector>
<raml-path-to-object></raml-path-to-object>

<script>
var selector = document.querySelector('raml-path-selector');
// This element is meant to work together with path selector.
var object = document.querySelector('raml-path-to-object');

// Sets the (enhanced) RAML object on the element
// See https://elements.advancedrestclient.com/elements/raml-json-enhance
window.addEventListener('raml-json-enhance-ready', function(e) {
  selector.raml = e.detail.json;
  object.raml =  e.detail.json;
});

// Fired when path selection changes
selector.addEventListener('selected-path-changed', function(e) {
  object.selectedPath = e.detail.value;
});

// Fired when the object for the path is computed.
// Though, it's a synchronous operation so the `selectedObject` can be read
// from the `object` element right after assigning the path value.
window.addEventListener('raml-selected-object-changed', function(e) {
  var selectedObject = e.detail.selectedObject;
  // Assign to request or documentation panel.
});
</script>
```

The tree items are collapsed by default. Use `first-level-opened`, `resources-opened`,
`documentation-opened` and `types-opened` attributes to control this behavior.

```
<raml-path-selector first-level-opened resources-opened documentation-opened></raml-path-selector>
```


## Responsive view
The element support `narrow` property to render additional controls for small screen.
In narrow layout the user can walk through the structure using separate screen for
each resource. In regular view only tree view is available. See demo for more
details.

## Styling
`<raml-path-selector>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-path-selector` | Mixin applied to the element | `{}`
`--raml-path-selector-background-color` | Background color of the element | `--primary-background-color`
`--raml-path-selector-color` | Font color applied to this element | `--primary-text-color`

See other elemets documentation more styling options.

# raml-structure-tree

The `<raml-structure-tree>` renders a list view for the `<raml-path-selector>`.
See docs for `<raml-path-selector>` for element's documentation.

## Styling

Custom property | Description | Default
----------------|-------------|----------
`--raml-structure-tree` | Mixin applied to this element | `{}`
`--arc-font-subhead` | Theme element, mixin applied to the tree section headers. The color will be overritten by the `--raml-path-selector-header-color` variable.  | ``
`--raml-path-selector-header-color` | Color of the section headers | `rgba(0, 0, 0, 0.54)`
`--raml-path-selector-headers` | Mixin applied to the tree section headers. This will ovveride all other values. | `{}`
`--raml-path-selector-toggle-icon-color` | Color of the toggle icon. | `rgba(0, 0, 0, 0.54)`
`--raml-path-selector-toggle-icon-hover-color` | Color of the toggle icon when hovered. | `rgba(0, 0, 0, 0.78)`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-selected-path-changed | Fired when the path change. | path **String** - The selected path |
# raml-resource-tree-item

The `<raml-resource-tree-item>` is an element that displays a resource
part of the API structure tree. It contains the resource, it's methods and
sub-resources.

This element is intended to work with `<raml-path-selector>`.

Custom property | Description | Default
----------------|-------------|----------
`--raml-docs-tree-item-element` | Mixin applied to the element | `{}`
`--raml-docs-tree-item-element-background` | Background color of the element | `transparent`
`--raml-docs-tree-children-margin` | Resource's children left margin.  | `24px`
`--raml-docs-tree-item` | Mixin applied to each tree item  | `{}`
`--raml-docs-tree-item-background` | Background color of the tree item.  | `transparent`
`--raml-docs-tree-item-hover-selector-color` | Selection color of hovered tree item  | `#F5F5F5`
`--raml-docs-tree-item-selected-selector-color` | Selection color of the selected item | `rgba(3, 169, 244, 0.24)`
`--raml-docs-tree-item-selected-color` | Color of the selected item | `#000`
`--raml-docs-tree-outline` | An outline of focused item | `none`
`--method-display-background-color` | Background color of the method label box | `rgba(128, 128, 128, 0.12)`
`--method-display-color` | Font color of the method label box | `rgb(128, 128, 128)`
`--method-display-get-background-color` | Background color of the GET method label box | `rgba(0, 128, 0, 0.12)`
`--method-display-get-color` | Font color of the GET method label box | `rgb(0, 128, 0)`
`--method-display-post-background-color` | Background color of the POST method label box | `rgba(33, 150, 243, 0.12)`
`--method-display-post-color` | Font color of the POST method label box | `rgb(33, 150, 243)`
`--method-display-put-background-color` | Background color of the PUT method label box | `rgba(255, 165, 0, 0.12)`
`--method-display-put-color` | Font color of the PUT method label box | `rgb(255, 165, 0)`
`--method-display-delete-background-color` | Background color of the DELETE method label box | `rgba(244, 67, 54, 0.12)`
`--method-display-delete-color` | Font color of the DELETE method label box | `rgb(244, 67, 54)`
`--method-display-patch-background-color` | Background color of the PATCH method label box | `rgba(156, 39, 176, 0.12)`
`--method-display-patch-color` | Font color of the PATCH method label box | `rgb(156, 39, 176)`

# raml-type-tree-item

The `<raml-type-tree-item>` is an element that is a list item in types listing.

This element is intended to work with `<raml-path-selector>`.

Custom property | Description | Default
----------------|-------------|----------
`--raml-docs-tree-item-element` | Mixin applied to the element | `{}`
`--raml-docs-tree-item-element-background` | Background color of the element | `transparent`
`--raml-docs-tree-item` | Mixin applied to each tree item  | `{}`
`--raml-docs-tree-item-background` | Background color of the tree item.  | `transparent`
`--raml-docs-tree-item-hover-selector-color` | Selection color of hovered tree item  | `#F5F5F5`
`--raml-docs-tree-item-selected-selector-color` | Selection color of the selected item | `rgba(3, 169, 244, 0.24)`
`--raml-docs-tree-outline` | An outline of focused item | `none`

# raml-documentation-tree-item

The `<raml-documentation-tree-item>` is an element that displays a list of
documentation part of the API structure tree.
It contains titles of the documentation array.

This element is intended to work with `<raml-path-selector>`.

Custom property | Description | Default
----------------|-------------|----------
`--raml-docs-tree-item-element` | Mixin applied to the element | `{}`
`--raml-docs-tree-item-element-background` | Background color of the element | `transparent`
`--raml-docs-tree-item` | Mixin applied to each tree item  | `{}`
`--raml-docs-tree-item-background` | Background color of the tree item.  | `transparent`
`--raml-docs-tree-item-hover-selector-color` | Selection color of hovered tree item  | `#F5F5F5`
`--raml-docs-tree-item-selected-selector-color` | Selection color of the selected item | `rgba(3, 169, 244, 0.24)`
`--raml-docs-tree-outline` | An outline of focused item | `none`

# path-selector-types

The `path-selector-types` is a full screen display for the types.

See demo (with narrow layout enabled) for an example.

## Styling

Custom property | Description | Default
----------------|-------------|----------
`--raml-path-selector-back-icon-color` | Color of the "back" icon | `rgba(0, 0, 0, 0.54)`
`--raml-path-selector-back-icon-color-hover` | Color of the "back" icon when hovered | `rgba(0, 0, 0, 0.87)`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-path-selector-nav-back | Fired when the user requested "back" in the tree structure. | __none__ |
# path-selector-documentation

The `path-selector-documentation` is a full screen display for the documentation list.

See demo (with narrow layout enabled) for an example.

## Styling

Custom property | Description | Default
----------------|-------------|----------
`--raml-path-selector-back-icon-color` | Color of the "back" icon | `rgba(0, 0, 0, 0.54)`
`--raml-path-selector-back-icon-color-hover` | Color of the "back" icon when hovered | `rgba(0, 0, 0, 0.87)`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-path-selector-nav-back | Fired when the user requested "back" in the tree structure. | __none__ |
# path-selector-resource

The `path-selector-resource` is a full screen display for the resources selector.

See demo (with narrow layout enabled) for an example.

## Styling

Custom property | Description | Default
----------------|-------------|----------
`--raml-path-selector-back-icon-color` | Color of the "back" icon | `rgba(0, 0, 0, 0.54)`
`--raml-path-selector-back-icon-color-hover` | Color of the "back" icon when hovered | `rgba(0, 0, 0, 0.87)`



### Events
| Name | Description | Params |
| --- | --- | --- |
| raml-path-selector-nav-back | Fired when the user requested "back" in the tree structure. | __none__ |

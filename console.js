/**
 * 
 */

const builder = require('api-console-builder');
 
builder({
  dest: 'build',
  raml: 'api.raml',
  useJson: true
})
.then(() => console.log('Build complete'))
.catch((cause) => console.log('Build error', cause.message));
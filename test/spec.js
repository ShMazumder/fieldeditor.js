const FieldEditor = require("..");
const assert = require("assert");

const fieldEditor = new FieldEditor.FieldEditor();

// console.log(FieldEditor.FieldEditor);

assert.strictEqual(fieldEditor.health("abc"), "abc");

console.log(`\u001B[32m✓\u001B[39m Tests passed`);

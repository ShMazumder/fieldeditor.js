const FieldEditor = require("..");
const assert = require("assert");

const fieldEditor = new FieldEditor.FieldEditor();

// console.log(FieldEditor.FieldEditor);

assert.strictEqual(fieldEditor.add("abc"), true);

assert.strictEqual(fieldEditor.health("abc"), "abc");

assert.strictEqual(fieldEditor.update("abc", "pqr"), true);

assert.strictEqual(fieldEditor.health("pqr"), "pqr");

assert.strictEqual(fieldEditor.show(), true);


console.log(`\u001B[32m✓\u001B[39m Tests passed`);

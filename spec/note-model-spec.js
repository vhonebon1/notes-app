function testNoteTakeText() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.text === "Javascript is sexy!");
};

testNoteTakeText();

function testGetText() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.getText === "Javascript is sexy!");
};

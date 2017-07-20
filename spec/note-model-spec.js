function testNoteAttributes() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.text === "Javascript is sexy!");
  assert.isTrue(note.id === null);
};

testNoteAttributes();

function testGetText() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.getText() === "Javascript is sexy!");
};

testGetText();

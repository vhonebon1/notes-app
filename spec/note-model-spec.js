function testNoteAttributes() {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.text === "Javascript is sexy!");
  assert.isTrue(note.id === null);
};

testNoteAttributes();

function testGetText() {
  var note = new Note("Javascript is the best!");
  assert.isTrue(note.getText() === "Javascript is the best!");
};

testGetText();

function testGetId() {
  var note = new Note("Javascript is awesome!");
  var notelist = new NoteList()
  notelist.pushToNotes(note)
  assert.isTrue(notelist.notes[0].id === 0);
};

testGetId();

function testGetAbbreviatedText() {
  var note = new Note("Javascript is so fun!");
  assert.isTrue(note.getAbbreviatedText() === "Javascript is so fun");
};

testGetAbbreviatedText();

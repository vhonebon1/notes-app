function testNoteList() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.notes));
};

testNoteList();

function testGetNotes() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getNotes().length === 0);
};

testGetNotes();

function testPushToNotes() {
  var note = new Note("Too sexy to code");
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  assert.isTrue(noteList.notes.length === 1);
};

testPushToNotes();

function testGetTexts() {
  var note = new Note("Too sexy to code");
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  assert.isTrue(noteList.getTexts().toString() === "Too sexy to code")
};

testGetTexts();

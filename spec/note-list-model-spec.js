var note = new Note("Too sexy to code");
var noteList = new NoteList();
noteList.pushToNoteModels(note);


function testNoteList(){
  assert.isTrue(Array.isArray(noteList.noteModels));
};

testNoteList();

function testNoteInArray(){
  assert.isTrue(noteList.noteModels.length === 1);
};

testNoteInArray();

function testGetNotes() {
  assert.isTrue(noteList.getNotes.length === 0);
};

testGetNotes();


function testGetTexts() {
  assert.isTrue(noteList.getTexts().toString() === "Too sexy to code")
};

testGetTexts();

var note = new Note("Too sexy to code");
var noteList = new NoteList();


function testNoteList(){
  assert.isTrue(Array.isArray(noteList.noteModels));
};

testNoteList();

function testNoteInArray(){
  noteList.pushToNoteModels(note);
  assert.isTrue(noteList.noteModels.length === 1);
};

testNoteInArray();

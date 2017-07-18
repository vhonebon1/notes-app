function testNoteList(){
  var noteList = new NoteList();
  console.log(noteList);
  console.log(noteList.noteModels);
  // assert.isTrue(noteList.noteModels.length === 0);
  assert.isTrue(Array.isArray(noteList.noteModels));
};

testNoteList();

function testNoteInArray(){
  var noteList = new NoteList();
  var note = new Note("Too sexy to code");
  noteList.pushToNoteModels(note);
  console.log(noteList.noteModels);
  assert.isTrue(noteList.noteModels.length === 1);
};

testNoteInArray();

function testNoteListView() {
  var note = new Note("Note message");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList == noteList)
};

testNoteListView();

function testoHTML() {
  var note = new Note("Note message");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.pushToNoteModels(note);
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Note message</div></li><li><div></ul>")
}

testoHTML();

function testoMultipleHTML() {
  var note = new Note("Note message");
  var note2 = new Note("Please fucking work");
  var noteList = new NoteList();
  noteList.pushToNoteModels(note);
  noteList.pushToNoteModels(note2);
  var noteListView = new NoteListView(noteList);
  console.log(noteListView.toHtml())
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Note message</div></li><li><div><li><div>Please fucking work</div></li><li><div></ul>")
}

testoMultipleHTML();

function testtoHtmlNoNoteModels() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.toHtml() === '<ul></ul>')
}

testtoHtmlNoNoteModels();

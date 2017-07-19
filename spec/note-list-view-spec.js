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
  var note = new Note("Please fucking work");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList3.pushToNoteModels(note);
  noteList3.pushToNoteModels(note);
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Note message</div></li><li><div><li><div>Please fucking work</div></li><li><div></ul>")
}

testoHTML();

function testtoHtmlNoNoteModels() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.toHtml() === '<ul></ul>')
}

testtoHtmlNoNoteModels();

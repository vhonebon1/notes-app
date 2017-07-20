function testNoteListView() {
  var note = new Note("Note message");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList == noteList)
};

testNoteListView();

function testoHTML() {
  var note = new Note("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.pushToNotes(note);
  assert.isEquals(noteListView.toHtml(), "<ul><li><div id='0'>Lorem ipsum dolor si</div></li></ul>")
}

testoHTML();

function testoMultipleHTML() {
  var note = new Note("Note message");
  var note2 = new Note("Please fucking work");
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  noteList.pushToNotes(note2);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.toHtml() === "<ul><li><div id='0'>Note message</div></li><li><div id='1'>Please fucking work</div></li></ul>")
}

testoMultipleHTML();

function testtoHtmlNoNoteModels() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.toHtml() == null)
}

testtoHtmlNoNoteModels();

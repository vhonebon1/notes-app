function testNoteListView() {
  var note = new Note("Note message");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList == noteList)
};

testNoteListView();

function testConvertToHTML() {
  var note = new Note("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.pushToNotes(note);
  assert.isEquals(noteListView.convertToHtml(), "<ul><li><div id='0'>Lorem ipsum dolor si</div></li></ul>")
}

testConvertToHTML();

function testoMultipleHTML() {
  var note = new Note("Note message");
  var note2 = new Note("Please work");
  var noteList = new NoteList();
  noteList.pushToNotes(note);
  noteList.pushToNotes(note2);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.convertToHtml() === "<ul><li><div id='0'>Note message</div></li><li><div id='1'>Please work</div></li></ul>")
}

testoMultipleHTML();

function testtoHtmlNoNoteModels() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.convertToHtml() == null)
}

testtoHtmlNoNoteModels();


var note = new Note("Note message");
var noteList = new NoteList();
var noteListView = new NoteListView(noteList);

function testNoteListView() {
  assert.isTrue(noteListView.noteList === noteList)
};


testNoteListView();

function testoHTML() {
  noteList.pushToNoteModels(note);
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Note message</div></li><li><div></ul>")
}

testoHTML();

function testtoHtmlNoNoteModels() {
  var noteList2 = new NoteList();
  var noteListView2 = new NoteListView(noteList2);
  assert.isTrue(noteListView2.toHtml() === '<ul></ul>')
}

testtoHtmlNoNoteModels();

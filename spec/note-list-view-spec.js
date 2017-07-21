(function() {
  var note = new Note("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  
  function testNoteListView() {
    assert.isTrue(noteListView.noteList == noteList)
  };
  
  testNoteListView();
  
  function testConvertToHTML() {
    noteList.pushToNotes(note);
    assert.isEquals(noteListView.convertToHtml(), "<ul><li><div id='0'>Lorem ipsum dolor si</div></li></ul>")
  }
  
  testConvertToHTML();
  
  function testoMultipleHTML() {
    var note2 = new Note("Please work");
    noteList.pushToNotes(note2);
    assert.isTrue(noteListView.convertToHtml() === "<ul><li><div id='0'>Lorem ipsum dolor si</div></li><li><div id='1'>Please work</div></li></ul>")
  }
  
  testoMultipleHTML();
  
  function testtoHtmlNoNoteModels() {
    var noteList2 = new NoteList();
    var noteListView2 = new NoteListView(noteList2);
    assert.isTrue(noteListView2.convertToHtml() == null)
  }
  
  testtoHtmlNoNoteModels();
})();

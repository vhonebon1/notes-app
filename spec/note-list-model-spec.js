(function() {
  var noteList = new NoteList();
  var note = new Note("Too sexy to code");
  
  
  function testNoteList() {
    assert.isTrue(Array.isArray(noteList.notes));
  };
  
  testNoteList();
  
  function testGetNotes() {
    assert.isTrue(noteList.getNotes().length === 0);
  };
  
  testGetNotes();
  
  function testPushToNotes() {
    noteList.pushToNotes(note);
    assert.isTrue(noteList.notes.length === 1);
    assert.isTrue(noteList.notes[0].id === 0);
  };
  
  testPushToNotes();
  
  function testGetTexts() {
    assert.isTrue(noteList.getTexts().toString() === "Too sexy to code")
  };
  
  testGetTexts();
})();

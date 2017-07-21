(function() {
  var note = new Note("Javascript is sexy and fun!");
  
  
  function testNoteAttributes() {
    assert.isTrue(note.text === "Javascript is sexy and fun!");
    assert.isTrue(note.id === null);
  };
  
  testNoteAttributes();
  
  function testGetText() {
    assert.isTrue(note.getText() === "Javascript is sexy and fun!");
  };
  
  testGetText();
  
  function testGetId() {
    var notelist = new NoteList()
    notelist.pushToNotes(note)
    assert.isTrue(notelist.notes[0].id === 0);
  };
  
  testGetId();
  
  function testGetAbbreviatedText() {
    assert.isTrue(note.getAbbreviatedText() === "Javascript is sexy a");
  };
  
  testGetAbbreviatedText();
})();

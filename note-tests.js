function testNoteTakeText(){
  var note = new Note();
  assert.isTrue(note.text === 'Javascript is sexy!');
};

testNoteTakeText();

(function(exports) {
  function testNoteList(){
    var notelist = new Notelist();
    if (notelist.noteModels === Array) {
      throw new Error("Not an empty array");
    };
  };

  testNoteList();
})(this);

(function(exports) {
  function testNoteInArray(){
    var notelist = new Notelist();
    var note = new Note();
    note = "Too sexy to code"
    notelist.pushToNoteModels(note);
    if (notelist.notemodels === ["Too sexy to code"]) {
      throw new Error("No new notes in here");
    };
  };

  testNoteInArray();
})(this);

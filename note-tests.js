  function testNoteTakeText(){
    var note = new Note();
    assert.isTrue(note.text === 'Javascript is sexy!');
  };

  testNoteTakeText();

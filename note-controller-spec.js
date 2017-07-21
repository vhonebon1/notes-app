(function() {
  var note = new Note("A new note")
  var notelist = new NoteList();
  notelist.pushToNotes(note);
  var controller = new NoteController(notelist);

  function testControllerAttributes() {
    assert.isNotNull(controller.noteList)
    assert.isNotNull(controller.noteListView)
};

testControllerAttributes();


function testAddToPage() {

  var dummyElement = document.createElement("div");
  dummyElement.innerHTML = "the dummy text"
  controller.addNoteToPage(dummyElement);
  assert.isEquals(dummyElement.innerHTML, "<ul><li><div id=\"0\">A new note</div></li></ul>");
};

testAddToPage();
})();

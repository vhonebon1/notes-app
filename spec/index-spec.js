(function() {
  var note = new Note("Testing the showNote function");
  var notelist = new NoteList();
  notelist.pushToNotes(note);
  var controller = new NoteController(notelist)
  
  var dummyElement = document.createElement("div")
  dummyElement.innerHTML = "To be replaced"
  controller.showNote(0, dummyElement);
  assert.isEquals(dummyElement.innerHTML, "<div>Testing the showNote function</div>")
})();

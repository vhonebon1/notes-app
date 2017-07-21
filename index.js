window.onload = function() {
  var element = document.getElementById("app")
  var note = new Note("test note")
  var notelist = new NoteList()
  notelist.pushToNotes(note);
  var controller = new NoteController(notelist)
  controller.addNoteToPage(element)
}

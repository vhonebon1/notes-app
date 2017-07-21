window.onload = function() {
  var element = document.getElementById("app")
  var note = new Note("test note")
  var notelist = new NoteList()
  notelist.pushToNotes(note);
  var controller = new NoteController(notelist)
  controller.addNoteToPage(element)

  makeURLChangeShowIndividualNote()

  function makeURLChangeShowIndividualNote() {
    window.addEventListener("hashchange", showIndividualNote);
  }

  function showIndividualNote() {
    showNote(getNoteIdFromUrl(window.location));
  }

  function getNoteIdFromUrl(location) {
    return location.hash.split("#")[1].split("/")[1]
  }

  function showNote(id) {
    var singleView = new SingleView(notelist.notes[id])
    element.innerHTML = singleView.getText()
  }
}

window.onload = function() {
  var note = new Note("test note")
  var notelist = new NoteList()
  notelist.pushToNotes(note);
  var controller = new NoteController(notelist)
  
  var element = document.getElementById("app")
  controller.addNoteToPage(element)
  
  makeURLChangeShowIndividualNote()
  
  function makeURLChangeShowIndividualNote() {
    window.addEventListener("hashchange", showIndividualNote);
  }
  
  function showIndividualNote() {
    controller.showNote(getNoteIdFromUrl(window.location), element);
  }
  
  function getNoteIdFromUrl(location) {
    return location.hash.split("#")[1].split("/")[1]
  }
  
}

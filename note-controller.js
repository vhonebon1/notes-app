(function(exports) {
  function NoteController() {
    this.noteList = new NoteList()
    this.noteListView = null
  };

  NoteController.prototype.setNoteList = function() {
    this.noteList.pushToNotes(new Note("favourite drink"));
  };

  NoteController.prototype.getNoteList = function() {
    return this.noteList;
  };

  NoteController.prototype.setNoteListView = function() {
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.getNLVHtml = function() {
    var string = this.noteListView.toHtml();
    this.addNoteToPage(string);
  };

  NoteController.prototype.addNoteToPage = function(newText) {
    document.getElementById("app").innerHTML = newText;
  };

  exports.NoteController = NoteController;
})(this);

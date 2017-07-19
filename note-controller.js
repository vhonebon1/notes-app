(function(exports) {
  function NoteController() {
    this.noteList = new NoteList()
    this.noteListView = null
  };

  NoteController.prototype.setNoteList = function() {
    this.noteList.pushToNoteModels(new Note("favourite drink"));
  };

  NoteController.prototype.getNoteList = function() {
    return this.noteList;
  };

  NoteController.prototype.setNoteListView = function() {
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.getNLVHtml = function() {
    this.noteListView.toHtml();
    function addNoteToPage(string){}
  };

  NoteController.prototype.addNoteToPage = function(html) {
    document.getElementById("app").innerHTML = html
  };

  exports.NoteController = NoteController;
})(this);

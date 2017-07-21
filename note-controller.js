(function(exports) {
  function NoteController(notelist) {
    this.noteList = notelist
    this.noteListView = new NoteListView(this.noteList)
  };

  // NoteController.prototype.setNoteList = function() {
  //   this.noteList.pushToNotes(new Note("favourite drink"));
  // };

  // NoteController.prototype.getNoteList = function() {
  //   return this.noteList;
  // };

  // NoteController.prototype.setNoteListView = function() {
  //   this.noteListView = new NoteListView(this.noteList);
  // };

  // NoteController.prototype.getNLVHtml = function() {
  //   var string = this.noteListView.convertToHtml();
  //   this.addNoteToPage(string);
  // };

  NoteController.prototype.addNoteToPage = function(element) {
    element.innerHTML = this.noteListView.convertToHtml();;
  };

  exports.NoteController = NoteController;
})(this);

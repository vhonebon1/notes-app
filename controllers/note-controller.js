(function(exports) {
  function NoteController(notelist) {
    this.noteList = notelist
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.addNoteToPage = function(element) {
    element.innerHTML = this.noteListView.convertToHtml();;
  };

  exports.NoteController = NoteController;
})(this);

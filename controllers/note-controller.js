(function(exports) {
  function NoteController(notelist) {
    this.noteList = notelist;
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.addNoteToPage = function(element) {
    element.innerHTML = this.noteListView.convertToHtml();
  };

  NoteController.prototype.showNote = function(id, element) {
    var singleView = new SingleView(this.noteList.notes[id]);
    element.innerHTML = singleView.getText();
  }
  
  exports.NoteController = NoteController;
})(this);

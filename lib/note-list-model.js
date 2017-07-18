(function(exports){
  function NoteList(){
    this.noteModels = [];
  };

  NoteList.prototype.pushToNoteModels = function(note) {
    this.noteModels.push(note);
  };

  NoteList.prototype.printNotes = function () {
    return this.noteModels;
  };

  exports.NoteList = NoteList;
})(this);

(function(exports){
  function NoteList(){
    this.noteModels = [];
  };

  NoteList.prototype.pushToNoteModels = function(note) {
    this.noteModels.push(note);
  };

  NoteList.prototype.getNotes = function() {
    return this.noteModels;
  };

  NoteList.prototype.getTexts = function() {
    var noteTexts = []
    this.noteModels.forEach(function(model) {
      noteTexts.push(model.text)
    });
    return noteTexts
  };

  exports.NoteList = NoteList;
})(this);

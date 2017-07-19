(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.pushToNotes = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.getTexts = function() {
    return this.notes.map(function(note) {
      return note.text
    }).join("");
  };

  exports.NoteList = NoteList;
})(this);

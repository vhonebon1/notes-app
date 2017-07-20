(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.pushToNotes = function(note) {
    noteIndex = this.notes.length;
    note.id = noteIndex;
    this.notes.push(note);
  };

  NoteList.prototype.getTexts = function() {
    return this.notes.map(function(note) {
      return note.text
    }).join("");
  };

  NoteList.prototype.getNoteTexts = function() {
    return this.notes.map(function(note) {
      return note.text
    });
  };

  exports.NoteList = NoteList;
})(this);

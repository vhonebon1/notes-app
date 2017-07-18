(function(exports){
  function Notelist(){
    this.noteModels = [];
  };

  Notelist.prototype.pushToNoteModels = function(note) {
    this.noteModels.push(note);
  };

  Notelist.prototype.printNotes = function () {
    return this.noteModels;
  };

  exports.Notelist = Notelist;
})(this);

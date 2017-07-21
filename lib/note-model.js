(function(exports) {
  function Note(text){
    this.text = text;
    this.id = null
  };

  Note.prototype.getText = function() {
    return this.text
  }

  Note.prototype.getId = function() {
    return this.id
  }

  Note.prototype.getAbbreviatedText = function() {
    return this.getText().substring(0,20)
  }

  exports.Note = Note;
})(this);

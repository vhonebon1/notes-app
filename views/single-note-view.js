(function(exports) {
  function SingleView(note) {
    this.note = note
  }
  
  SingleView.prototype.getText = function() {
    var noteText = this.note.text
    return this._addTags(noteText);
  }
  
  SingleView.prototype._addTags = function (string) {
    return "<div>" + string + "</div>"
  };
  
  exports.SingleView = SingleView;
})(this);

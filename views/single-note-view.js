(function(exports) {
  function SingleView(note) {
    this.note = note
  }

  SingleView.prototype.getText = function() {
    var noteText = this.note.text
    return this.addTags(noteText);
  }

  SingleView.prototype.addTags = function (string) {
    return "<div>" + string + "</div>"
  };

exports.SingleView = SingleView;
})(this);

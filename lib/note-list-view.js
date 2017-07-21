(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

NoteListView.prototype.convertToHtml = function() {
  if (this.noteList.getNotes().length >= 1) {
    var result = this._addInnerHtmlTags();
    return this._addClosingHtmlTags(result);
  };
}

NoteListView.prototype._addInnerHtmlTags = function() {
  var notesHtml = []
  this.noteList.getNotes().map(function(note){
    notesHtml.push("<li><div id='" + note.getId() + "'>"+ note.getAbbreviatedText() + "</div></li>")
  });
  return notesHtml;
}

NoteListView.prototype._addClosingHtmlTags = function(htmlString) {
  return "<ul>" + htmlString.join("") + "</ul>"
}

  exports.NoteListView = NoteListView;
})(this);

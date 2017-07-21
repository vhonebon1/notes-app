(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };
  
  NoteListView.prototype.convertToHtml = function() {
    if (this.noteList.getNotes().length >= 1) {
      var result = this._addInnerHtmlTags();
      return _addClosingHtmlTags(result);
    };
  }
  
  NoteListView.prototype._addInnerHtmlTags = function() {
    var notesHtml = []
    this.noteList.getNotes().map(function(note){
      notesHtml.push(_addTagsForOneNote(note))
    });
    return notesHtml;
  }
  
  function _addTagsForOneNote(note) {
    return "<li><div id='" + note.getId() + "'>"+ note.getAbbreviatedText() + "</div></li>"
  };
  
  function _addClosingHtmlTags(htmlString) {
    return "<ul>" + htmlString.join("") + "</ul>"
  }
  
  exports.NoteListView = NoteListView;
})(this);

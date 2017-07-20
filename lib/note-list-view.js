(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

NoteListView.prototype.toHtml = function() {
  if (this.noteList.getNotes().length >= 1) {
    var notesHtml = []
    this.noteList.notes.forEach(function(note){
      notesHtml.push("<li><div>" + note.text.substring(0,20) + "</div></li>")
    });
    return "<ul>" + notesHtml.join("") + "</ul>"
  };
  function getHtml(notesHtml){};
};

NoteListView.prototype.getHtml = function(html) {
  return "<ul>" + html.join("") + "</ul>"
};

exports.NoteListView = NoteListView;
})(this);

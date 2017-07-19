(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

NoteListView.prototype.toHtml = function() {
  if (noteList.noteModels.length >= 1) {
    var notesHtml = []
    this.noteList.noteModels.forEach(function(note){
      notesHtml.push("<li><div>" + note.text + "</div></li><li><div>")
    });
    return "<ul>" + notesHtml.join() + "</ul>"
  };
  function getHtml(notesHtml){};
};


NoteListView.prototype.getHtml = function(html) {
  return "<ul>" + html.join() + "</ul>"
};

  exports.NoteListView = NoteListView;
})(this);

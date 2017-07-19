(function(exports) {
  function NoteController() {
    this.noteList = new NoteList()
    this.noteListView = null
  };

  NoteController.prototype.setNotelist = function () {
    this.noteList.pushToNoteModels(new Note("favourite drink"));
  };

  NoteController.prototype.getNotelist = function () {
    return this.noteList;
  };

  NoteController.prototype.makeNotelistView = function () {
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.getNLVHtml = function () {
    var string = this.noteListView.toHtml();
    console.log(string)
    function addNoteToPage(string){}
  };

  NoteController.prototype.addNoteToPage = function(html) {
    document.getElementById("app").innerHTML = html
  };

  exports.NoteController = NoteController;
})(this);

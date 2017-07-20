function testControllerAttributes() {

  var controller = new NoteController;

  assert.isNotNull(controller.noteList)
  assert.isTrue(controller.noteListView === null)
};

testControllerAttributes();


function testAddToPage() {

  var dummyElement = document.createElement("div");
  var controller = new NoteController("fakeId");
  document.getElementById = controller.id_element

  console.log(document.getElementById)
  controller.setNoteList();
  controller.setNoteListView();
  controller.getNLVHtml();

  assert.isEquals(document.getElementById("fakeId").innerHTML, "<ul><li><div>favourite drink</div></li></ul>")
};

testAddToPage();

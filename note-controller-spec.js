function testControllerAttributes() {

  var controller = new NoteController;

  assert.isNotNull(controller.noteList)
  assert.isTrue(controller.noteListView === null)
};

testControllerAttributes();


// function testAddToPage() {
//
//   var dummyElement = document.createElement("div");
//   var controller = new NoteController("fakeId");
//   dummyElement.id = controller.id_element
//   console.log(dummyElement)
//   console.log(document)
//   document = "<html><head></head><body></body></html>"
//   body = "<body></body>"
//   document.appendChild(dummyElement)
//
//   controller.setNoteList();
//   controller.setNoteListView();
//   controller.getNLVHtml();
//
//   assert.isEquals(document.getElementById("fakeId").innerHTML, "<ul><li><div>favourite drink</div></li></ul>")
// };
//
// testAddToPage();

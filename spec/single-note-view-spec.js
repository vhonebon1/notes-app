(function() {
  
  function testSingleView(note) {
    
    var view = new SingleView(note);
    
    assert.isNotNull(view.note)
  }
  
  testSingleView();
  
  function testGetsText() {
    
    var note = new Note("favourite food")
    var view = new SingleView(note);
    
    assert.isTrue(view.getText() === "<div>favourite food</div>" )
  }
  
  testGetsText();
})();

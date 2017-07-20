var assert = {
  isEquals: function(first, second) {
    if (!(first === second)) {
      throw new Error ("Test failed: " + first + " is not equal to " + second)
    } else {
      console.log("Test passed")
    }
  },

  isNotNull: function(element) {
    if (element === null) {
      throw new Error ("Test failed: " + element + " is null")
    } else {
      console.log("Test passed")
    }
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed")
    }
  }
};

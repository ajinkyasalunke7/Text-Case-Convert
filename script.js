function convertToLowerCaseAndSet() {
    var element = document.getElementById("text");
    if (element) {
        var inputText = element.value;
        var lowercasedText = inputText.toLowerCase();
        element.value = lowercasedText;
    } else {
        console.log("Element with id 'text' not found.");
    }
}

function convertToUpperCaseAndSet() {
    var element = document.getElementById("text");
    if (element) {
        var inputText = element.value;
        var uppercasedText = inputText.toUpperCase();
        element.value = uppercasedText;
    } else {
        console.log("Element with id 'text' not found.");
    }
}


function copyTextToClipboard() {
    var element = document.getElementById("text");
    if (element) {
        var inputText = element.value;

        navigator.clipboard.writeText(inputText)
            .then(function () {
                alert(" Text Copied ");

            })
            .catch(function (error) {
                alert("Error copying text to clipboard: ", error);
            });
    } else {
        alert("Element with id 'text' not found.");
    }
}

function convertToCapitalizedCaseAndSet() {
    var element = document.getElementById("text");
    if (element) {
      var inputText = element.value;
  
      var words = inputText.split(" ");
      var capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      var capitalizedSentence = capitalizedWords.join(" ");
  
      element.value = capitalizedSentence;
    } else {
      console.log("Element with id 'text' not found.");
    }
  }


  function convertToAlternatingCaseAndSet() {
    var element = document.getElementById("text");
    if (element) {
      var inputText = element.value;
  
      var alternatingCase = "";
      for (var i = 0; i < inputText.length; i++) {
        if (i % 2 === 0) {
          alternatingCase += inputText.charAt(i).toUpperCase();
        } else {
          alternatingCase += inputText.charAt(i).toLowerCase();
        }
      }
  
      element.value = alternatingCase;
    } else {
      console.log("Element with id 'text' not found.");
    }
  }

  

  function convertToTitleCaseAndSet() {
    var element = document.getElementById("text");
    if (element) {
      var inputText = element.value;
  
      // Define exceptions to lowercase words
      var exceptions = ["or", "a", "an", "the", "and", "in", "with", "to", "of", "from"];
  
      var words = inputText.toLowerCase().split(" ");
      var titleCaseWords = words.map(function(word, index) {
        if (exceptions.includes(word) && index !== 0) {
          return word;
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      var titleCaseSentence = titleCaseWords.join(" ");
  
      element.value = titleCaseSentence;
    } else {
      console.log("Element with id 'text' not found.");
    }
  }


  

  
//   function convertToInverseCaseAndSet() {
//     var element = document.getElementById("text");
//     if (element) {
//       var inputText = element.value;
  
//       var words = inputText.split(" ");
//       var inverseCaseWords = words.map(function(word) {
//         if (word.toLowerCase() === "example" || word.toLowerCase() === "some") {
//           return word; // Exclude specific words from inversion
//         } else {
//           var invertedWord = "";
//           for (var i = 0; i < word.length; i++) {
//             var char = word.charAt(i);
//             if (char === char.toUpperCase()) {
//               invertedWord += char.toLowerCase();
//             } else {
//               invertedWord += char.toUpperCase();
//             }
//           }
//           return invertedWord;
//         }
//       });
  
//       var inverseCaseSentence = inverseCaseWords.join(" ");
  
//       element.value = inverseCaseSentence;
//     } else {
//       console.log("Element with id 'text' not found.");
//     }
//   }
  

  
//   function convertToInverseCaseAndSet() {
//     var element = document.getElementById("text");
//     if (element) {
//       var inputText = element.value;
  
//       var inverseCase = "";
//       for (var i = 0; i < inputText.length; i++) {
//         var char = inputText.charAt(i);
//         if (char === char.toUpperCase()) {
//           inverseCase += char.toLowerCase();
//         } else {
//           inverseCase += char.toUpperCase();
//         }
//       }
  
//       element.value = inverseCase;
//     } else {
//       console.log("Element with id 'text' not found.");
//     }
//   }
  

  function convertToInverseCaseAndSet() {
    var element = document.getElementById("text");
    if (element) {
      var inputText = element.value;
  
      var inverseCase = "";
      for (var i = 0; i < inputText.length; i++) {
        var currentChar = inputText.charAt(i);
        var inverseChar = '';
  
        if (currentChar === currentChar.toLowerCase()) {
          inverseChar = currentChar.toUpperCase();
        } else {
          inverseChar = currentChar.toLowerCase();
        }
  
        inverseCase += inverseChar;
      }
  
      element.value = inverseCase;
    } else {
      console.log("Element with id 'text' not found.");
    }
  }
  

  function downloadTextAsFile() {
    var element = document.getElementById("text");
    if (element) {
      var text = element.value;
      var filename = "Converted Text.txt";
  
      var elementLink = document.createElement("a");
      elementLink.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
      elementLink.setAttribute("download", filename);
      elementLink.style.display = "none";
      document.body.appendChild(elementLink);
  
      elementLink.click();
  
      document.body.removeChild(elementLink);
      alert("File Downloaded");
    } else {
      console.log("Element with id 'text' not found.");
    }
  }
  

  
  
  

  
//   function convertToTitleCaseAndSet() {
//     var element = document.getElementById("text");
//     if (element) {
//       var inputText = element.value;
  
//       var words = inputText.toLowerCase().split(" ");
//       var titleCaseWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       });
//       var titleCaseSentence = titleCaseWords.join(" ");
  
//       element.value = titleCaseSentence;
//     } else {
//       console.log("Element with id 'text' not found.");
//     }
//   }
  

  
  
  



//   function displayTextInPopup() {
//     var element = document.getElementById("text");
//     if (element) {
//       var inputText = element.value;
//       alert(" Text Copied ");
//     } else {
//       alert("Element with id 'text' not found.");
//     }
//   }



document.getElementById('cont_col1').addEventListener('click', function() {
    location.href = '../indexglb.html'
}, false);

document.getElementById('cont_col2').addEventListener('click', function() {
    location.href = 'indexgltf.html'
}, false);

const cr = document.getElementById("cr");

function myFunction(x) {
    if (x.matches) { // If media query matches
      cr.style.flexDirection = "column";
    } else {
      cr.style.flexDirection = "row";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
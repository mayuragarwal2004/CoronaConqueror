function checkactivenav() {
    var b = document.getElementById("activenav");
    var c = document.getElementsByClassName("active")[0].id;
    b.innerHTML = c
}

function myFunction(z) {
    var x = document.getElementById("mynavbar");
    var y = document.getElementById("faqdrop");
    var a = document.getElementById("innernav");
    var d = document.getElementById("activenav");
    if (x.className === "navbar") {
        x.className += " responsive";
        document.getElementById("activenav").style.display = "none";
    }
    else {
        x.className = "navbar";
        document.getElementById("activenav").style.display = "";
    }

    if (y.className === "dropdown navbar hide") {
        y.className = "dropdown navbar ";
    }
    else {
        y.className = "dropdown navbar hide";
    }

    if (a.className === "innernav") {
        a.className = "outernav";
    }
    else {
        a.className = "innernav";
    }



    z.classList.toggle("change");
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var banner = document.querySelector(".banner");
var micIcon = document.querySelector("#mic-icon");

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            banner.style.display= "";
        } else {
            li[i].style.display = "none";
            banner.style.display= "none";
        }
    }
}

function startDictation() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(e) {
      document.getElementById('myInput').value = e.results[0][0].transcript;
      recognition.stop();
      myFunction();
    };

    recognition.onerror = function(e) {
      recognition.stop();
    }

  }
}

micIcon.addEventListener("click", startDictation);

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
 sidebar.classList.toggle("smallside");
 container.classList.toggle("large-container");
}

// select the HTML element to output the transcript
var transcriptOutput = document.getElementsByClassName("transcript-output");

// update the content with the transcript text
transcriptOutput.textContent = transcript;


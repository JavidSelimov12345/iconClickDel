"use strict";

var userinput = document.querySelector('.userinput');
var tagbox = document.querySelector('.tagbox');

userinput.onkeydown = function (e) {
  // console.log(e)
  if (e.keyCode == 13) {
    var value = userinput.value;
    var tag = document.createElement('div');
    tag.classList.add('tag');
    tag.innerText = value;
    userinput.value = "";
    var itag = document.createElement('i');
    itag.innerText = "x";

    itag.onclick = function () {
      this.parentElement.remove();
    };

    tag.appendChild(itag);
    tagbox.appendChild(tag);
  }
};
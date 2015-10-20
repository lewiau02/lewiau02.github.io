quizFunc = function() {
           newli = document.createElement("li");
           newin = document.createElement("input");
           myTasklist = document.querySelector("#tasklist")
           myPriority = document.querySelector("#priority")
           myText = document.querySelector("#text")
           mynewli = document.createTextNode(myText.value)
           newli.className = myPriority.value
           newin.type = "checkbox"
           newli.appendChild(mynewli);
           newli.appendChild(newin);
           myTasklist.appendChild(newli);
}
           boxChecked= function() {
           this.parentNode.className = "done"
         }


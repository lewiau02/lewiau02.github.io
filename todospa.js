quizFunc = function() {
           newli = document.createElement("li");
           newin = document.createElement("input");
           myTasklist = document.querySelector("#tasklist")
           myPriority = document.querySelector("#priority")
           myText = document.querySelector("#text")
           mynewli = document.createTextNode(myText)
           newli.className = myPriority.value
           newIn.type = "checkbox"
           newli.appendChild(mynewli);
           myTasklist.appendChild(newli);
}
           boxChecked= function() {
           this.parentNode.className = "done"
         }


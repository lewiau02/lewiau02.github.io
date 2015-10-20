quizFunc = function() {
           newli = document.createElement("li");
           newin = document.createElement("input");
           myTasklist = document.querySelector("#tasklist")
           myPriority = document.querySelector("#priority")
           mynewli = document.createTextNode()
           newli.className = myPriority.value
           newIn.type = "checkbox"
           newli.appendChild(mynewli);
           myTasklist.appendChild(newli);
}
           boxChecked= function() {
           this.parentNode.className = "done"
         }


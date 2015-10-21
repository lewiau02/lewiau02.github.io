quizFunc = function() {
           newli = document.createElement("li");
           newin = document.createElement("input");
           myTasklist = document.querySelector("#tasklist")
           myPriority = document.querySelector("#priority")
           myText = document.querySelector("#text")
           mynewli = document.createTextNode(myText.value)
           newli.className = myPriority.value
           newin.type = "checkbox"
           newli.appendChild(newin);
           newli.appendChild(mynewli);
           myTasklist.appendChild(newli);
           onclick = "boxChecked"
           localSave(http://lewiau02.github.io/todospa.html string)
}
           boxChecked= function() {
           if (this.checked) {
           this.parentNode.classList.add("done")
           } else {
           this.parentNode.classList.remove("done")
           }
           localSave(http://lewiau02.github.io/todospa.html string)
           restoreList(http://lewiau02.github.io/todospa.html string,boxChecked)
}
localSave(http://lewiau02.github.io/todospa.html string)
restoreList(http://lewiau02.github.io/todospa.html string,boxChecked)
<script type="text/javascript">
window.onload = function () {restoreList("tasklist", boxChecked) } 
</script>
<script type="text/javascript" src="http://bnmetp.github.io/CS130/listsaver.js"></script>           

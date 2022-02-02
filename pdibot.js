loadButton();
var chatDiv = document.getElementById('mainchat');
chatDiv.setAttribute("onclick", "clickedOnChat()");
chatDiv.style="height: 50px;width: 50px;background-color: #FF7F50;border-radius: 50%;display: inline-block;position: fixed;bottom: 2%;left:92%;text-align: center;vertical-align: middle;";
var square="height: 550px;width: 400px;border-style: groove;display: inline-block;position: fixed;bottom: 2%;right:2%;text-align: center;vertical-align: middle;"
var chatBox = document.createElement('div');
chatBox.setAttribute("id", "chatBox");
chatBox.setAttribute("onclick", "clickedOnRemoveChat()");
chatBox.style=square;
function clickedOnChat() {
document.body.appendChild(chatBox);
}
function clickedOnRemoveChat() {
    let myobj = document.getElementById("chatBox");
    myobj.remove();
}

function loadButton(){
   let temp = document.createElement('div');
   temp.setAttribute("id", "mainchat");
   document.body.appendChild(temp);
}

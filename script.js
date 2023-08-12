const inpBox=document.getElementById("inputbox");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inpBox.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inpBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
   }
   inpBox.value='';
   saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
        }
},false);
 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
 }
 function showTasks(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 showTasks();

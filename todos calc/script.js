document.querySelector("form").addEventListener("submit",function(e)
{
    e.preventDefault();
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message= document.getElementById("message").value.trim();

const emailPattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!name|| !email|| !message){
    alert("Required")
    return ;
}
if(!email.match(emailPattern)){
alert("Enter Valid Email Address");
return ;
}
alert("Form Submitted Successfully!");
document.querySelector("form").reset();
});

//to do list//
const input  = document.getElementById("input_text");
const addbtn  = document.getElementById("addBtn");
const list = document.getElementById("to_dolist");
function addTask(){
    const task=input.value.trim();
    if(!task) return ;

    const li=document.createElement("li");
    li.textContent=task;
    li.addEventListener("click",()=>{
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "" : "line-through";
      });

      const delBtn = document.createElement("button");
      delBtn.textContent = " X";
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
      });

      li.appendChild(delBtn);
      list.appendChild(li);
      input.value = "";
    }

    addBtn.addEventListener("click", addTask);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });

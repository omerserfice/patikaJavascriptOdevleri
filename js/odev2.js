
let userFormDOM = document.querySelector("#userForm")

userFormDOM.addEventListener("submit",newElement)

function newElement(event){
     event.preventDefault();
     const TASK = document.querySelector("#task")
     if(TASK.value ){
        addItem(TASK.value)
     }else{
         console.log("hatalı giriş")
     }
     
}

{/* <li>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>
</div>
</li> */}
let userListDOM = document.querySelector("#userList")

const addItem = (task)=> {

    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${task}
   
    <button type="button" onclick="deleteElement()" class="btn btn-close text-end" data-bs-dismiss="alert" aria-label="Close">X</button>`
    liDOM.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show');
    liDOM.onclick = function doneElement() {
        liDOM.innerHTML = `<del>${task}</del> <button type="button" onclick="deleteElement()" class="btn btn-close text-end" data-bs-dismiss="alert" aria-label="Close">X</button>`
    }
    userListDOM.append(liDOM);

}

const deleteElement = () => {
   userListDOM.removeChild(userListDOM.childNodes[0]);
}


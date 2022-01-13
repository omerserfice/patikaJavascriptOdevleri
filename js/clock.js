let  userFormDOM = document.querySelector("#userForm")

userFormDOM.addEventListener("submit",formHandler)

const alertDOM = document.querySelector('#alert')

// const ALERT = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
// <strong>Holy guacamole!</strong> You should check in on some of those fields below.
// <button type="button" class=" btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>`

const alertFunction = (title,message,className="warning") => 
`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
let userListDOM = document.querySelector("#userList")
const addItem = (userName,score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lign-items-start')
    userListDOM.append(liDOM)
}

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }else{
        // alertDOM.innerHTML = ALERT;
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz.",
            "success"
        )
    }
}
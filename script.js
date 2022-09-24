let input = document.getElementById(`input`)
let add = document.getElementById(`add`)
let text = document.getElementById(`text`)
let comblete = document.getElementById(`comblete`)
let deletee = document.getElementById(`delete`)
let index = document.getElementById(`index`)
let totop = document.querySelector(".top")

let deletediv = document.querySelector(".deleteDiv")

let title = document.getElementById(`hh`)
console.log(title)
title.setAttribute("class", "title")


let datatask;
if (localStorage.task != null) {
    datatask = JSON.parse(localStorage.task)
} else {
    datatask = []
}
add.onclick = function () {
    if (input.value == ``) {
        add.style.cursor = no - drop
    }
    let newtask = {
        value: input.value
    }
    datatask.push(newtask)
    localStorage.setItem("task", JSON.stringify(datatask))
    cleardata();
    showtask();
}
function cleardata() {
    input.value = ``
}
function showtask() {
    let inbody = ``
    for (let i = 0; i < datatask.length; i++) {
        inbody += `
        <span>${i+1}</span>

        <div id="text">${datatask[i].value} </div>
        <button onclick="deletedata()" id="delete"> delete</button>
        `
    }

    document.querySelector(`.outputs`).innerHTML = inbody

    let btndelete = document.getElementById(`deleteAll`)
    if (datatask.length > 1) {
        btndelete.innerHTML = `
        <button onclick ="deleteall()">delete All (${datatask.length}) </button>
        `
    } else {
        btndelete.innerHTML = ``;
    }
}
showtask();
function deletedata(i) {
    datatask.splice(i, 1)
    localStorage.task = JSON.stringify(datatask)
    showtask();

}
function deleteall() {
    localStorage.clear()
    dataprod.splice(0)
    showdata();

}
// function create() {

//     let deleteall = document.createElement("div")
//     deleteall.className = "deleteall"
//     let btn = document.createElement("button")
//     btn.className = "deleteAll"
//     btn.appendChild(document.createTextNode("deleteAll"))
//     deleteall.appendChild(btn)
//     deletediv.appendChild(deleteall)

// }
// create()




// #########################
window.onscroll = function () {
    if (this.scrollY >= 500) {
        totop.classList.add("show")
    } else {
        totop.classList.remove("show")
    }
}
totop.onclick = function () {
    window.scrollTo({
        top: 10,
        behavior: "smooth",
    })
}
// ##########################
showtask();

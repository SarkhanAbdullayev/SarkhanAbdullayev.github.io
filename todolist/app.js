const form = document.querySelector(".form");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");
const ul = document.querySelector("ul");

let arr = getLocalS("tasks") ? getLocalS("tasks") : [];

let count = localStorage.getItem("count") ? localStorage.getItem("count") : 1;
localStorage.setItem("count", count)

creatLi();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() != "") {

        const obj = {};
        obj.task = input.value;
        obj.check = false;
        obj.id = parseInt(localStorage.getItem("count")) ? parseInt(localStorage.getItem("count")) : 1;
        count++;
        localStorage.setItem("count", count)
        arr.push(obj);
        setLocalS(arr);
        creatLi();
    }
})

function creatTrash() {
    const trash = document.createElement("button");
    trash.classList.add("trash");
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    return trash;
}

function creatCheckbox(boolen) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    checkbox.checked = boolen;
    return checkbox;
}

function creatLi() {
    ul.innerHTML = "";
    arr.forEach(obj => {
        const newli = document.createElement("li");
        newli.append(creatTrash());
        if (obj.check) {
            newli.append(creatCheckbox(true));
            newli.classList.add("deleted");
        }
        else newli.append(creatCheckbox(false));
        newli.append(obj.task);
        newli.id = obj.id;
        ul.prepend(newli);
    })
    input.value = "";
    checker();
    remuveTask();
}

function checker() {
    const checkboxs = document.querySelectorAll(".check");
    checkboxs.forEach(function (el) {
        el.addEventListener("click", () => {
            arr.forEach((obj) => {
                if (el.parentElement.id == obj.id) {
                    if (obj.check) {
                        obj.check = false;
                        el.parentElement.classList.remove("deleted");
                    }
                    else {
                        obj.check = true;
                        el.parentElement.classList.add("deleted");
                    }
                }
            })
            setLocalS(arr);
        })
    })
}

function remuveTask() {
    const trashs = document.querySelectorAll(".trash");
    trashs.forEach(function (el) {
        el.addEventListener("click", () => {
            arr.forEach((obj,i) => {
                if (el.parentElement.id == obj.id) {
                    el.parentElement.remove();
                    arr.splice(i, 1);
                    setLocalS(arr);
                }
            })
        })
    });
    
}

function setLocalS(data) {
    localStorage.setItem("tasks", JSON.stringify(data))
}

function getLocalS(data) {
    return JSON.parse(localStorage.getItem(data))
}

clear.addEventListener("click", () => {
    arr = [];
    localStorage.removeItem("tasks");
    count = 1;
    creatLi();
    localStorage.removeItem("count")
})
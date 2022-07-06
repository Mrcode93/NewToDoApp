let addBtn = document.querySelector('input[type="button"]');
let input = document.querySelector('input[type="text"]');
let tasks = document.querySelector(".tasks");
let value = input.value;

addBtn.addEventListener("click", () => {
    if (input.value !== "") {
        tasks.style.display = "flex";
        addTask();
        addToLocal();
    } else {
        Swal.fire({
            title: "Error",
            text: "Please enter a task",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
});

function addTask() {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    let btns = document.createElement("div");
    btns.classList.add("btns");
    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    let completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
    btns.appendChild(completeBtn);
    btns.appendChild(delBtn);
    li.appendChild(btns);
    tasks.appendChild(li);
    input.value = "";
    delBtn.addEventListener("click", () => {
        li.remove();
    });
    completeBtn.addEventListener("click", () => {
        li.classList.add("completed");
    });
}

function addToLocal() {
    let tasks = document.querySelectorAll("li");
    let tasksArr = [];
    tasks.forEach((task) => {
        tasksArr.push(task.textContent.replace("Delete", "").replace("Comp.", ""));
    });
    console.log(tasksArr);
    //add the tasks to local storage with out delete the old ones
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
}
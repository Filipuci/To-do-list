const input = document.querySelector("#input");
const ul = document.querySelector(".list > ul");
let contador = 0;
input.focus();

document.querySelector("#submit-btn").addEventListener("click", addTask);
input.addEventListener("keypress", (event) => {
  if (event.code === "Enter") addTask();
})

function addTask() {
  if (!input.value) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", contador)
  checkbox.classList.add("checkbox");
  label.htmlFor = contador;

  label.innerHTML = input.value;

  li.append(checkbox, label);
  ul.append(li);

  input.value = ""

  contador++;

  /* TEXT DECORATION DASHED */

  checkbox.addEventListener("change", () => {
    if(checkbox.checked) {
      label.classList.toggle("task-completed");
    } else {
      label.classList.toggle("task-completed");
    }
  })
}

/* DARK THEME */

const darkBtn = document.querySelector(".dark-btn i");
const body = document.body;

darkBtn.addEventListener("click", () => {
  if(body.classList.contains("dark-mode")) {
    body.classList.toggle("dark-mode");
    darkBtn.classList.toggle("bx-sun")
    darkBtn.classList.toggle("bx-moon")
  } else {
    body.classList.toggle("dark-mode");
    darkBtn.classList.toggle("bx-moon")
    darkBtn.classList.toggle("bx-sun")
  }
})
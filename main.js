if (!localStorage.getItem("todo")) {
  var todos = [{ todo: "first" }, { todo: "first" }];
  localStorage.setItem("todo", JSON.stringify(todos));
} else {
  var todos = JSON.parse(localStorage.getItem("todo"));
}

function display() {
  document.getElementById("root").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    document.getElementById(
      "root"
    ).innerHTML += `<li>${todos[i].todo}<button onclick="del('${todos[i].todo}')">delete</button><button onclick="update('${todos[i].todo}')">update</button></li> `;
  }
}

display();

function add() {
  todos.push({ todo: document.getElementById("input").value });
  localStorage.setItem("todo", JSON.stringify(todos));
  display();
  document.getElementById("input").value = "";
}

function del(todo) {
  for (let i = 0; i < todos.length; i++) {
    if (todo === todos[i].todo) {
      todos.splice(i, 1);
    }
  }
  localStorage.setItem("todo", JSON.stringify(todos));
  display();
}

function update(todo) {
  for (let i = 0; i < todos.length; i++) {
    if (todo === todos[i].todo) {
      todos[i].todo = document.getElementById("input").value;
    }
  }
  localStorage.setItem("todo", JSON.stringify(todos));
  display();
  document.getElementById("input").value = "";
}

function addTodoList() {
  if (
    document.getElementById("title").value != "" &&
    document.getElementById("description").value != ""
  ) {
    let myArr = [];
    let title = document.getElementById("title").value;
    let descript = document.getElementById("description").value;

    if (localStorage.getItem("itemJson") == null) {
      myArr.push([title, descript]);
      localStorage.setItem("itemJson", JSON.stringify(myArr));
    } else {
      myArr = JSON.parse(localStorage.getItem("itemJson"));
      myArr.push([title, descript]);
      localStorage.setItem("itemJson", JSON.stringify(myArr));
    }
    //populating the todo's table
    updateTodoList();
  }
}

function updateTodoList() {
  myArr = JSON.parse(localStorage.getItem("itemJson"));
  let myBody = document.getElementById("tableBody");
  let str = "";

  myArr.forEach((element, index) => {
    str += `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-primary btn-sm" onclick="deleteTask(${index})">Delete</button></td>
            </tr>`;
  });
  myBody.innerHTML = str;
}

function deleteTask(myIndex) {
  console.log("inside delete finction");
  let myTasks = JSON.parse(localStorage.getItem("itemJson"));
  myTasks.splice(myIndex, 1);
  localStorage.setItem("itemJson", JSON.stringify(myTasks));
  // location.reload();
  updateTodoList();
}

//updating document, on start up
if (localStorage.getItem("itemJson") != null) {
  updateTodoList();
}

//adding todo's in my todo-list table
let add = document.getElementById("add");
add.addEventListener("click", addTodoList);

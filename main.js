let title = document.getElementById("title");
let descript = document.getElementById("description");

let add = document.getElementById("add");

//deleting the tasks from todo's
function deleteTask(myIndex) {
  let myTasks = JSON.parse(localStorage.getItem("itemJson"));
  myTasks.splice(myIndex, 1);
  localStorage.setItem("itemJson", JSON.stringify(myTasks));
  updateTodoList();
}

//populating the todo's table
function updateTodoList() {
  let myArr = JSON.parse(localStorage.getItem("itemJson"));
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

//adding tasks to todo's
function addTodoList() {
  if (title.value != "" && descript.value != "") {
    let myArr = [];

    console.log(title.value);
    console.log(descript.value);

    if (localStorage.getItem("itemJson") == null) {
      myArr.push([title.value, descript.value]);
      localStorage.setItem("itemJson", JSON.stringify(myArr));
    } else {
      myArr = JSON.parse(localStorage.getItem("itemJson"));
      myArr.push([title.value, descript.value]);
      localStorage.setItem("itemJson", JSON.stringify(myArr));
    }

    updateTodoList();

    //clearing input area
    title.value = "";
    descript.value = "";
  }
}

//updating document, on start up
if (localStorage.getItem("itemJson") != null) {
  updateTodoList();
}

//adding todo's button
add.addEventListener("click", addTodoList);

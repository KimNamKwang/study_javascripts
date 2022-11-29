let queryInput = document.querySelector("#addNewTask"); //text박스 선택

let taskName;
let newTask;
let addBtn = document.querySelector("#btnAdd");

let queryTodoList = document.querySelector(".todo-list");
addBtn.addEventListener("click", (event) => {
  if (queryInput.value != "" && queryInput.value != "undefined") {
    taskName = queryInput.value;
    /* <ul>에 newTask추가 */
    newTask = `<li>
    <div>
    ${taskName}
    <span>
            <i class="material-icons delete" id="favorireBtn">favorite</i>
            </span>
            <span>
            <i class="material-icons delete" id="deleteBtn">delete</i>
            </span>
            </div>
            </li>`;
    queryTodoList.insertAdjacentHTML("beforeend", newTask);
  } else {
    alert("Please enter a task");
  }
});

let queryKeyDown = document.querySelector("#addNewTask");
queryKeyDown.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (queryInput.value != "" && queryInput.value != "undefined") {
      //   if (queryInput.value == "" && queryInput.value == "undefined") {
      //     alert("Please enter a task");
      //   }
      taskName = queryInput.value;
      /* <ul>에 newTask추가 */
      newTask = `<li>
              <div>
            ${taskName}
            <span>
            <i class="material-icons delete" id="favorireBtn">favorite</i>
            </span>
            <span>
            <i class="material-icons delete" id="deleteBtn">delete</i>
            </span>
            </div>
            </li>`;
      queryTodoList.insertAdjacentHTML("beforeend", newTask);
    } else {
      alert("Please enter a task");
    }
  }
});

// "keydown", (event) => {
//     console.log(event);
//     if (event.code == "Enter") {
//       keydownDesc(queryKeydown.value);
//     }
//     console.log(event.target);
//   };

let deleteBtn = document.querySelector(".todo-list");
deleteBtn.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});

let favoriteBtn = document.querySelector(".todo-list");
favoriteBtn.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite") {
    /** 새로운 하트 이모티콘 구문 삽입 */
    let newFavoriteBtn = `<i class="material-icons favorite" id="favoriteBtn">
            favorite_border
          </i>`;
    event.target.parentElement.innerHTML = newFavoriteBtn;
  } else if (event.target.innerHTML.trim() == "favorite_border") {
    let oldFavoriteBtn = `<i class="material-icons favorite" id="favoriteBtn">
    favorite
</i>`;
    event.target.parentElement.innerHTML = oldFavoriteBtn;
  }
});

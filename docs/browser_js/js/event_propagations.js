let queryInputAll = document.querySelectorAll("input"); //한번에 모든 input select

for (queryInput of queryInputAll) {
  queryInput.addEventListener("click", (event) => {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  });
}

let newItem = `<li>
            <div>
                <input type="checkbox" name="" id="item3">
                <label for="item3">item three</label>
                <span>
              <i class="material-icons delete">delete</i>
            </span>
            </div>
        </li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});

queryItemList.insertAdjacentHTML("beforeend", newItem); /*item three추가 */

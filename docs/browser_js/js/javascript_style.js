queryRemove = document.querySelector("#remove");

queryRemove.addEventListener("click", (event) => {
  queryRemove = document.querySelector("#removeAll");
  queryRemove.style.display = "none";
  //   alert("hi");
});

queryHide = document.querySelector("#hideBtn");

queryHide.addEventListener("click", (event) => {
  queryHide = document.querySelector("#hide");
  queryHide.style.visibility = "hidden";
});

queryHide = document.querySelector("#resetAllBtn");

queryHide.addEventListener("click", (event) => {
  queryRemove.style.display = "block";
  queryHide.style.visibility = "visible";
});

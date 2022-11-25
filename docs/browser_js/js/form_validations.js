function validateForm() {
  let fnamevalue = document.forms["myForm"]["fname"].value;
  //form은 여러개가 있을 수 있고 위에서는 그 중 name이 myForm인 것을 선택.
  //또 form은 그 안의 것들을 object로 가지고 있어 fname으로 검색 후 value 선택.
  if (fnamevalue == "") {
    let queryErrorId = document.querySelector("#fnameErrorId");
    queryErrorId.innerHTML = "Name must be filled in";
    queryErrorId.style.color = "red";
    return false;
  }
  return true;
}

let btnsearch = document.querySelector("#btnsearch");
btnsearch.addEventListener("click", (event) => {
  //event 는 addEventListener에서 들어오는 모든 입력.
  searchForm(event);
});

function searchForm(event) {
  //event 는 addEventListener에서 들어오는 모든 입력.
  let searchInput = document.querySelector("#searchId");
  let searchValue = searchInput.value;
  let text;
  if (searchValue < 1 || searchValue > 10) {
    text = "Input Not Valid";
  } else {
    text = "Inout Ok";
  }
  document.querySelector("#searchDescId").innerHTML = text;
}

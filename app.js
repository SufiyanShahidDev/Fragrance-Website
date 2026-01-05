function toggleBtn() {
  var toggleBtn = document.getElementById("input");

  if (toggleBtn.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

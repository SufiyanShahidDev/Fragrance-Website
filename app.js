function toggleBtn() {
  var toggleBtn = document.getElementById("input");

  if (toggleBtn.click) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

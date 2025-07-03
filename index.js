document.getElementById("monthly-tab").addEventListener("click", () => {
  document.getElementById("monthly-tab").classList.add("active");
  document.getElementById("annual-tab").classList.remove("active");
});

document.getElementById("annual-tab").addEventListener("click", () => {
  document.getElementById("annual-tab").classList.add("active");
  document.getElementById("monthly-tab").classList.remove("active");
});

document.getElementById("monthly-tab").addEventListener("click", () => {
  document.getElementById("monthly-tab").classList.add("active");
  document.getElementById("annual-tab").classList.remove("active");
});

document.getElementById("annual-tab").addEventListener("click", () => {
  document.getElementById("annual-tab").classList.add("active");
  document.getElementById("monthly-tab").classList.remove("active");
});

const monthlyTab = document.getElementById("monthly-tab");
const annualTab = document.getElementById("annual-tab");
const plusPrice = document.querySelector("#plus .price");
const proPrice = document.querySelector("#pro .price");

monthlyTab.addEventListener("click", () => {
  monthlyTab.classList.add("active");
  annualTab.classList.remove("active");
  plusPrice.innerHTML = "$149<span class='month'>/month</span>";
  proPrice.innerHTML = "$299<span class='month'>/month</span>";
});

annualTab.addEventListener("click", () => {
  annualTab.classList.add("active");
  monthlyTab.classList.remove("active");
  plusPrice.innerHTML =
    "$199<span class='month'>/month</span><br><small>$1,791 USD/year (25% off)</small>";
  proPrice.innerHTML =
    "$399<span class='month'>/month</span><br><small>$3,591 USD/year (25% off)</small>";
});
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const box = item.parentElement;

    document.querySelectorAll(".faq-box").forEach((faq) => {
      if (faq !== box) {
        faq.classList.remove("active");
      }
    });

    box.classList.toggle("active");
  });
});

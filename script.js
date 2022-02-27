// Burger Menu Toggle

const brgrBox = document.querySelector(".brgr-box");

brgrBox.addEventListener("click", function () {
  if (!brgrBox.classList.contains("menu-open")) {
    document.querySelectorAll(".nav-menu li").forEach(function (o) {
      o.classList.remove("hidden");
      o.classList.add("visible");
    });
    brgrBox.classList.add("menu-open");
  } else if (brgrBox.classList.contains("menu-open")) {
    document.querySelectorAll(".nav-menu li").forEach(function (o) {
      o.classList.add("hidden");
      o.classList.remove("visible");
    });
    brgrBox.classList.remove("menu-open");
  }
});

// Sliders

function sliderHighlights(prj) {
  prj.forEach(function (b) {
    b.onclick = function (e) {
      prj.forEach(function (c) {
        c.classList[e.target == c ? "add" : "remove"]("highlight");
      });
    };
  });
}

sliderHighlights(document.querySelectorAll(".analytics-page .bar"));
sliderHighlights(document.querySelectorAll(".sports-data-page .bar"));
sliderHighlights(document.querySelectorAll(".debt-solutions-page .bar"));

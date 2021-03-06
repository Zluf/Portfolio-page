// Burger Menu Toggle

const brgrBox = document.querySelector(".header__brgr-menu");

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

// Sliders v2.0

// const slideReels = document.querySelectorAll(".slider__reel");
const slideButtons = document.querySelectorAll(".slider__btn");

slideButtons.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    const targetedSlideReel =
      e.target.parentElement.parentElement.children[2].children[0];
    const amountOfSlides = targetedSlideReel.children.length;
    const btnNum = e.target.className.charAt(e.target.className.length - 1);
    targetedSlideReel.style.transform = `translateX(-${
      (btnNum - 1) * (100 / amountOfSlides)
    }%)`;
  });
});

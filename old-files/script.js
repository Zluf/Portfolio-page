// Burger Menu Toggle

const brgrBox = document.querySelector(".hero__brgr-menu");

brgrBox.addEventListener("click", function () {
  if (!brgrBox.classList.contains("menu-open")) {
    document.querySelectorAll(".header__nav a").forEach(function (o) {
      o.classList.remove("mobile-hidden");
      o.classList.add("mobile-visible");
    });
    brgrBox.classList.add("menu-open");
  } else if (brgrBox.classList.contains("menu-open")) {
    document.querySelectorAll(".header__nav a").forEach(function (o) {
      o.classList.add("mobile-hidden");
      o.classList.remove("mobile-visible");
    });
    brgrBox.classList.remove("menu-open");
  }
});

// Sliders v2.0

const slideButtons = document.querySelectorAll(".slide-btn");

slideButtons.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    const targetedSlideReel =
      e.target.parentElement.parentElement.parentElement.children[2]
        .children[0];
    const amountOfSlides = targetedSlideReel.children.length;
    const btnNum = e.target.className.charAt(e.target.className.length - 1);
    targetedSlideReel.style.transform = `translateX(-${
      (btnNum - 1) * (100 / amountOfSlides)
    }%)`;
  });
});

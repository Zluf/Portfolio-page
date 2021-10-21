// for (let i = 1; i <= 3; i++) {
//     document.querySelector(`.page-${i}`).addEventListener('mouseover', function() {
//         document.querySelector(`.analytics-${i}`).classList.remove('hidden');

//     })
// }

// Burger Menu Toggle

const brgrBox = document.querySelector(".brgr-box");

brgrBox.addEventListener("click", function () {
  document.querySelectorAll(".nav-menu li").forEach((o) => {
    o.classList.toggle("hidden");
    o.classList.toggle("visible");
  });
  brgrBox.classList.toggle("menu-open");
});

// document.querySelector('.page-1').addEventListener('mouseover', function() {
//     document.querySelector('.analytics-1').classList.remove('hidden');
//     document.querySelector('.analytics-2').classList.add('hidden');
//     document.querySelector('.analytics-3').classList.add('hidden');
// })

// document.querySelector('.page-2').addEventListener('mouseover', function() {
//     document.querySelector('.analytics-1').classList.add('hidden');
//     document.querySelector('.analytics-2').classList.remove('hidden');
//     document.querySelector('.analytics-3').classList.add('hidden');
// })

// document.querySelector('.page-3').addEventListener('mouseover', function() {
//     document.querySelector('.analytics-1').classList.add('hidden');
//     document.querySelector('.analytics-2').classList.add('hidden');
//     document.querySelector('.analytics-3').classList.remove('hidden');
// })

// for (let i = 1; i <= 3; i++) {
//     document.querySelector(`.page-${i}`).addEventListener('mouseover', function() {
//         document.querySelector(`.analytics-${i}`).classList.remove('hidden');

//     })
// }

document.querySelector('.page-1').addEventListener('mouseover', function() {
    document.querySelector('.analytics-1').classList.remove('hidden');
    document.querySelector('.analytics-2').classList.add('hidden');
    document.querySelector('.analytics-3').classList.add('hidden');
})

document.querySelector('.page-2').addEventListener('mouseover', function() {
    document.querySelector('.analytics-1').classList.add('hidden');
    document.querySelector('.analytics-2').classList.remove('hidden');
    document.querySelector('.analytics-3').classList.add('hidden');
})

document.querySelector('.page-3').addEventListener('mouseover', function() {
    document.querySelector('.analytics-1').classList.add('hidden');
    document.querySelector('.analytics-2').classList.add('hidden');
    document.querySelector('.analytics-3').classList.remove('hidden');
})


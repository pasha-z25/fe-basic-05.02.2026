console.log('It works!');

$('#burger').on('click', function () {
  $(this).toggleClass('active');
});

$('#openModal').on('click', function () {
  $('.modal-wrapper').addClass('active');
});

$('.modal-window .close, .modal-wrapper').on('click', function (event) {
  if (event.target === this) {
    $('.modal-wrapper').removeClass('active');
  }
});

/**
 * Автоматично оновлює поточний рік у сніданті
 * Знаходить елемент з ID 'currentYear' і встановлює його вміст
 * на поточний рік (отримується з Date.getFullYear())
 */
const currentYearEl = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearEl.textContent = currentYear;

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  alert('Форма відправлена!');
});

// const burgerEl = document.getElementById("burger");
// burgerEl.addEventListener('click',)

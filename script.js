document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  let currentIndex = 0;

  function updateCarousel() {
    const translateValue = -currentIndex * 260; // 250px for each slide + 10px margin
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  function moveToNext() {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
  }

  function moveToPrev() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
  }

  prevButton.addEventListener('click', moveToPrev);
  nextButton.addEventListener('click', moveToNext);

  // Закрытие модального окна при клике за его пределами
  document.addEventListener('click', function (event) {
    const modal = document.getElementById('feedbackModal');
    if (event.target === modal) {
      closeModal();
    }
  });

  // Отображение предупреждения о незаполненных полях
  const submitBtn = document.querySelector('.submit-btn');
  const warningMessage = document.createElement('div');
  warningMessage.className = 'warning-message';
  warningMessage.style.color = 'red';

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const inputs = document.querySelectorAll('.modal-form input');
    let allFieldsFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      warningMessage.textContent = 'Пожалуйста, заполните все поля';
      submitBtn.insertAdjacentElement('beforebegin', warningMessage);
    } else {
      // Здесь можете добавить логику отправки данных формы

      // Добавляем задержку перед возвратом на сайт
      setTimeout(function () {
        closeModal();
        window.location.href = 'https://darina9.github.io/SwissTechnology/'; // Укажите свой адрес сайта
      }, 1000);
    }
  });
});

function openModal() {
  document.getElementById('feedbackModal').style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('feedbackModal');
  const warningMessage = document.querySelector('.warning-message');

  if (warningMessage) {
    warningMessage.remove();
  }

  modal.style.display = 'none';
}
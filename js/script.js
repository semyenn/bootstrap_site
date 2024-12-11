// Функция для выплывания картинки
function showPopupImage() {
    const popupImageLeft = document.getElementById('left-bg-img');
    const popupImageRight = document.getElementById('right-bg-img');

    popupImageLeft.classList.add('active');
    popupImageRight.classList.add('active');
}

function showPopupImageTop(){
    const popupImageTop = document.getElementById('popup-image-top');

    popupImageTop.classList.add('active');
}

// Вызываем функцию через 1 секунду после загрузки страницы
setTimeout(showPopupImage, 2000);
setTimeout(showPopupImageTop, 1000);

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animated-element');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
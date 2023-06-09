const slideImages = document.querySelectorAll('img');
const numberOfImages = document.querySelectorAll('img').length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let counter = 0;
next.addEventListener('click', () => {
  prev.style.display = 'block';
});
next.addEventListener('click', slideNext);
function slideNext() {
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  counter++;
  if (counter === numberOfImages - 1) {
    next.style.display = 'none';
  }
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}
prev.addEventListener('click', slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  counter--;
  if (counter === 0) {
    prev.style.display = 'none';
    next.style.display = 'block';
  }
  if (counter >= 1 || counter <= numberOfImages - 2) {
    next.style.display = 'block';
  }
  slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  indicators();
}
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}
function switchImage(currentImage) {
  console.log(typeof currentImage.classList);
  currentImage.classList.add('active');
  console.log(currentImage.classList);
  const imageId = currentImage.getAttribute('attr');
  if (imageId > counter) {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    console.log(counter);
    if (counter >= 1 || counter <= numberOfImages - 2) {
      prev.style.display = 'block';
    }
    if (counter == numberOfImages - 1) {
      next.style.display = 'none';
    }
  } else {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    if (counter == 0) {
      prev.style.display = 'none';
      next.style.display = 'block';
    }
    if (counter >= 1 || counter <= numberOfImages - 2) {
      next.style.display = 'block';
    }
  }
  indicators();
}

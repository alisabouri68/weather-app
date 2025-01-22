const sliderContainer = document.querySelector(".slides-start");
const one = document.querySelector(".one");
// ساخت اسلایدر با موس
let isDragging = false;
let startX;
let marginLeft = 0;
let currentSlide = 0;
let endX;
sliderContainer.addEventListener("mousedown", (e) => {
  sliderContainer.classList.add("slides-start-active");
  isDragging = true;
  startX = e.clientX;
  one.style.transition = "all 0s ease";
});
sliderContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diffX = e.clientX - startX;
  marginLeft = diffX - currentSlide * window.innerWidth;
  one.style.marginLeft =`${marginLeft}px`;
});
sliderContainer.addEventListener("mouseup", (e) => {
  sliderContainer.classList.remove("slides-start-active");
  if (!isDragging) return;
  endX = e.clientX;
  isDragging = false;
  if (endX - startX > 100 && currentSlide == 1) {
    currentSlide--;
  }else if (endX - startX < -100 && currentSlide == 1) {
    currentSlide++;
  } else if (endX - startX < -100 && currentSlide == 2) {
    currentSlide = currentSlide;
  }else if (endX - startX > 100 && currentSlide == 2) {
    currentSlide--;
  }  else if (endX - startX < -100 && currentSlide == 0) {
    currentSlide++;
  }
  marginLeft = currentSlide * 100;
  one.style.marginLeft = `-${marginLeft}vw`;
  one.style.transition = 'all 1s ease';
});
// با
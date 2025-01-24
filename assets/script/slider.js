const sliderContainer = document.querySelector(".slides-start");
const one = document.querySelector(".one");
const btnStart = document.querySelector(".btn-start");
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

//  با تاچ گوشی 
sliderContainer.addEventListener("touchstart", (e) => {
  // sliderContainer.classList.add("slides-start-active");
  isDragging = true;
  startX = e.touches[0].clientX;
  one.style.transition = "all 0.1s ease";
  // console.log(e.touches[0].clientX)

});
sliderContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const diffX = e.touches[0].clientX - startX;
  marginLeft = diffX - currentSlide * window.innerWidth;
  one.style.marginLeft =`${marginLeft}px`;
  console.log(window.innerWidth)

});
sliderContainer.addEventListener("touchend", (e) => {
  // sliderContainer.classList.remove("slides-start-active");
  if (!isDragging) return;
  endX = e.changedTouches[0].clientX;
  isDragging = false;
  if (endX - startX > 7 && currentSlide == 1) {
    currentSlide--;
  }else if (endX - startX < -7 && currentSlide == 1) {
    currentSlide++;
  } else if (endX - startX < -7 && currentSlide == 2) {
    currentSlide = currentSlide;
  }else if (endX - startX > 7 && currentSlide == 2) {
    currentSlide--;
  }  else if (endX - startX < -7 && currentSlide == 0) {
    currentSlide++;
  }
  marginLeft = currentSlide * 100;
  one.style.marginLeft = `-${marginLeft}vw`;
  one.style.transition = 'all 1s ease';
  console.log(e)
});
function srtartshow(a, b) {
    sliderContainer.style.opacity=`${a}`
  sliderContainer.style.visibility=`${b}`
}
window.addEventListener('load',()=>{
  const start = localStorage.getItem('start')
  console.log(start)
  start === "show"?srtartshow("0" , "hidden"):srtartshow("1" , "visible");
})
btnStart.addEventListener('click',()=>{
  srtartshow("0" , "hidden")
  localStorage.setItem('start', 'show')
})
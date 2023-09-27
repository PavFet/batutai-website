// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  }
  )

  menu.addEventListener('click', () => {
    menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
 
})
//  if(menu.classList.contains('active')) {
//   htlm.addEventListener('click', () => {
//     menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
// })
//  }

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)



var slideIndex = 1;
showDivs(slideIndex);

var slideIndex2 = 1;
showDivs2(slideIndex2)

var slideIndex3 = 1;
showDivs3(slideIndex3)

var slideIndex4 = 1;
showDivs4(slideIndex4)

var slideIndex5 = 1;
showDivs5(slideIndex5)

function plusDivs(n) {
  showDivs(slideIndex += n);
}


function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
  
}

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
  
}

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
  
}

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
  
}





function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "block";  
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex5-1].style.display = "block";  
}


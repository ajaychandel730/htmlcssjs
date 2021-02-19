var burger = document.querySelector(".burger")
var navbar = document.querySelector(".navbar")
var rightNav = document.querySelector(".rightnav")
var navlist = document.querySelector('.nav-list')

  burger.addEventListener('click', function(){
  navbar.classList.toggle("h-nav-resp");
  rightNav.classList.toggle("v-class-resp");
  navlist.classList.toggle("v-class-resp");
  })
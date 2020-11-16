(function () {
  'use strict'
  feather.replace()
})()

// active menu
let activeUrl = location.pathname.split("/")[1];
let links = document.querySelectorAll("#sidebarMenu a");
let removeActiveClass = document.querySelector('#sidebarMenu .active');
removeActiveClass != null ?? removeActiveClass.classList.remove('active');

links.forEach(link => {
  if(link.getAttribute('href') == activeUrl) {
    link.classList.add("active");
    document.querySelector("#sidebarMenu .active");

    // active menu
    let activeMenu = document.querySelector("#sidebarMenu .active").parentNode.parentNode.parentNode;
    activeMenu.classList.remove('collapse');
    activeMenu.classList.add('collapse');
    activeMenu.classList.add('show')
    
  }
})

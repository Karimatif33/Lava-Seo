
const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");
const   x = document.getElementById("x");
const navactivemenu = document.querySelector("nav.active .menu")

 


// js code to toggle search box
  searchToggle.addEventListener("click" , (eo) =>{
  searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , (eo) =>{
nav.classList.add("active");
});

x.addEventListener("click", (eo) => {

nav.classList.remove("active")
})




const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

// menuBtn.addEventListener("click", ()=> {
//   if (menuBtn.classList.contains("open")) {
//     menuBtn.classList.remove("open")
//         menu.classList.remove("flex")
//     menu.classList.add("hidden")
 

//   } else {
//     menuBtn.classList.add("open")
//     menu.classList.add("flex")
//     menu.classList.remove("hidden")
   

//   }
// })

menuBtn.addEventListener("click", ()=> {
  menuBtn.classList.toggle("open")
  menu.classList.toggle("flex")
  menu.classList.toggle("hidden")
})
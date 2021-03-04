let toggle_Humberger = document.querySelector("#toggle");
let nav_menu = document.querySelector(".nav-menu");

let who_we_are = document.querySelector(".who_we_are");
let learn_with_us = document.querySelector(".learn_with_us");
let connect_with_us = document.querySelector(".connect_with_us");
let our_resources = document.querySelector(".our_resources");

my_links = [who_we_are, learn_with_us, connect_with_us, our_resources];

toggle_Humberger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

nav_menu.addEventListener("click", () =>{
    for (let i = 0; i < menu.classList.length; i++) {
        if (i.classList.contains("border-primary", "border-2", "rounded-full", "px-4", "py-3")) {
            i.classList.remove("border-primary", "border-2", "rounded-full", "px-4", "py-3");
        }
        my_links[i].classList.add("border-primary", "border-2", "rounded-full", "px-4", "py-3")
    }

});

function click_nav(nav) {
  my_links.forEach((element) => {
    if(element.classList.contains("border-primary", "border-2", "rounded-full")) {
      nav.classList.remove("border-primary", "border-2", "rounded-full");
    } else {
      nav.classList.remove("border-primary", "border-2", "rounded-full", "px-4", "py-3");
    }
  });
  nav.classList.add("border-primary", "border-2", "rounded-full");
}

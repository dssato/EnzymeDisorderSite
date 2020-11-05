document.addEventListener("scroll", e => {
    let scroll = window.scrollY;
    let navbar = document.getElementById("topnav");
    let content = document.getElementById("content");
    if(scroll > 344) {
        navbar.classList.add("navbar_main_fixed")
        content.classList.add("content_scrolled")
    } else {
        navbar.classList.remove("navbar_main_fixed")
        content.classList.remove("content_scrolled")
    }
})
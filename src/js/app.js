const burgerMenu = document.querySelector(".burger-menu");
const menuButton = document.querySelector(".burger-button");
const burgerMenuMask = document.querySelector(".burger-menu-mask");
const closeBtn = document.querySelector(".close-button")

menuButton.addEventListener("click", () => {
    burgerMenu.classList.add("active")
    burgerMenuMask.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active")
    burgerMenuMask.classList.remove("active")
})

burgerMenuMask.addEventListener("click", () => {
    burgerMenu.classList.remove("active")
    burgerMenuMask.classList.remove("active")
})


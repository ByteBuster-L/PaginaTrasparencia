document.addEventListener("DOMContentLoaded", () => {

const togglebutn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".nav-mobile"); 

const lol= () => {
    menu.style.display =
    menu.style.display === "none" || menu.style.display === "" ? "flex": "none";};



togglebutn.addEventListener("click", lol);

});



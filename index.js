//Menu lateral
const sideMenu = document.querySelector("aside");

//Botão Menu
const menuBtn = document.querySelector("#menu-btn");

//Botão Close fechar X 
const closeBtn = document.querySelector("#close-btn")

//Pra aparecer o menu
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})

//Pra esconder o menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display ='none';
})

//
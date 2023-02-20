//Menu lateral
const sideMenu = document.querySelector("aside");


//Botão Menu
const menuBtn = document.querySelector("#menu-btn");


//Botão Close fechar X 
const closeBtn = document.querySelector("#close-btn");


//Botão Tema Dark
const themeToggler = document.querySelector(".theme-toggler");


//Pra aparecer o menu
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
})


//Pra esconder o menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//Alterar o Tema Black&White
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    //Pra alterar o background do span do tema pra colocar no selecionado.
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

//Preenchendo a tabela de pedidos
Orders.forEach(order => {

    //Criar a linha TR
    const tr = document.createElement('tr');

    //Conteúdo da linha
    const trContent = `
                           <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="warning">${order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                            <td class="primary">Details</td>`;
                            
                            //
                            tr.innerHTML = trContent;
                            document.querySelector
                            
});
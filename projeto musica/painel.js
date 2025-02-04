
    // let currentIndex = 0;
    // const painéis = document.querySelectorAll('.conteudo-principal .titulo');
    // const btnVoltar = document.querySelector('.btn-voltar');
    // const btnAvancar = document.querySelector('.btn-avancar');

    // function atualizarCarrossel() {
    //     painéis.forEach((titulo, index) => {
    //         painel.classList.remove('mostrar');
    //         if (index === currentIndex) {
    //             painel.classList.add('mostrar');
    //         }
    //     });
    // }

    // btnVoltar.addEventListener('click', () => {
    //     currentIndex = (currentIndex === 0) ? titulo.length - 1 : currentIndex - 1;
    //     atualizarCarrossel();
    // });

    // btnAvancar.addEventListener('click', () => {
    //     currentIndex = (currentIndex === titulo.length - 1) ? 0 : currentIndex + 1;
    //     atualizarCarrossel();
    // });

    // // Inicializa o carrossel exibindo a primeira imagem
    // atualizarCarrossel();


    const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const box = document.querySelector(".slider")
const image = document.querySelector(".slider img")

let conter = 0;

function slider() {
    conter++;

    if(conter >= 3) {
       conter = 0; 
    }

    box.style.transform = `translateX(${-conter*800}px)`;
}

setInterval(slider, 4000);

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show');
});

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show');
});

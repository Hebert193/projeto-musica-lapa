
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


 //   const dropdown = document.querySelector('.dropdown');
//const dropdownContent = document.querySelector('.dropdown-content');
//const box = document.querySelector(".slider")
//const image = document.querySelector(".slider img")

//let conter = 0;

//function slider() {
 //   conter++;
//
 //   if(conter >= 3) {
 //      conter = 0; 
 //   }
//
 //   box.style.transform = `translateX(${-conter*800}px)`;
//}

//setInterval(slider, 4000);

//dropdown.addEventListener('mouseover', () => {
 //   dropdownContent.classList.add('show');
//});

//dropdown.addEventListener('mouseout', () => {
   // dropdownContent.classList.remove('show');
//});
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const box = document.querySelector(".slider")
const images = document.querySelectorAll(".slider img"); // Agora seleciona todas as imagens no carrossel

let conter = 0;

function slider() {
    conter++;

    if (conter >= images.length) { // Verifica o número total de imagens no carrossel
        conter = 0; 
        box.style.transition = 'none'; // Remove a animação durante a transição para a primeira imagem
        box.style.transform = `translateX(${-conter * 800}px)`; // Vai para a primeira imagem imediatamente
        setTimeout(() => {
            box.style.transition = 'transform 1s ease'; // Restaura a animação depois de um curto intervalo
        }, 50); // Um pequeno delay para garantir que a mudança ocorra antes de restaurar a animação
    } else {
        box.style.transform = `translateX(${-conter * 800}px)`; // Move normalmente para as próximas imagens
    }
}

setInterval(slider, 4000);

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show');
});

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show');
});


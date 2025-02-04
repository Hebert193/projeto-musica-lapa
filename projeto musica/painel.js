
    let currentIndex = 0;
    const painéis = document.querySelectorAll('.conteudo-principal .paineis .imagem-painel');
    const btnVoltar = document.querySelector('.btn-voltar');
    const btnAvancar = document.querySelector('.btn-avancar');

    function atualizarCarrossel() {
        painéis.forEach((painel, index) => {
            painel.classList.remove('mostrar');
            if (index === currentIndex) {
                painel.classList.add('mostrar');
            }
        });
    }

    btnVoltar.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? painéis.length - 1 : currentIndex - 1;
        atualizarCarrossel();
    });

    btnAvancar.addEventListener('click', () => {
        currentIndex = (currentIndex === painéis.length - 1) ? 0 : currentIndex + 1;
        atualizarCarrossel();
    });

    // Inicializa o carrossel exibindo a primeira imagem
    atualizarCarrossel();

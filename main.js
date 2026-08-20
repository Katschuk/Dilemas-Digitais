const reflexoes = {
    privacidade: "Se você não paga pelo produto, o produto é você. Até que ponto você aceita rastreamento por pura conveniência?",
    atencao: "Sua atenção gera lucro para as big techs. Quantas vezes você pegou o celular hoje sem um motivo real?",
    verdade: "A desinformação polariza sociedades. Você checa a fonte antes de compartilhar ou apenas consome o que reforça suas crenças?"
};

document.querySelectorAll('.btn-refletir').forEach(botao => {
    botao.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const tipoDilema = card.getAttribute('data-dilema');
        const titulo = card.querySelector('h3').innerText;
        
        const painel = document.getElementById('painel-reflexao');
        const txtReflexao = document.getElementById('texto-reflexao');
        const titReflexao = document.getElementById('titulo-reflexao');

        titReflexao.innerText = `Provocação: ${titulo}`;
        txtReflexao.innerText = reflexoes[tipoDilema];
        
        painel.classList.remove('escondido');
        painel.scrollIntoView({ behavior: 'smooth' });
    });
});

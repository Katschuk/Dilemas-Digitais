const dadosDilemas = {
    privacidade: {
        problema: "Empresas coletam dados de localização, histórico e conversas sem consentimento real, vendendo perfis para publicidade direcionada e vigilância em massa.",
        solucao: "Utilizar navegadores focados em privacidade (como Brave/Firefox), gerenciar permissões de apps, usar redes VPN confiáveis e apoiar leis rígidas de proteção de dados (como a LGPD)."
    },
    atencao: {
        problema: "Sistemas de rolagem infinita e notificações constantes alteram a química cerebral, reduzindo drasticamente nossa capacidade de concentração crônica e afetando o sono.",
        solucao: "Definir limites de tempo diários para apps de redes sociais, desativar notificações não essenciais, deixar a tela em escala de cinza e praticar períodos de detox digital."
    },
    verdade: {
        problema: "Algoritmos amplificam conteúdos falsos e sensacionalistas porque eles geram mais cliques. Isso destrói a confiança em instituições de saúde, ciência e imprensa.",
        solucao: "Sempre verificar fontes em agências de checagem, cruzar dados em portais diferentes antes de compartilhar e educar pessoas próximas sobre como identificar notícias falsas."
    }
};

document.querySelectorAll('.btn-analisar').forEach(botao => {
    botao.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const tipoDilema = card.getAttribute('data-dilema');
        const titulo = card.querySelector('h3').innerText;
        
        const painel = document.getElementById('painel-analise');
        const txtProblema = document.getElementById('texto-problema');
        const txtSolucao = document.getElementById('texto-solucao');
        const temaSelecionado = document.getElementById('tema-selecionado');

        // Atualiza os textos no painel
        temaSelecionado.innerText = `Análise de Caso: ${titulo}`;
        txtProblema.innerText = dadosDilemas[tipoDilema].problema;
        txtSolucao.innerText = dadosDilemas[tipoDilema].solucao;
        
        // Exibe o painel na tela com rolagem suave
        painel.classList.remove('escondido');
        painel.scrollIntoView({ behavior: 'smooth' });
    });
});

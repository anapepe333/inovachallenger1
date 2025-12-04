// Banco de dados de produtos
const produtos = [
    {
        id: 1,
        emoji: '🪨',
        nome: 'Pedra de Estimação',
        descricao: 'Uma pedra comum que não faz absolutamente nada. Perfeita para observar.',
        preco: 49.90,
        descricaoCompleta: [
            'Apresentamos a revolucionária Pedra de Estimação! Este produto inovador não faz absolutamente nada, e é exatamente por isso que é perfeito.',
            'Diferente de outros animais de estimação, esta pedra não precisa de comida, água, passeios ou atenção. Ela apenas existe, silenciosamente, adicionando peso desnecessário à sua vida.'
        ],
        caracteristicas: [
            'Completamente inútil',
            'Não requer manutenção',
            'Nunca morre (porque nunca viveu)',
            'Não faz barulho',
            'Hipoalergênica',
            'Peso aproximado: Pesado',
            'Cor: Cinza (pode variar)',
            'Cada pedra é única (mas todas são pedras)'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'João Silva', texto: 'Comprei essa pedra e ela não fez nada. Exatamente como prometido. 5 estrelas!' },
            { estrelas: 5, nome: 'Maria Santos', texto: 'Melhor compra da minha vida. Agora tenho uma pedra e não sei o que fazer com ela.' },
            { estrelas: 4, nome: 'Pedro Costa', texto: 'Boa pedra, mas esperava que fosse mais inútil. 4 estrelas.' }
        ]
    },
    {
        id: 2,
        emoji: '📦',
        nome: 'Caixa Vazia Premium',
        descricao: 'Uma caixa vazia de alta qualidade. Não acompanha nada dentro porque é literalmente vazia.',
        preco: 79.90,
        descricaoCompleta: [
            'A Caixa Vazia Premium é o ápice da inutilidade sofisticada. Fabricada com os melhores materiais para conter absolutamente nada.',
            'Perfeita para quem quer guardar o vazio existencial de forma elegante. Não inclui manual de instruções porque não há nada a ser feito.'
        ],
        caracteristicas: [
            '100% vazia (garantido)',
            'Material: Papelão premium',
            'Conteúdo: Nada',
            'Pode ser usada para guardar outras coisas inúteis',
            'Ecologicamente questionável',
            'Dimensões: Varia',
            'Vem lacrada (mas continua vazia)',
            'Certificado de autenticidade de vazio'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Ana Lima', texto: 'Recebi a caixa e estava realmente vazia! Impressionante!' },
            { estrelas: 5, nome: 'Carlos Mendes', texto: 'Finalmente posso guardar meu vazio interior em algum lugar.' },
            { estrelas: 3, nome: 'Beatriz Souza', texto: 'Esperava uma caixa maior. 3 estrelas pelo tamanho decepcionante.' }
        ]
    },
    {
        id: 3,
        emoji: '🔌',
        nome: 'Cabo USB Desconectado',
        descricao: 'Um cabo que não conecta a nada e não carrega nada. Arte moderna funcional.',
        preco: 35.90,
        descricaoCompleta: [
            'Este cabo USB revolucionário não se conecta a absolutamente nada. Nem USB-A, nem USB-C, nem USB do futuro.',
            'Perfeito para quem quer fingir que está carregando algo importante ou simplesmente apreciar a estética de um cabo sem propósito.'
        ],
        caracteristicas: [
            'Não carrega nada',
            'Não conecta a nada',
            'Comprimento: Irrelevante',
            'Compatível com: Nada',
            'Velocidade de transferência: 0 Mbps',
            'Garantia vitalícia (porque nunca vai quebrar fazendo nada)',
            'Design minimalista',
            'Pode ser usado como corda (mas não recomendamos)'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Roberto Tech', texto: 'Como especialista em tecnologia, confirmo: este cabo não faz nada.' },
            { estrelas: 5, nome: 'Júlia Martins', texto: 'Uso diariamente para não carregar meu celular. Funciona perfeitamente!' },
            { estrelas: 5, nome: 'Fernando Dias', texto: 'Cabo excelente. Não conectou em nada como prometido.' }
        ]
    },
    {
        id: 4,
        emoji: '💡',
        nome: 'Lâmpada Queimada Edição Limitada',
        descricao: 'Já vem queimada de fábrica. Economize o trabalho de queimá-la você mesmo!',
        preco: 25.90,
        descricaoCompleta: [
            'Nossa Lâmpada Queimada Edição Limitada vem pré-queimada de fábrica, economizando anos de uso desnecessário.',
            'Ideal para quem quer a estética de uma lâmpada sem a chatice de ter luz. Cada unidade é testada para garantir que não acende.'
        ],
        caracteristicas: [
            'Pré-queimada de fábrica',
            'Não emite luz (nunca)',
            'Potência: 0W',
            'Vida útil: Já acabou',
            'Soquete: E27 (mas tanto faz)',
            'Temperatura da cor: Inexistente',
            'Consumo de energia: Zero',
            'Certificada como não-funcional'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Marcos Luz', texto: 'Instalei e não funcionou. Produto perfeito!' },
            { estrelas: 4, nome: 'Patricia Neves', texto: 'Quase acendeu uma vez. Tirei uma estrela por isso.' },
            { estrelas: 5, nome: 'Ricardo Santos', texto: 'Economizei na conta de luz. Zero consumo!' }
        ]
    },
    {
        id: 5,
        emoji: '📱',
        nome: 'Tela de Celular Rachada',
        descricao: 'Para você fingir que quebrou seu celular novo. Ótimo para evitar emprestar.',
        preco: 59.90,
        descricaoCompleta: [
            'A Tela de Celular Rachada é uma película adesiva que simula uma tela quebrada. Perfeita para evitar que amigos peçam emprestado seu celular.',
            'Aplicação fácil e remoção ainda mais fácil. Agora você pode ter a experiência de um celular quebrado sem o prejuízo real!'
        ],
        caracteristicas: [
            'Simula tela rachada',
            'Adesivo removível',
            'Não afeta o touch (porque não é quebra real)',
            'Universal (serve em qualquer celular)',
            'Causa desconforto visual',
            'Espanta amigos pedintes',
            'Fácil aplicação',
            'Vem com manual de "Como fingir tristeza"'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Amanda Rocha', texto: 'Ninguém mais pede meu celular emprestado. Genial!' },
            { estrelas: 5, nome: 'Bruno Alves', texto: 'Minha mãe achou que eu quebrei o celular novo. Funcionou demais!' },
            { estrelas: 5, nome: 'Carla Freitas', texto: 'Melhor investimento. Meu celular está seguro de curiosos.' }
        ]
    },
    {
        id: 6,
        emoji: '🎮',
        nome: 'Controle Sem Botões',
        descricao: 'Apenas segure. Não controla nada. Perfeito para contemplação.',
        preco: 89.90,
        descricaoCompleta: [
            'O Controle Sem Botões é uma obra-prima da inutilidade eletrônica. Ergonômico, bonito, mas completamente não-funcional.',
            'Ideal para fotos no Instagram fingindo que você está jogando, ou apenas para segurar enquanto pondera sobre o sentido da vida.'
        ],
        caracteristicas: [
            'Zero botões',
            'Não conecta via Bluetooth, USB ou telepatia',
            'Bateria: Não tem',
            'Compatível com: Nenhum console',
            'Peso: Leve mas inútil',
            'Design ergonômico (para segurar e nada mais)',
            'LED falso que não acende',
            'Analógicos decorativos imóveis'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Diego Gamer', texto: 'Finalmente posso fingir que sou gamer sem jogar nada.' },
            { estrelas: 5, nome: 'Elena Costa', texto: 'Uso para meditar. Muito relaxante não fazer nada.' },
            { estrelas: 5, nome: 'Felipe Ramos', texto: 'Meus amigos acham que estou jogando. Não estou. Perfeito.' }
        ]
    },
    {
        id: 7,
        emoji: '🔑',
        nome: 'Chave Sem Fechadura',
        descricao: 'Uma chave bonita que não abre nada. Perfeita para colecionadores de inutilidades.',
        preco: 42.90,
        descricaoCompleta: [
            'Esta chave metálica não abre nada, não fecha nada, não gira em nada. É apenas uma chave.',
            'Perfeita para carregar no bolso e sentir o peso da inutilidade literal.'
        ],
        caracteristicas: [
            'Não abre nenhuma porta',
            'Não abre nenhuma fechadura',
            'Material: Metal inútil',
            'Pode arranhar coisas',
            'Peso: Suficiente para incomodar no bolso',
            'Formato: De chave (mas inútil)',
            'Pode ser usada como enfeite',
            'Não vem com chaveiro (seria útil demais)'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Gabriel Locks', texto: 'Não abre nada mesmo. 5 estrelas!' },
            { estrelas: 4, nome: 'Helena Silva', texto: 'Bonita, mas esperava mais inutilidade.' },
            { estrelas: 5, nome: 'Igor Pinto', texto: 'Carrego no bolso e as pessoas acham que tenho responsabilidades.' }
        ]
    },
    {
        id: 8,
        emoji: '🎨',
        nome: 'Tinta Invisível',
        descricao: 'Tinta que você não consegue ver. Ideal para arte conceitual.',
        preco: 67.90,
        descricaoCompleta: [
            'Nossa Tinta Invisível é perfeita para artistas conceituais e pessoas que gostam de fingir que estão pintando.',
            'Seca instantaneamente (porque não existe) e não mancha roupas (porque não existe). A tinta perfeita!'
        ],
        caracteristicas: [
            'Completamente invisível',
            'Não mancha',
            'Não seca (porque não molha)',
            'Volume: 500ml de ar',
            'Cor: Transparente absoluto',
            'À base de nada',
            'Atóxica (obviamente)',
            'Ideal para pintar o invisível'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Julia Artista', texto: 'Pintei uma tela inteira e ficou invisível. Incrível!' },
            { estrelas: 5, nome: 'Kevin Brown', texto: 'Não consigo ver a tinta. Produto funciona!' },
            { estrelas: 5, nome: 'Laura Moraes', texto: 'Arte moderna no seu auge. Adoro!' }
        ]
    },
    {
        id: 9,
        emoji: '⏰',
        nome: 'Relógio Sem Ponteiros',
        descricao: 'Não marca as horas. Afinal, tempo é relativo.',
        preco: 95.90,
        descricaoCompleta: [
            'O Relógio Sem Ponteiros é uma reflexão filosófica sobre a natureza do tempo. Ou apenas um relógio sem ponteiros.',
            'Use no pulso para causar confusão quando alguém perguntar as horas. Você não vai saber porque ele não marca!'
        ],
        caracteristicas: [
            'Sem ponteiros',
            'Não marca horas, minutos ou segundos',
            'Bateria: Opcional (não faz diferença)',
            'À prova d\'água (mas não de inutilidade)',
            'Estilo: Minimalista extremo',
            'Mecanismo: Inexistente',
            'Pulseira ajustável',
            'Certificado de não-precisão'
        ],
        avaliacoes: [
            { estrelas: 5, nome: 'Miguel Tempo', texto: 'Nunca mais me atrasei porque nunca sei que horas são!' },
            { estrelas: 5, nome: 'Nina Oliveira', texto: 'Uso para impressionar. Ninguém entende mas todos admiram.' },
            { estrelas: 5, nome: 'Oscar Silva', texto: 'Finalmente livre da tirania do tempo!' }
        ]
    }
];

let paginaAtual = 'inicio';
let produtoAnterior = null;

// Função para mostrar páginas
function mostrarPagina(pagina) {
    // Esconder todas as páginas
    document.querySelectorAll('.pagina').forEach(p => p.style.display = 'none');
    
    // Mostrar página selecionada
    document.getElementById('pagina-' + pagina).style.display = 'block';
    
    paginaAtual = pagina;
    window.scrollTo(0, 0);
}

// Função para criar card de produto
function criarCardProduto(produto) {
    return `
        <div class="produto">
            <div class="produto-img">${produto.emoji}</div>
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <div class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
            <button class="btn" onclick="mostrarDetalhes(${produto.id})">Ver Detalhes</button>
        </div>
    `;
}

// Função para mostrar detalhes do produto
function mostrarDetalhes(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    
    produtoAnterior = paginaAtual;
    
    // Preencher informações
    document.getElementById('produto-emoji').textContent = produto.emoji;
    document.getElementById('produto-nome').textContent = produto.nome;
    document.getElementById('produto-preco').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    
    // Descrição completa
    const descricaoHTML = produto.descricaoCompleta.map(p => `<p>${p}</p>`).join('');
    document.getElementById('produto-descricao-texto').innerHTML = descricaoHTML;
    
    // Características
    const caracteristicasHTML = produto.caracteristicas.map(c => `<li>✓ ${c}</li>`).join('');
    document.getElementById('produto-caracteristicas-lista').innerHTML = caracteristicasHTML;
    
    // Avaliações
    const avaliacoesHTML = produto.avaliacoes.map(a => `
        <div class="avaliacao">
            <strong>${'★'.repeat(a.estrelas)}${'☆'.repeat(5-a.estrelas)}</strong> - ${a.nome}
            <p>"${a.texto}"</p>
        </div>
    `).join('');
    document.getElementById('produto-avaliacoes-lista').innerHTML = avaliacoesHTML;
    
    mostrarPagina('produto');
}

// Função para voltar da página de produto
function voltarProdutos() {
    mostrarPagina(produtoAnterior || 'inicio');
}

// Carregar produtos na página inicial
function carregarProdutosInicio() {
    const container = document.getElementById('produtos-inicio');
    const produtosDestaque = produtos.slice(0, 6);
    container.innerHTML = produtosDestaque.map(criarCardProduto).join('');
}

// Carregar todos os produtos na página de produtos
function carregarTodosProdutos() {
    const container = document.getElementById('produtos-catalogo');
    container.innerHTML = produtos.map(criarCardProduto).join('');
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutosInicio();
    carregarTodosProdutos();
});
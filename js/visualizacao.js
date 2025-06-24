// Carrega as necessidades do localStorage
let necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];

// Exibe as necessidades em formato de cards na página
function exibirNecessidades(lista) {
  const container = document.getElementById('listaNecessidades');
  container.innerHTML = ''; // Limpa o container antes de exibir

  // Cria um card para cada necessidade
  lista.forEach(necessidade => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${necessidade.titulo}</h3>
      <p><strong>Instituição:</strong> ${necessidade.nomeInstituicao}</p>
      <p><strong>Tipo de Ajuda:</strong> ${necessidade.tipoAjuda}</p>
      <p><strong>Descrição:</strong> ${necessidade.descricao}</p>
      <p><strong>Endereço:</strong> ${necessidade.rua}, ${necessidade.bairro}, ${necessidade.cidade} - ${necessidade.estado}</p>
      <p><strong>Contato:</strong> ${necessidade.contato}</p>
    `;
    container.appendChild(card);
  });

  // Exibe mensagem se não houver resultados
  if (lista.length === 0) {
    container.innerHTML = '<p>Nenhuma necessidade encontrada.</p>';
  }
}

// Filtra e pesquisa as necessidades com base nos inputs do usuário
function filtrarEPesquisar() {
  const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
  const filtroTipo = document.getElementById('filtroTipo').value;

  let resultados = necessidades;

  // Aplica filtro por tipo de ajuda, se selecionado
  if (filtroTipo) {
    resultados = resultados.filter(n => n.tipoAjuda === filtroTipo);
  }

  // Aplica pesquisa por palavra-chave no título ou descrição
  if (pesquisa) {
    resultados = resultados.filter(n =>
      n.titulo.toLowerCase().includes(pesquisa) ||
      n.descricao.toLowerCase().includes(pesquisa)
    );
  }

  exibirNecessidades(resultados);
}

// Limpa todas as necessidades do localStorage e atualiza a exibição
function limparNecessidades() {
  // Remove a chave 'necessidades' do localStorage
  localStorage.removeItem('necessidades');
  // Atualiza o array global
  necessidades = [];
  // Exibe mensagem de sucesso no DOM
  const container = document.getElementById('listaNecessidades');
  container.innerHTML = '<p class="mensagem-sucesso">Todas as necessidades foram limpas!</p>';
  // Reseta os filtros
  document.getElementById('pesquisa').value = '';
  document.getElementById('filtroTipo').value = '';
  // Remove a mensagem após 3 segundos
  setTimeout(() => {
    exibirNecessidades(necessidades);
  }, 3000);
}

// Inicializa a exibição com todas as necessidades
exibirNecessidades(necessidades);

// Adiciona eventos para atualizar a exibição em tempo real
document.getElementById('pesquisa').addEventListener('input', filtrarEPesquisar);
document.getElementById('filtroTipo').addEventListener('change', filtrarEPesquisar);
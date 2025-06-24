// Carrega as necessidades do localStorage
let necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];

// Função para exibir as necessidades em cards
function exibirNecessidades(lista) {
  const container = document.getElementById('listaNecessidades');
  container.innerHTML = ''; // Limpa o container

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

  // Exibe mensagem se não houver necessidades
  if (lista.length === 0) {
    container.innerHTML = '<p>Nenhuma necessidade encontrada.</p>';
  }
}

// Função para filtrar e pesquisar
function filtrarEPesquisar() {
  const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
  const filtroTipo = document.getElementById('filtroTipo').value;

  let resultados = necessidades;

  // Aplica filtro por tipo de ajuda
  if (filtroTipo) {
    resultados = resultados.filter(n => n.tipoAjuda === filtroTipo);
  }

  // Aplica pesquisa por palavra-chave
  if (pesquisa) {
    resultados = resultados.filter(n =>
      n.titulo.toLowerCase().includes(pesquisa) ||
      n.descricao.toLowerCase().includes(pesquisa)
    );
  }

  exibirNecessidades(resultados);
}

// Inicializa a exibição
exibirNecessidades(necessidades);

// Adiciona eventos para pesquisa e filtro
document.getElementById('pesquisa').addEventListener('input', filtrarEPesquisar);
document.getElementById('filtroTipo').addEventListener('change', filtrarEPesquisar);
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
}

// Função para pesquisar
function pesquisarNecessidades() {
  const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
  const resultados = necessidades.filter(n =>
    n.titulo.toLowerCase().includes(pesquisa) ||
    n.descricao.toLowerCase().includes(pesquisa)
  );
  exibirNecessidades(resultados);
}

// Inicializa a exibição
exibirNecessidades(necessidades);

// Adiciona evento de pesquisa
document.getElementById('pesquisa').addEventListener('input', pesquisarNecessidades);
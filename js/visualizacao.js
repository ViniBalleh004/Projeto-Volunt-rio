// Carrega as necessidades do localStorage
let necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];

// Função para exibir as necessidades em cards
function exibirNecessidades() {
  const container = document.getElementById('listaNecessidades');
  container.innerHTML = ''; // Limpa o container

  necessidades.forEach(necessidade => {
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

// Inicializa a exibição
exibirNecessidades();
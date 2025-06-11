// Array global para armazenar necessidades (carregado do localStorage, se existir)
let necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];

// Função para validar e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para validar telefone (ex.: (XX) XXXXX-XXXX ou XXXXXXXXXXX)
function validarTelefone(telefone) {
  const regex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$|^\d{10,11}$/;
  return regex.test(telefone);
}

// Função para buscar endereço via API ViaCEP
function buscarCEP() {
  // Remove caracteres não numéricos do CEP
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  if (cep.length !== 8) {
    alert('Por favor, insira um CEP válido com 8 dígitos.');
    return;
  }

  // Faz requisição à API ViaCEP
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }
      // Preenche os campos de endereço
      document.getElementById('rua').value = data.logradouro || '';
      document.getElementById('bairro').value = data.bairro || '';
      document.getElementById('cidade').value = data.localidade || '';
      document.getElementById('estado').value = data.uf || '';
    })
    .catch(error => {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao consultar o CEP. Tente novamente.');
    });
}

// Manipula o envio do formulário
document.getElementById('formNecessidade').addEventListener('submit', (e) => {
  e.preventDefault();

  // Captura os valores dos campos
  const nomeInstituicao = document.getElementById('nomeInstituicao').value.trim();
  const tipoAjuda = document.getElementById('tipoAjuda').value;
  const titulo = document.getElementById('titulo').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();
  const contato = document.getElementById('contato').value.trim();

  // Validação dos campos obrigatórios
  if (!nomeInstituicao || !tipoAjuda || !titulo || !descricao || !cep || !contato) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Validação do contato (e-mail ou telefone)
  if (!validarEmail(contato) && !validarTelefone(contato)) {
    alert('Por favor, insira um e-mail ou telefone válido.');
    return;
  }

  // Validação do CEP
  if (cep.replace(/\D/g, '').length !== 8) {
    alert('Por favor, insira um CEP válido com 8 dígitos.');
    return;
  }

  // Cria objeto da necessidade
  const necessidade = {
    id: Date.now(), // ID único baseado no timestamp
    nomeInstituicao,
    tipoAjuda,
    titulo,
    descricao,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    contato
  };

  // Adiciona ao array e salva no localStorage
  necessidades.push(necessidade);
  localStorage.setItem('necessidades', JSON.stringify(necessidades));

  alert('Necessidade cadastrada com sucesso!');
  document.getElementById('formNecessidade').reset();
});
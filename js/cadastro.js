// Array global para armazenar necessidades
let necessidades = [];

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
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  if (cep.length !== 8) {
    alert('Por favor, insira um CEP válido com 8 dígitos.');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }
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

  // Lógica de armazenamento será implementada
});
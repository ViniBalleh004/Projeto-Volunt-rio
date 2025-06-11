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

  // Lógica de armazenamento será implementada
});
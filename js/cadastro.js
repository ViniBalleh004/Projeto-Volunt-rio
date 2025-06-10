// Array global para armazenar necessidades
let necessidades = [];

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

  // Lógica de armazenamento será implementada
});
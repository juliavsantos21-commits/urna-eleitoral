document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-cadastro');
  const cpfInput = document.getElementById('cpf');

  // Máscara para formatação do CPF (000.000.000-00)
  cpfInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.target.value = value;
  });

  // Guardar dados e iniciar votação
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = cpfInput.value;

    if (nome && cpf) {
      // Regista o eleitor no localStorage
      localStorage.setItem('eleitor', JSON.stringify({ nome, cpf }));
      localStorage.setItem('votos', JSON.stringify({}));

      // Redireciona para o primeiro cargo (Deputado Federal)
      window.location.href = 'deputado federal.html';
    }
  });
});
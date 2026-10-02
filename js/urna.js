// Avatar SVG de reserva (garante que o ecrã nunca fica em branco se a imagem não existir)
const FOTO_PADRAO = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='180' viewBox='0 0 150 180'><rect width='100%' height='100%' fill='%23e0e0e0'/><circle cx='75' cy='60' r='32' fill='%239e9e9e'/><path d='M 25 145 C 25 105, 125 105, 125 145 Z' fill='%239e9e9e'/><text x='75' y='170' font-size='11' text-anchor='middle' fill='%23666666' font-family='sans-serif'>CANDIDATO 2026</text></svg>";

const CANDIDATOS = {
  'DEPUTADO ESTADUAL': {
    digitos: 5,
    proximaPagina: 'deputado federal.html',
    candidatos: {
      '44444': { 
        nome: 'Cristiano Cavalcante', 
        partido: 'UNIÃO', 
        foto: 'dep-est-44444.jpg' 
      },
      '15111': { 
        nome: 'Dr. Gilson Andrade', 
        partido: 'MDB', 
        foto: 'dep-est-15111.jpg' 
      },
      '44777': { 
        nome: 'Netinho Guimarães', 
        partido: 'UNIÃO', 
        foto: 'dep-est-44777.jpg' 
      },
      '13555': { 
        nome: 'Padre Inaldo', 
        partido: 'PT', 
        foto: 'dep-est-13555.jpg' 
      },
      '44744': { 
        nome: 'Pastor Diego', 
        partido: 'UNIÃO', 
        foto: 'dep-est-44744.jpg' 
      },
      '10666': { 
        nome: 'Nivaldo da Bala', 
        partido: 'REPUBLICANOS', 
        foto: 'dep-est-10666.jpg' 
      }
    }
  },
  'DEPUTADO FEDERAL': {
    digitos: 4,
    proximaPagina: 'senador.html',
    candidatos: {
      '5555': { 
        nome: 'Fábio Reis', 
        partido: 'PSD', 
        foto: 'dep-fed-5555.jpg' 
      },
      '5505': { 
        nome: 'Delegada Katarina', 
        partido: 'PSD', 
        foto: 'dep-fed-5505.jpg' 
      },
      '1077': { 
        nome: 'Dra. Clécia', 
        partido: 'REPUBLICANOS', 
        foto: 'dep-fed-1077.jpg' 
      },
      '4422': { 
        nome: 'Capitão Samuel', 
        partido: 'UNIÃO', 
        foto: 'dep-fed-4422.jpg' 
      },
      '4004': { 
        nome: 'Breno Garibalde', 
        partido: 'PSB', 
        foto: 'dep-fed-4004.jpg' 
      },
      '2201': { 
        nome: 'Delegado Augusto César', 
        partido: 'PL', 
        foto: 'dep-fed-2201.jpg' 
      },
      '2333': { 
        nome: 'Dra. Jeanne Lima', 
        partido: 'CIDADANIA', 
        foto: 'dep-fed-2333.jpg' 
      },
      '2066': { 
        nome: 'André Santana', 
        partido: 'PODE', 
        foto: 'dep-fed-2066.jpg' 
      },
      '2777': { 
        nome: 'Gilmar da Estância', 
        partido: 'DC', 
        foto: 'dep-fed-2777.jpg' 
      }
    }
  },
  'SENADOR': {
    digitos: 3,
    proximaPagina: 'governador.html',
    candidatos: {
      '155': { 
        nome: 'Delegado Alessandro', 
        partido: 'MDB', 
        suplente: 'A definir', 
        foto: 'sen-155.jpg' 
      },
      '444': { 
        nome: 'André Moura', 
        partido: 'UNIÃO', 
        suplente: 'A definir', 
        foto: 'sen-444.jpg' 
      },
      '100': { 
        nome: 'Eduardo Amorim', 
        partido: 'REPUBLICANOS', 
        suplente: 'A definir', 
        foto: 'sen-100.jpg' 
      },
      '131': { 
        nome: 'Rogério Carvalho', 
        partido: 'PT', 
        suplente: 'A definir', 
        foto: 'sen-131.jpg' 
      },
      '123': { 
        nome: 'Edvaldo (Nogueira)', 
        partido: 'PDT', 
        suplente: 'A definir', 
        foto: 'sen-123.jpg' 
      },
      '221': { 
        nome: 'Coronel Rocha', 
        partido: 'PL', 
        suplente: 'A definir', 
        foto: 'sen-221.jpg' 
      },
      '101': { 
        nome: 'Delegado André David', 
        partido: 'REPUBLICANOS', 
        suplente: 'A definir', 
        foto: 'sen-101.jpg' 
      },
      '222': { 
        nome: 'Rodrigo Valadares', 
        partido: 'PL', 
        suplente: 'A definir', 
        foto: 'sen-222.jpg' 
      },
      '277': { 
        nome: 'Renatinha', 
        partido: 'DC', 
        suplente: 'A definir', 
        foto: 'sen-277.jpg' 
      }
    }
  },
  'GOVERNADOR': {
    digitos: 2,
    proximaPagina: 'presidente.html',
    candidatos: {
      '55': { 
        nome: 'Fábio (Mitidieri)', 
        partido: 'PSD', 
        vice: 'A definir', 
        foto: 'gov-55.jpg' 
      },
      '10': { 
        nome: 'Valmir de Francisquinho', 
        partido: 'REPUBLICANOS', 
        vice: 'A definir', 
        foto: 'gov-10.jpg' 
      },
      '22': { 
        nome: 'Ricardo Marques', 
        partido: 'PL', 
        vice: 'A definir', 
        foto: 'gov-22.jpg' 
      },
      '45': { 
        nome: 'Emanuel Cacho', 
        partido: 'PSDB', 
        vice: 'A definir', 
        foto: 'gov-45.jpg' 
      },
      '50': { 
        nome: 'Dr. Helton', 
        partido: 'PSOL', 
        vice: 'A definir', 
        foto: 'gov-50.jpg' 
      },
      '27': { 
        nome: 'Taty Cristina de Jesus', 
        partido: 'DC', 
        vice: 'A definir', 
        foto: 'gov-27.jpg' 
      }
    }
  },
  'PRESIDENTE DA REPÚBLICA': {
    digitos: 2,
    proximaPagina: 'tela final.html',
    candidatos: {
      '13': { 
        nome: 'Lula', 
        partido: 'PT', 
        vice: 'Geraldo Alckmin', 
        foto: 'img/imgCandEl.src = candidato.foto.jpg' 
      },
      '22': { 
        nome: 'Flávio Bolsonaro', 
        partido: 'PL', 
        vice: ' Alfredo Gaspar', 
        foto: 'pres-22.jpg' 
      },
      '30': { 
        nome: 'Romeu Zema (Zema)', 
        partido: 'NOVO', 
        vice: 'Eduardo Girão', 
        foto: 'pres-30.jpg' 
      },
      '55': { 
        nome: 'Ronaldo Caiado', 
        partido: 'PSD', 
        vice: 'Gilberto Kassab', 
        foto: 'pres-55.jpg' 
      },
      '70': { 
        nome: 'Escritor Augusto Cury', 
        partido: 'AVANTE', 
        vice: 'Júlio Delgado', 
        foto: 'pres-70.jpg' 
      },
      '14': { 
        nome: 'Renan Santos', 
        partido: 'MISSÃO', 
        vice: 'Coronel Medina', 
        foto: 'pres-14.jpg' 
      },
      '21': { 
        nome: 'Edmilson Costa', 
        partido: 'PCB', 
        vice: 'A definir', 
        foto: 'pres-21.jpg' 
      },
      '16': { 
        nome: 'Hertz Dias', 
        partido: 'PSTU', 
        vice: 'A definir', 
        foto: 'pres-16.jpg' 
      },
      '80': { 
        nome: 'Samara', 
        partido: 'UP', 
        vice: 'A definir', 
        foto: 'pres-80.jpg' 
      },
      '35': { 
        nome: 'Veterinário Wilson Grassi', 
        partido: 'DEMOCRATA', 
        vice: 'A definir', 
        foto: 'pres-35.jpg' 
      },
      '27': { 
        nome: 'Clariana Barão', 
        partido: 'DC', 
        vice: 'A definir', 
        foto: 'pres-27.jpg' 
      },
      '29': { 
        nome: 'Rui Costa Pimenta', 
        partido: 'PCO', 
        vice: 'A definir', 
        foto: 'pres-29.jpg' 
      },
      '28': { 
        nome: 'Leonardo Avalanche', 
        partido: 'PRTB', 
        vice: 'A definir', 
        foto: 'pres-28.jpg' 
      }
    }
  }
};

let numeroDigitado = '';
let isBranco = false;

document.addEventListener('DOMContentLoaded', () => {
    // SOM DA URNA
  const somTecla = document.getElementById('som-tecla');

  function tocarSomTecla() {
    if (!somTecla) return;

    somTecla.currentTime = 0;

    somTecla.play().catch(erro => {
      console.log('Não foi possível reproduzir o som:', erro);
    });
  }

  const cargoTituloEl = document.querySelector('.cargo-nome');
  if (!cargoTituloEl) return;

  const cargoAtual = cargoTituloEl.innerText.trim();
  const configCargo = CANDIDATOS[cargoAtual];

  if (!configCargo) return;

  const boxes = document.querySelectorAll('.boxes-numero .box-num');
  const maxDigitos = configCargo.digitos;

  const dadosCandidatoEl = document.getElementById('dados-candidato');
  const msgVotoEl = document.getElementById('msg-voto');
  const textoMsgEl = document.getElementById('texto-msg');
  const containerFotoEl = document.getElementById('container-foto');

  const nomeCandEl = document.getElementById('nome-cand');
  const partidoCandEl = document.getElementById('partido-cand');
  const viceCandEl = document.getElementById('vice-cand');
  const suplenteCandEl = document.getElementById('suplente-cand');
  const imgCandEl = document.getElementById('img-candidato');

  // Teclado Numérico
  document.querySelectorAll('.btn-num').forEach(btn => {
  btn.addEventListener('click', () => {
    inserirNumero(btn.innerText);
  });
});

  // Botão BRANCO
  const btnBranco = document.querySelector('.btn-branco');

  if (btnBranco) {
    btnBranco.addEventListener('click', () => {
      if (numeroDigitado === '') {
        isBranco = true;
        limparEcra();

        if (msgVotoEl) msgVotoEl.classList.remove('hidden');
        if (textoMsgEl) textoMsgEl.innerText = "VOTO EM BRANCO";
      }
  });
}


  // Botão CORRIGE
  const btnCorrige = document.querySelector('.btn-corrige');

if (btnCorrige) {
  btnCorrige.addEventListener('click', () => {
    corrigir();
  });
}


  // Botão CONFIRMA
  const btnConfirma = document.querySelector('.btn-confirma');

if (btnConfirma) {
  btnConfirma.addEventListener('click', () => {

    tocarSomTecla();

    if (isBranco || numeroDigitado.length === maxDigitos) {
      salvarEVotar();
    }

  });
}


  function inserirNumero(num) {
    if (isBranco || numeroDigitado.length >= maxDigitos) return;

    numeroDigitado += num;
    if (boxes[numeroDigitado.length - 1]) {
      boxes[numeroDigitado.length - 1].innerText = num;
    }

    if (numeroDigitado.length === maxDigitos) {
      buscarCandidato();
    }
  }

  function buscarCandidato() {
    const candidato = configCargo.candidatos[numeroDigitado];

    if (candidato) {
      if (nomeCandEl) nomeCandEl.innerText = candidato.nome;
      if (partidoCandEl) partidoCandEl.innerText = candidato.partido;
      if (viceCandEl && candidato.vice) viceCandEl.innerText = candidato.vice;
      if (suplenteCandEl && candidato.suplente) suplenteCandEl.innerText = candidato.suplente;

      if (imgCandEl) {
        imgCandEl.setAttribute('referrerpolicy', 'no-referrer');
        delete imgCandEl.dataset.tentativa;

        // Se a imagem no computador falhar, carrega o avatar padrão do sistema
        imgCandEl.onerror = function() {
          if (!this.dataset.tentativa && candidato.foto && !candidato.foto.startsWith('http')) {
            this.dataset.tentativa = 'raiz';
            this.src = 'img/' + candidato.foto;
          } else {
            this.src = FOTO_PADRAO;
          }
        };

        if (candidato.foto && (candidato.foto.startsWith('http://') || candidato.foto.startsWith('https://'))) {
          imgCandEl.src = candidato.foto;
        } else if (candidato.foto) {
          imgCandEl.src = '../img/' + candidato.foto;
        } else {
          imgCandEl.src = FOTO_PADRAO;
        }
      }

      // Exibe as informações do candidato e a caixa de foto
      if (dadosCandidatoEl) dadosCandidatoEl.classList.remove('hidden');
      if (containerFotoEl) {
        containerFotoEl.classList.remove('hidden');
        containerFotoEl.style.display = 'block';
      }
    } else {
      if (msgVotoEl) msgVotoEl.classList.remove('hidden');
      if (textoMsgEl) textoMsgEl.innerText = "VOTO NULO";
    }
  }

  function corrigir() {
    numeroDigitado = '';
    isBranco = false;
    boxes.forEach(box => box.innerText = '');
    limparEcra();
  }

  function limparEcra() {
    if (dadosCandidatoEl) dadosCandidatoEl.classList.add('hidden');
    if (msgVotoEl) msgVotoEl.classList.add('hidden');
    if (containerFotoEl) {
      containerFotoEl.classList.add('hidden');
      containerFotoEl.style.display = 'none';
    }
  }

  function salvarEVotar() {
    const votos = JSON.parse(localStorage.getItem('votos') || '{}');
    
    if (isBranco) {
      votos[cargoAtual] = 'BRANCO';
    } else if (configCargo.candidatos[numeroDigitado]) {
      votos[cargoAtual] = numeroDigitado;
    } else {
      votos[cargoAtual] = 'NULO';
    }

    localStorage.setItem('votos', JSON.stringify(votos));

    if (configCargo.proximaPagina) {
      window.location.href = configCargo.proximaPagina;
    }
  }
});


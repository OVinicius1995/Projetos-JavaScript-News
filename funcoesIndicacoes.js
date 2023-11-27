const openModal           = document.getElementById('showModal');
const openModalUpdateNews = document.getElementById('showModalCorrigir');


function openModalNew(){
  openModal.classList.toggle('active');
}

function closeModalNew(){
  openModal.classList.remove('active');
}

function openModalUpdate(){
  openModalUpdateNews.classList.toggle('active');
}

function closeModalUpdate(){
  openModalUpdateNews.classList.remove('active');
}

const dataHora = new Date();

const zeroFill = n => {
  return ('0' + n).slice(-2);
}

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

  // Exibe na tela usando a div#data-hora
  document.getElementById('dataHora').innerHTML = dataHora;
}, 1000);
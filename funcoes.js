//const dataHora = new Date();

const zeroFill = n => {
  return ('0' + n).slice(-2);
}

/* Montando os objetos data atual e hora atual [Inicio] */

// const dia = dataHora.getDate().toString().padStart(2, '0');
// const mes = String(dataHora.getMonth() + 1).padStart(2, '0');
// const ano = dataHora.getFullYear();
// const hora = dataHora.getHours().toString().padStart(2, '0');
// const minu = dataHora.getMinutes().toString().padStart(2, '0');
// const sec = dataHora.getSeconds();
// const dataAtual = `${dia} / ${mes} / ${ano}`;
// const horaAtual = ` ${hora} : ${minu} `;
/* Montando os objetos data atual e hora atual [Fim] */



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
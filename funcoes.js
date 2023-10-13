const dataHora = new Date();

const dia  = dataHora.getDate().toString().padStart(2,'0');
const mes  = String(dataHora.getMonth() + 1).padStart(2,'0');
const ano  = dataHora.getFullYear();
const hora = dataHora.getHours();
const minu = dataHora.getMinutes().toString().padStart(2,'0');
const sec  = dataHora.getSeconds();
const dataAtual = `${dia} / ${mes} / ${ano}`;
const horaAtual = ` ${hora} : ${minu} `;


document.getElementById('dataHora').innerHTML = dataAtual + ' ' + horaAtual;


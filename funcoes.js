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

/* Carregando as informações dinamicamente */

document.addEventListener('DOMContentLoaded', function() {
  //var div = document.createElement('div');
  var divPostContainer = document.createElement('div');
  divPostContainer.className = 'post-container';

  var divPost = document.createElement('div');
  divPost.className = 'post';

  var dateP = document.createElement('p');
  dateP.className = 'date';

  document.createElement('br');

  var tituloPost = document.createElement('h1');
  tituloPost.innerHTML = 'Título';

  var contentPost = document.createElement('div');
  contentPost.className = 'post-content';
  
  document.createElement('br');
  document.createElement('p');

  contentPost.innerHTML = 'Hi there I should be here';
  //div.id = 'container';
 //div.innerHTML = 'Hi there!';
  
  document.getElementById('itenPost').appendChild(contentPost);
}, false);
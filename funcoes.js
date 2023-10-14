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
  //divPost.innerHTML = 'Im here';

  var dateP = document.createElement('p');
  dateP.className = 'date';
  dateP.innerHTML = '21 DE DEZEMBRO DE 2022';

  var postBr = document.createElement('br');
  var tituloPost = document.createElement('h1');
  tituloPost.innerHTML = 'Primeira Publicação do Blog';

  var contentPost = document.createElement('div');
  contentPost.className = 'post-content';

  var conteudoSaltaLinha = document.createElement('br');
  var conteudoParagrafo  = document.createElement('p');

  conteudoParagrafo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!';


  document.getElementById('itenPost').appendChild(divPostContainer);
  divPostContainer.appendChild(divPost);
  divPost.appendChild(dateP);
  divPost.appendChild(postBr);
  divPost.appendChild(tituloPost);
  divPost.appendChild(contentPost);
  contentPost.appendChild(conteudoSaltaLinha);
  contentPost.appendChild(conteudoParagrafo);
}, false);
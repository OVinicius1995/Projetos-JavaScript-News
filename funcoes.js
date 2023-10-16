const dataHora = new Date();

/* Montando os objetos data atual e hora atual [Inicio] */

const dia = dataHora.getDate().toString().padStart(2, '0');
const mes = String(dataHora.getMonth() + 1).padStart(2, '0');
const ano = dataHora.getFullYear();
const hora = dataHora.getHours().toString().padStart(2, '0');
const minu = dataHora.getMinutes().toString().padStart(2, '0');
const sec = dataHora.getSeconds();
const dataAtual = `${dia} / ${mes} / ${ano}`;
const horaAtual = ` ${hora} : ${minu} `;
/* Montando os objetos data atual e hora atual [Fim] */

/* Montando data por extenso [Inicio]*/

const dataExtenso = new Date();

let mounth = String(dataExtenso.getMonth() + 1).padStart(2, '0');;
let mounthEx;
switch (mounth) {
  case mounth = "01":
    mounthEx = 'Janeiro';
    break;
  case mounth = "02":
    mounthEx = 'Fevereiro';
    break;
  case mounth = "03":
    mounthEx = 'Março';
    break;
  case mounth = "04":
    mounthEx = 'Abril';
    break;
  case mounth = "05":
    mounthEx = 'Maio';
    break;
  case mounth = "06":
    mounthEx = 'Junho';
    break;
  case mounth = "07":
    mounthEx = 'Julho';
    break;
  case mounth = "08":
    mounthEx = 'Agosto';
    break;
  case mounth = "09":
    mounthEx = 'Setembro';
    break;
  case mounth = "10":
    mounthEx = 'Outubro';
    break;
  case mounth = "11":
    mounthEx = 'Novembro';
    break;
  case mounth = "12":
    mounthEx = 'Dezembro';
    break;
}
/* Montando data por extenso [Fim]*/

/* Setando a data e hora no página [Inicio]. */
document.getElementById('dataHora').innerHTML = dataAtual + ' ' + horaAtual;
/* [Fim] */


/* Criando as informações da página dinamicamente [Inicio]*/

document.addEventListener('DOMContentLoaded', function () {

  let dados = {
    "data": mes + " " + " " + "de" + " " + mounthEx + " " + "de " + " " + ano,
    "titulo": 'Primeira publicação no blog',
    "conteudo": 'Joao ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur rem qui nam veniam numquam maiores tempore quas vero, rerum vel? Nemo repellat sapiente nulla eos impedit veniam, natus dolores!'
  }

  let count = 10;
  for (let i = 0; i < count; i++) {

    /* Criando divs, tags, e associando as classes dinamicamente [Inicio]*/
    var divPostContainer = document.createElement('div');
    divPostContainer.className = 'post-container';

    var divPost = document.createElement('div');
    divPost.className = 'post';


    var dateP = document.createElement('p');
    dateP.className = 'date';
    dateP.innerHTML = dados.data;

    var postBr = document.createElement('br');
    var tituloPost = document.createElement('h1');
    tituloPost.innerHTML = dados.titulo;

    var contentPost = document.createElement('div');
    contentPost.className = 'post-content';

    var conteudoSaltaLinha = document.createElement('br');
    var conteudoParagrafo = document.createElement('p');
    var conteudoUnderLine = document.createElement('hr');

    conteudoParagrafo.innerHTML = dados.conteudo;
    /* Criando divs, tags, e associando as classes dinamicamente [Fim]*/

    /* Montando na página a estrutura criada [Inicio] */
    document.getElementById('contentPost').appendChild(divPost);
    divPost.appendChild(dateP);
    divPost.appendChild(postBr);
    divPost.appendChild(tituloPost);
    divPost.appendChild(contentPost);
    contentPost.appendChild(conteudoSaltaLinha);
    contentPost.appendChild(conteudoParagrafo);
    contentPost.appendChild(conteudoUnderLine);
    /* Montando na página a estrutura criada [Fim] */
  }

}, false);
/* Criando as informações da página dinamicamente [Fim]*/
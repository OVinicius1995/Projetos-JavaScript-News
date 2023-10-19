(function (){
  const firebaseConfig = {
    apiKey: "AIzaSyBxnFt-BFIPOzLBHGIKCO2OZgNCpx0Ufbo",
    authDomain: "meetnews-1c4bf.firebaseapp.com",
    projectId: "meetnews-1c4bf",
    storageBucket: "meetnews-1c4bf.appspot.com",
    messagingSenderId: "623938736140",
    appId: "1:623938736140:web:5cd1c5529f81c793e15e29"
  };
  const app = initializeApp(firebaseConfig);
  console.log(app);
})


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



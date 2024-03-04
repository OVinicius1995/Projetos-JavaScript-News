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

//const dataHora = new Date();

const zeroFill = n => {
  return ('0' + n).slice(-2);
}

function loadingShow(){
 
  const divLoading = document.createElement('div');
     divLoading.classList.add("loading");

  const labelLoading = document.createElement('label');
     labelLoading.classList.add("loadingText");
     labelLoading.innerText = "Carregando...";

     document.getElementById('loading').appendChild(divLoading);
     divLoading.appendChild(labelLoading); 
          
}


function loadingHide(){
    const loadings = document.getElementsByClassName("loading");
   
    if (loadings.length){
      loadings[0].remove();
    }
}
/*
// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

  // Exibe na tela usando a div#data-hora
  document.getElementById('dataHora').innerHTML = dataHora;
}, 1000);
*/
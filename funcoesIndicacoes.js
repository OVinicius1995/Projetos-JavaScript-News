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


function onFilterChange(){
      
  const checkbox = document.getElementById("switch");  
  const theme = checkbox.checked ? "marcado" : "desmarcado";
  
  if(theme === "marcado"){
    
    window.localStorage.setItem("theme", "marcado");
    window.location.reload(true);
  } else {
      
      window.localStorage.setItem("theme", "desmarcado");
      window.location.reload(true);
  }

}
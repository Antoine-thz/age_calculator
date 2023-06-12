









document.getElementById("year").addEventListener("click", function(event){
    document.getElementById("year").classList.remove("invalid");
})

document.getElementById("month").addEventListener("click", function(event){
  document.getElementById("month").classList.remove("invalid");
})

document.getElementById("day").addEventListener("click", function(event){
  document.getElementById("day").classList.remove("invalid");
})





let formulaire = document.getElementById("formulaire");


  let today = new Date();
  let Tday = String(today.getDate());
  let Tmonth = String(today.getMonth() + 1);
  let Tyear = today.getFullYear();

formulaire.addEventListener("submit", function(event) {
  // Empêche le comportement par défaut de l'événement de soumission du formulaire
  event.preventDefault();

  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;

  let verif=true;
  
  if(year > Tyear || year<=100){
    verif=false;
    document.getElementById("year").classList.add("invalid");
  }

  if (month <= 0 || month>12 ) {
    verif=false;
    document.getElementById("month").classList.add("invalid");
  }

  if (day<=0 || day>31 || ((month==4 || month==6 || month==9 || month==11)&& day>30) || (month==2 && day>30)) {
    verif=false;
    document.getElementById("day").classList.add("invalid");
  }


  
  if(verif){
    let date1 = new Date(Tyear,Tmonth,Tday);
    let date2 = new Date(year,month,day);

    // Calcul du nombre total de millisecondes entre les deux dates
    let diffMilliseconds = Math.abs(date2 - date1);

    // Calcul du nombre de millisecondes dans une journée, un mois et une année
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let millisecondsPerMonth = 30.44 * millisecondsPerDay; // Approximation d'un mois
    let millisecondsPerYear = 365.24 * millisecondsPerDay; // Approximation d'une année

    // Calcul du nombre d'années, de mois et de jours
    let Ryear = Math.floor(diffMilliseconds / millisecondsPerYear);
    let Rmonth = Math.floor(diffMilliseconds / millisecondsPerMonth) % 12;
    let Rday = Math.floor(diffMilliseconds / millisecondsPerDay) % 30; // Approximation d'un mois

    document.getElementById("valueYear").textContent = String(Ryear);
    document.getElementById("valueMonth").textContent = String(Rmonth).padStart(2, '0');
    document.getElementById("valueDay").textContent = String(Rday).padStart(2, '0');
  }else{  
    document.getElementById("valueYear").textContent = "--";
    document.getElementById("valueMonth").textContent = "--";
    document.getElementById("valueDay").textContent = "--";
  }








  
});



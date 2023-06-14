// function readMore() {
    
// let mehr = document.getElementById('mehr');
// let knopf = document.getElementById('knopf');
    

// if (mehr.style.display === 'none') {
//      mehr.style.display = 'inline';
//      knopf.innerHTML = 'Verstecken';
    
// } else {
//     mehr.style.display = 'none';
//     knopf.innerHTML = 'Lesen';   
//   }
// }

function readMore() {
    
let mehr = document.getElementById('mehr');
let knopf = document.getElementById('knopf');
    

if (mehr.style.display === 'none') {
     mehr.style.display = 'inline';
     knopf.innerHTML = 'Schliessen';
    
} else {
    mehr.style.display = 'none';
    knopf.innerHTML = 'Mehr Information';   
  }
}

function readMore2() {
    
  let formVisibility = document.getElementById("formVisibility");
     
let knopf2 = document.getElementById('knopf2');
    

if (formVisibility.style.display === 'none') {
     formVisibility.style.display = 'inline';
     knopf2.innerHTML = 'Schliess Form';
    
} else {
    formVisibility.style.display = 'none';
    knopf2.innerHTML = 'Zeig Form';   
  }
}


let tal1_ruta = document.querySelector("#tal1");
let tal2_ruta = document.querySelector("#tal2");
let svar_ruta = document.querySelector("#svar");

function plus(){
    svar_ruta.value = parseInt(tal1_ruta.value) + parseInt(tal2_ruta.value);
    tal1_ruta.value = "";
    tal2_ruta.value = "";
}

function minus(){
    svar_ruta.value = parseInt(tal1_ruta.value) - parseInt(tal2_ruta.value);
    tal1_ruta.value = "";
    tal2_ruta.value = "";
}

function gånger(){
    svar_ruta.value = parseInt(tal1_ruta.value) * parseInt(tal2_ruta.value);
    tal1_ruta.value = "";
    tal2_ruta.value = "";
}

function delat(){
    svar_ruta.value = parseInt(tal1_ruta.value) / parseInt(tal2_ruta.value);
    tal1_ruta.value = "";
    tal2_ruta.value = "";
}
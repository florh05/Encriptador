const campoTexto = document.getElementById('texto');
const campoMensaje = document.querySelector('#texto-invisible');
const muneco = document.querySelector('#muneco');
const titulo = document.querySelector('h1');
const parrafo = document.querySelector('h2');
const copiar = document.querySelector('.boton-copiar');


const matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function botonEncriptar () {
    const texto = encriptar(campoTexto.value);
    campoMensaje.value = texto;
    campoTexto.value = "";
    muneco.style.display= "none";
    titulo.style.display= "none";
    parrafo.style.display= "none";
    copiar.style.display= "inline"; 
}

function encriptar (frase){
    for (let i = 0; i < matriz.length; i++) {
        if (frase.includes(matriz[i][0])){
            frase = frase.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return frase;
}


function copiarTexto() {
    campoMensaje.select()
    navigator.clipboard.writeText(campoMensaje.value);
    copiar.textContent= "Copiado";
    
}


function botonDesencriptar () {
    const texto = desencriptar(campoTexto.value);
    campoMensaje.value = texto;
    copiar.style.display= "none"; 
}

function desencriptar (frase){
    for (let i = 0; i < matriz.length; i++) {
        if (frase.includes(matriz[i][1])){
            frase = frase.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return frase;
}

const elemento = document.querySelector('#muneco')

function visibility() {
    elemento.style.display = "none";
}











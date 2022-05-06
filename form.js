function capturarTexto(){
    var contenidoTexto = document.getElementById("text-encriptar").value;
    return contenidoTexto;
}
function copiarTexto(){
    var contenidoTexto = document.getElementById("text-encriptado");
    contenidoTexto.select();
    navigator.clipboard.writeText(contenidoTexto.value);
}

function encriptar(texto){

    let textoEncriptado = 
    texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")

    document.getElementById("text-encriptado").value = textoEncriptado;
    document.getElementById("text-encriptar").value = "";
}

function desencriptar (texto){
    let textoDesencriptado =
    texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")

    document.getElementById("text-encriptado").value = textoDesencriptado;
}

var botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.addEventListener("click",function(){
    encriptar(capturarTexto())
    });

 var botonDesencriptar = document.getElementById("boton-desencriptar");
 botonDesencriptar.addEventListener("click",function(){
    desencriptar(capturarTexto())
     });

let textArea = document.getElementById("text-encriptar");
textArea.addEventListener("input", function(){
    this.value = this.value.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    });
var botonCopiar = document.getElementById("boton-copiar");
botonCopiar.addEventListener("click",function(){
    copiarTexto()
        });
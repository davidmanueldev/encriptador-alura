document.getElementById("area-texto").addEventListener("input", function() {
    // Conversion de mayúsculas a minúsculas. Por si acaso el usuario ingresa texto en mayúsculas.
    this.value = this.value.toLowerCase();
});
const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".texto-procesado");

window.onload = function() {document.querySelector('.oculto').classList.remove('hidden');};

/* Claves de encriptación:

- La letra "e" es convertida en "enter".
- La letra "i" es convertida en "imes".
- La letra "a" es convertida en "ai".
- La letra "o" es convertida en "ober".
- La letra "u" es convertida en "ufat".*/

function botonEncriptar() {
    if (areaTexto.value==="") {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, ingrese un texto o palabra!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else if (/[^a-z\s]/.test(areaTexto.value)) {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "Por favor! Ingrese solamente letras sin tildes ni números ni caracteres especiales.";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else {
        const textoEncriptado = encriptar(areaTexto.value);
        mensaje.value = textoEncriptado;
        areaTexto.value = "";
        mensaje.style.backgroundImage = "none";
        document.querySelector('.oculto').classList.add('hidden'); // Oculta el div "oculto".
    }  
 }

function encriptar(cadenaEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaEncriptada.includes(matrizCodigo[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptada;
}

function botonDesencriptar() {
    if (areaTexto.value=="") {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "Solo texto";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else if (/[^a-z\s]/.test(areaTexto.value)) {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "Solo texto";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
        return;
    }
    else {
        const textoEncriptado = desencriptar(areaTexto.value);
        mensaje.value = textoEncriptado;
        areaTexto.value = "";
        document.querySelector('.oculto').classList.add('hidden'); // Oculta el div "oculto" para mostrar el área de texto.
    }
}

function desencriptar(cadenaDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return cadenaDesencriptada;
}

function copiar() {
    var resultado = mensaje.value;
    var tempAreaTexto = document.createElement("textarea");
    tempAreaTexto.value = resultado;
    document.body.appendChild(tempAreaTexto);
    tempAreaTexto.select();
    document.execCommand("copy");
    document.body.removeChild(tempAreaTexto);
    var mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    mensajeConfirmacion.textContent = "Texto copiado al portapapeles.";
    setTimeout(function() {mensajeConfirmacion.textContent = "";}, 5000);
}

function limpiar() {
    let textoLimpioDerecho = document.getElementById("texto-procesado");
    textoLimpioDerecho.value = "";
    let textoLimpioIzquierdo = document.getElementById("area-texto");
    textoLimpioIzquierdo.value = "";
}
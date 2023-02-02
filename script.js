var txtEntrada = document.querySelector(".txtEntrada");
var txtSaida = document.querySelector(".txtSaida");
var txtCopiar = document.querySelector(".txtSaida");
let copiar = document.querySelector('.btnCopiar');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptografar() {
    const txtEncriptografado = encriptografar(txtEntrada.value);
    txtSaida.value = txtEncriptografado;
    txtEntrada.value = "";
}

function encriptografar(vogaisTrocadas) {
    let arrayDeTroca = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    vogaisTrocadas = vogaisTrocadas.toLowerCase();

    for (let i = 0; i < arrayDeTroca.length; i++) {
        if (vogaisTrocadas.includes(arrayDeTroca[i][0])) {
            vogaisTrocadas = vogaisTrocadas.replaceAll(arrayDeTroca[i][0], arrayDeTroca[i][1]);
        }
    }
    return vogaisTrocadas;
}

function btnDesencriptografar() {
    const txtDesencriptografado = desencriptografar(txtEntrada.value);
    txtSaida.value = txtDesencriptografado;
    txtEntrada.value = "";
}

function desencriptografar(codigoTrocado) {
    let arrayDeTroca = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    codigoTrocado = codigoTrocado.toLowerCase();

    for (let i = 0; i < arrayDeTroca.length; i++) {
        if (codigoTrocado.includes(arrayDeTroca[i][1])) {
            codigoTrocado = codigoTrocado.replaceAll(arrayDeTroca[i][1], arrayDeTroca[i][0]);
        }
    }
    return codigoTrocado;
}

copiar.addEventListener('click', function(e) {
  let textArea = document.querySelector('.txtSaida');
  textArea.select();
  document.execCommand('copy');
  alert("Texto copiado.")
});
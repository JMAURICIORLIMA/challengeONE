const txtArea = document.querySelector(".txtArea1");
const txtSaida = document.querySelector(".txtArea2");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptografa() {
    const txtEncriptografado = encriptografa(txtArea.value);
    txtSaida.value = txtEncriptografado;
    txtArea.value = "";
}

function encriptografa (criptografiaArray) {
    let arrayCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    criptografiaArray = criptografiaArray.toLowerCase();
    
    for(let i = 0; i < arrayCodigo.length; i++) {
        if(criptografiaArray.includes(arrayCodigo[i][0])) {
            criptografiaArray = criptografiaArray.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
        }
    }
    return criptografiaArray;   
}
var btnCodificar = document.querySelector('.codificar')
var btnDecodificar = document.querySelector('.decodificar')
var btnCopiar = document.querySelector('.copiar')

var output = document.querySelector('.output')

if(output.value === "") {
    btnCopiar.disabled = true;
}

var arrCriptografia = ["ai", "enter", "imes", "ober", "ufat"];
var vowels =  ["a","e","i","o","u"];

var criptografar = function() { 
    var input = document.getElementById('input-texto').value
    var output = document.querySelector('.output')

    var newText = input
                    .split("")
                    .map(l=>{
                        if(vowels.includes(l)){
                            l = arrCriptografia[vowels.indexOf(l)] 
                        }
                            return l
                    })
                    .join("")
    
    output.innerHTML = newText
    btnCopiar.disabled = false
}

var descriptografar = function() {
    var input = document.getElementById('input-texto').value
    var output = document.querySelector('.output')
    var newText = input
                    .replaceAll(arrCriptografia[0],vowels[0])
                    .replaceAll(arrCriptografia[1],vowels[1])
                    .replaceAll(arrCriptografia[2],vowels[2])
                    .replaceAll(arrCriptografia[3],vowels[3])
                    .replaceAll(arrCriptografia[4],vowels[4])

    output.innerHTML = newText
    btnCopiar.disabled = false
}

var copiar = function() {
    var textoCopiado = document.querySelector('.output').value
    navigator.clipboard.writeText(textoCopiado)
    console.log("Texto copiado: "+textoCopiado)
}

btnCodificar.addEventListener("click", criptografar)
btnDecodificar.addEventListener("click",descriptografar)
btnCopiar.addEventListener("click",copiar)
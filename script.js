var btnCodificar = document.querySelector('.codificar')
var btnDecodificar = document.querySelector('.decodificar')
var btnCopiar = document.querySelector('.copiar')

var output = document.querySelector('.output') //chamando a caixa de texto 2

if(output.value === "") {  //desabilitando o botão copiar caso a caixa de texto esteja vazia
    btnCopiar.disabled = true;
}

var arrCriptografia = ["ai", "enter", "imes", "ober", "ufat"]; //array dos elementos de substituição
var vowels =  ["a","e","i","o","u"]; //array das vogais para serem substituidas

var criptografar = function() { 
    var input = document.getElementById('input-texto').value //pegando o valor da caixa de texto principal
    var output = document.querySelector('.output') //chamando a caixa de texto 2
    var newText = input
                    .split("") //separa as palavras em letras individuais
                    .map(l=>{  //escaneia a array //é criada uma função com parametro l
                        if(vowels.includes(l)){ //verifica se as letras inseridas no campo de texto são alguma vogal
                            l = arrCriptografia[vowels.indexOf(l)] //faz a troca das vogais pelas palavras 
                        }
                            return l; //retorna o valor trocado para newText
                    })
                    .join(""); //junta as letras individuais formando palavras novamente
    
    output.innerHTML = newText; //joga o texto criptografado para a caixa 2
    btnCopiar.disabled = false; //ativa o botão copiar
}

var descriptografar = function() {
    var input = document.getElementById('input-texto').value; //pegando o valor da caixa de texto principal
    var output = document.querySelector('.output'); //chamando a caixa de texto 2
    var newText = input
                    .replaceAll(arrCriptografia[0],vowels[0]) //faz a troca das palavras pelas vogais
                    .replaceAll(arrCriptografia[1],vowels[1]) //usando o numero de sua indice
                    .replaceAll(arrCriptografia[2],vowels[2])
                    .replaceAll(arrCriptografia[3],vowels[3])
                    .replaceAll(arrCriptografia[4],vowels[4]);

    output.innerHTML = newText;
    btnCopiar.disabled = false;
}

var copiar = function() {
    var textoCopiado = document.querySelector('.output').value;
    navigator.clipboard.writeText(textoCopiado);
    console.log("Texto copiado: " + textoCopiado);
}

btnCodificar.addEventListener("click", criptografar); //adicionando funcionalidade ao botão criptografar
btnDecodificar.addEventListener("click",descriptografar); //adicionando funcionalidade ao botão descriptografar
btnCopiar.addEventListener("click",copiar); //adicionando funcionalidade ao botão copiar
/** 
@author: DION FIACRE ARMEL
@description: Entrer la valeur du rayon et retourner le volume d'une sphere
*/

/*======================== DAYLI CHALLENGE =======================*/

let input1 = document.getElementById("noun");
let input2 = document.getElementById("adjective");
let input3 = document.getElementById("person");
let input4 = document.getElementById("verb");
let input5 = document.getElementById("place");

let VariableSpan = document.getElementById("story");
let resultat;

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", Envoyer)

function Envoyer(e){
    e.preventDefault();
    if(input1.value === '' || input2.value === '' || input3.value === '' || input4.value === '' || input5.value === '' ){
        alert("Veuillez saisir tous les champs")
    }else{
        resultat = input1.value + " " + input2.value + " " + input3.value + " " + input4.value + " " + input5.value;
        VariableSpan.textContent = resultat;
    }
}
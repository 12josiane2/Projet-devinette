let button = document.getElementById("button");
let form = document.getElementById("form");
let message = document.getElementById("message");
let link = document.getElementById("link");

const secretNumber = Math.floor(Math.random() *100);
let attemps = 3 ;

button.onclick = function(){
    const input = document.getElementById("input");
    if(input.value != "") {
        if(input.value < secretNumber){
            message.innerText = "Le nombre plus grand que " + input.value + "";
            message.style.Color ="#999"
        }else if (input.value > secretNumber){
            message.innerText = "Le nombre plus petit que " + input.value + "";
            message.style.Color ="#999"
        }
        if(attemps ==0){
            message.innerText = "Vous avez perdu , il fallait trouver " + secretNumber + "";
            message.style.color ="red";
            form.style.display = "none";
            link.style.display ="flex";
        }
        attemps--;
        if(input.value == secretNumber){
            message.innerText = "Bravo, vous avez trouvé le nombre qui est " + secretNumber + "!";
            message.style.color ="green";
            form.style.display = "none";
            link.style.display ="flex";

        }

    }else{
       message.innerText = "Le champ est vide !";
       message.style.Color ="red";
    }

}
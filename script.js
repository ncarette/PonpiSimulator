function lancer100faces(){
    let lancerdé = Math.floor((Math.random() * 100) + 1);
    console.log(lancerdé);
    résultat.innerHTML += lancerdé + " | "
}

function randomize(){
  résultat.innerHTML = "Pompi"
}

document.querySelector("[id='button']")
    .addEventListener("click",randomize);
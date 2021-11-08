
function lancer100faces(){
    let lancerdé = Math.floor((Math.random() * 100) + 1);
    console.log(lancerdé);
    result.innerHTML += lancerdé + " | "
}

function randomize(){

	let hb1 = ["Bon","Happy", "Bonne", "H.", "Joyeux","alles Gute zum"];
	let hb2 = [" anniversaire", " anni", " Geburtstag", " birthday", " B.", " annif"," B-day", " днем рождения"];
	let nom = [" Ponpi", " Pénélope", " Péné", " Loop", " Pomp", " la meuf à Ulysse", " Пенелопа", " Pompi"];
	let photos = ["empty.jpg"];
	let font = ["Aldrich","Arial"]

    let fullWidth = window.innerWidth;
    let fullHeight = window.innerHeight;

    let text = hb1[1] + hb2[1] + nom[1];

    let elem = document.createElement("div");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.left = (Math.round(Math.random() * fullWidth)-30) + "px";
    elem.style.top = (Math.round(Math.random() * fullHeight)-30) + "px";
    elem.style.fontSize = (Math.round(Math.random() * 30) + 10) + "pt";
    elem.style.fontFamily = font[1]

    document.body.appendChild(elem);

}

document.addEventListener("click",randomize);

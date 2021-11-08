
function lancer100faces(){
    let lancerdé = Math.floor((Math.random() * 100) + 1);
    console.log(lancerdé);
    result.innerHTML += lancerdé + " | "
}

function randomize(){

	let hb1 = ["Bon","Happy", "Bonne", "H.", "Joyeux","alles Gute zum"];
	let hb2 = [" anniversaire", " anni", " Geburtstag", " birthday", " B.", " annif"," B-day", " днем рождения"];
	let nom = [" Ponpi", " Pénélope", " Péné", " Loop", " Pomp", " la meuf à Ulysse", " Пенелопа", " Pompi"];
	let photo = ["empty.jpg"];
	let font = ["Aldrich","Arial", "Georgia", "Trebuchet MS", "Courier New", "Brush Script MT"]
	let color = ["black", "gold", "pink", "green", "red", "blue","orange", "purple"]

    let fullWidth = window.innerWidth;
    let fullHeight = window.innerHeight;

    let text = hb1[hb1.length * Math.random() | 0] + hb2[hb2.length * Math.random() | 0] + nom[nom.length * Math.random() | 0];

    let elem = document.createElement("div");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.left = (Math.round(Math.random() * fullWidth)-50) + "px";
    elem.style.top = (Math.round(Math.random() * fullHeight)-50) + "px";
    elem.style.fontSize = (Math.round(Math.random() * 40) + 20) + "pt";
    elem.style.fontFamily = font[font.length * Math.random() | 0]
    elem.style.color = color[color.length * Math.random() | 0]

    document.body.appendChild(elem);

    

	if(Math.floor(Math.random() * 3) == 0){
		let image = document.createElement("img");
    	image.src = photo[photo.length * Math.random() | 0]
    	image.style.position = "absolute";
    	image.style.left = (Math.round(Math.random() * fullWidth)) + "px";
		image.style.top = (Math.round(Math.random() * fullHeight)) + "px";
		
		document.body.appendChild(image);
	}
    

}

document.addEventListener("click",randomize);

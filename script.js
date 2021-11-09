/* A code that able randomizing birthday wishes for Pénélope - no use of d3 nor any external library*/

function randomize(){

	let hb1 = ["Bon","Happy", "Bonne", "H.", "Joyeux","alles Gute zum", "C", "Heureux", "Intense", "Bon", "Super"];
	let hb2 = [" anniversaire", " anni", " Geburtstag", " birthday", " B.", " annif"," B-day", " днем рождения",
		" anniv"," années", " jour de naissance", " scorpio season"];
	let nom = [" Ponpi", " Pénélope", " Péné", " Loop", " Pomp", " la meuf à Ulysse", " Пенелопа", " Pompi"," Pompi", " Pénélope",];
	let photo = ["empty.jpg"];
	let font = ["Aldrich","Arial", "Verdana", "Andalé Mono", "Courier", "Monaco", "Lucida Console","Comic Sans MS",
		"Bradley Hand", "Brush Script MT", "Luminari","American Typewriter","Didot","Georgia"]
	let color = ["black", "gold", "pink", "green", "red","orange", "purple","fuchsia","lime","aqua",
		"navy","teal","maroon","gray","hotpink","lawngreen","indigo","lightpink","mediumpurple",
		"olivedrab","yellow","orangered","palegreen","paleturquoise","palevioletred","peru","royalblue",
		"seagreen","tomato","black","black","yellowgreen"]
	let texttransform = ["uppercase", "lowercase", "lowercase"]

    let fullWidth = window.innerWidth;
    let fullHeight = window.innerHeight;

    let text = hb1[hb1.length * Math.random() | 0] + hb2[hb2.length * Math.random() | 0] + nom[nom.length * Math.random() | 0];

    let elem = document.createElement("div");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.left = (Math.round(Math.random() * fullWidth)-50) + "px";
    elem.style.top = (Math.round(Math.random() * fullHeight)-50) + "px";
    elem.style.fontSize = (Math.round(Math.random() * 40) + 20) + "pt";
    elem.style.fontFamily = font[font.length * Math.random() | 0];
    elem.style.color = color[color.length * Math.random() | 0];
    elem.style.textTransform = texttransform[texttransform.length * Math.random() | 0];
    elem.style.letterSpacing = (Math.round(Math.random()*16)) + "px";

    document.body.appendChild(elem);
    

	if(Math.floor(Math.random() * 3) == 5){
		let image = document.createElement("img");
    	image.src = photo[photo.length * Math.random() | 0]
    	image.style.position = "absolute";
    	image.style.left = (Math.round(Math.random() * fullWidth)) + "px";
		image.style.top = (Math.round(Math.random() * fullHeight)) + "px";
		
		document.body.appendChild(image);
	}
    

}

document.addEventListener("click",randomize);

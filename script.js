let tipo = atacar("monge", "artes marciais");
let idade = "400";
let nome = "Anderson";


function atacar(tipo, ataque) {
	console.log(`O ${tipo} atacou usando ${ataque}`);
}

if (tipo === "mago" && ataque === "magia") {
	atacar(tipo, ataque);
}
if (tipo === "guerreiro" && ataque === "espada") {
	atacar(tipo, ataque);
}
if (tipo === "monge" && ataque === "artes marciais") {
	atacar(tipo, ataque);
}
if (tipo === "ninja" && ataque === "ninja") {
	atacar(tipo, ataque);
}

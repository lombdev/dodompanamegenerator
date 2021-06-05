var arrAnswer = new Array(15);

var demonios = ["Dark",
	"Evil",
	"Devil",
	"Black",
	"Demon",
	"Nightmare",
	"Dragon"];

var objectos = ["Sapato",
	"Otário",
	"Meia",
	"Carro",
	"Prato",
	"Menino",
	"Cavalo",
	"Preto",
	"Default",
	"Jarda",
	"Visceral",
	"Oié"];

var arrAnswer = "{0} {1}";

function AskQuestion() {
	lblAnswer.innerText = String.format(arrAnswer,
		demonios[Math.round(Math.random() * (demonios.length - 1))],
		objectos[Math.round(Math.random() * (objectos.length - 1))]);
}

function resetAnswer() {
	lblAnswer.innerText = "...";
}

var arrAnswer = new Array(15);

	var demonios = ["Dark", "Evil", "Devil", "Black", "Demon", "Nightmare"];
	var objectos = ["Sapato", "Vassoura", "Otário", "Meia", "Lanterna", "Prato"];

	var arrAnswer = "{0} {1}";

function AskQuestion()
{
	lblAnswer.innerText = String.format(arrAnswer,
	demonios[Math.round(Math.random() * 5)],
	objectos[Math.round(Math.random() * 5)]);
}

function resetAnswer()
{
	lblAnswer.innerText = "..."
}

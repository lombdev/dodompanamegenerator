var arrAnswer = new Array(15);

	arrAnswer[0] = "Devil Sapato";
	arrAnswer[1] = "Evil Vassoura";
	arrAnswer[2] = "Dark Otário";

function AskQuestion()
{
	lblAnswer.innerText = arrAnswer [Math.round(Math.random() * 3)]
}

function resetAnswer()
{
	lblAnswer.innerText = "..."
}

var arrAnswer = new Array(15);

	arrAnswer[0] = "Devil {0}";
	arrAnswer[1] = "Evil {0}";
	arrAnswer[2] = "Dark {0}";

function AskQuestion()
{
	lblAnswer.innerText = arrAnswer[Math.round(Math.random() * 3)].format(txtQuestion);
}

function resetAnswer()
{
	lblAnswer.innerText = "..."
}

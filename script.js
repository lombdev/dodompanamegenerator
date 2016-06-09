var arrAnswer = new Array(15);

	arrAnswer[0] = "Ask again later..."
	arrAnswer[1] = "Yes"
	arrAnswer[2] = "No"
	arrAnswer[3] = "It appears to be so"
	arrAnswer[4] = "Reply is hazy, please try again"
	arrAnswer[5] = "Yes, definitely"
	arrAnswer[6] = "What is it you really want to know?"
	arrAnswer[7] = "Outlook is good"
	arrAnswer[8] = "My sources say no"
	arrAnswer[9] = "Signs point to yes"
	arrAnswer[10] = "Don’t count on it"
	arrAnswer[11] = "Cannot predict now"
	arrAnswer[12] = "As I see it, yes"
	arrAnswer[13] = "Better not tell you now"
	arrAnswer[14] = "Concentrate and ask again"

function AskQuestion()
{
	if (lblAnswer.innerText != "Ask the 8 Ball a question...") 
	{
		alert("Please ask a new question")
		return
	}

	if (txtQuestion.value.charAt(txtQuestion.value.length - 1) != "?") 
	{
		alert ("Your question should end with a ?")
		return
	}
	
		lblAnswer.innerText = arrAnswer [Math.round(Math.random() * 14)]
}

function resetAnswer()
{
	lblAnswer.innerText = "Ask the 8 Ball a question..."
}

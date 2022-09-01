function quest(poryadkovyiNomer) {
	var answers = document.querySelectorAll("div.answer");
	for (answer of answers){
		answer.style.display = "none"
		var answer2 = document.getElementById('answ' + poryadkovyiNomer)
	}
	if (answer2.style.display === "none") {
		answer2.style.display = "block"
	} else {
		answer2.style.display = "none"
	}
}

function quest(poryadkovyiNomer) {
	var answers = document.querySelectorAll("div.answer");
	for (answer of answers){
		answer.style.display = "none"
		var answer = document.getElementById('answ' + poryadkovyiNomer)
	}
	if (answer.style.display === "none") {
		answer.style.display = "block"
	} else {
		answer.style.display = "none"
	}
}

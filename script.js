function quest(poryadkovyiNomer) {
	var answer = document.getElementById('answ' + poryadkovyiNomer)
	if (answer.style.display === "none") {
		answer.style.display = "block"
	} else {
		answer.style.display = "none"
	}
}

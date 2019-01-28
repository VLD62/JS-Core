function solve() {
	let buttons = Array.from(document.querySelectorAll('#exercise section button'));
	buttons.forEach((btn) => btn.addEventListener('click', fnClick));
	let correntAnswers = ['2013', 'Pesho', 'Nakov'];
	let correctAnswersCount = 0;
	let currentSection = 0;
	let resultsElement = document.getElementById("result");
	function fnClick(e) {
		let radioBtns = Array.from(e.target.parentElement.getElementsByTagName("input"));
		let selectedBtn = radioBtns.filter(btn => btn.checked);
		if (selectedBtn.length > 0) {
			if (correntAnswers.includes(selectedBtn[0].value)) {
				correctAnswersCount++;
			}
			if (currentSection < 2) {
				e.target.parentElement.parentElement.children[++currentSection].style.display = 'block';
			} else {
				if (correctAnswersCount === 3) {
					resultsElement.textContent = `You are recognized as top SoftUni fan!`;
				} else {
					resultsElement.textContent = `You have ${correctAnswersCount} right answers`;
				}
			}
		}
		e.target.removeEventListener('click', fnClick);
	}
}
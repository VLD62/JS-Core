function solve() {
	let btnGet = document.querySelector('#exercise #myNumbers button');
	let fldInput = document.querySelector('#exercise #myNumbers input');
	let divAllNumbers = document.querySelector('#allNumbers');
	btnGet.addEventListener('click', fnClick);
	function fnClick() {
		let isInputValid = true;
		let inputArray = fldInput.value.split(' ');
		if (inputArray.length != 6) {
			isInputValid = false;
		}
		inputArray.forEach(element => {
			if ((Number(element) < 1) || (Number(element) > 49)) {
				isInputValid = false;
			}
		});
		if (isInputValid) {
			fnVisualize(inputArray);
		}
	}
	function fnVisualize(numbers) {
		for (let i = 0; i < 49; i++) {
			let divNumber = document.createElement('div');
			divNumber.textContent = i + 1;
			divNumber.className = 'numbers';
			if (numbers.includes((i + 1).toString())) {
				console.log("Hit!");
				divNumber.style.backgroundColor = 'orange';
			}
			divAllNumbers.appendChild(divNumber);
			fldInput.disabled = true;
			btnGet.disabled = true;
		}
	}
}
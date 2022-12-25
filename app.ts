const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button') as HTMLButtonElement;

function add(a: number, b: number) {
	return a + b;
}

const result = add(5, 3);

function printResult(result: number) {
	console.log(result);
}

printResult(result);

let results = [];

buttonElement?.addEventListener('click', () => {
	const num1 = +num1Input.value;
	const num2 = +num2Input.value;
	const result = add(num1, num2);

	// const resultContainerTest: { result: number } = {
	// 	result: result,
	// };

	const resultContainer = {
		result: result,
	};

	results.push(resultContainer);
	// printResult(resultContainer.result);
	printResult(results);
});

// class User {
// 	name: string;
// 	private age: number;

// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

interface Greetable {
	name: string;
}

interface Printable {
	print(): void;
}

//in typescript rewriting classes
class User implements Greetable, Printable {
	constructor(public name: string, private age: number) {} //converted as properties

	print(): void {
		console.log(this.name);
	}
}

class Admin extends User {
	constructor(name: string, age: number, private permissions: string[]) {
		super(name, age);
	}
}

const user = new User('Howard', 26);
console.log(user.name);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button') as HTMLButtonElement;

function add(a: number, b: number) {
	return a + b;
}

const result = add(5, 3);

type PrintMode = 'console' | 'alert';
enum OutputMode {
	CONSOLE,
	ALERT,
}

// function printResult(result: number, printMode: 'console' | 'alert') {
// function printResult(result: number, printMode: PrintMode) {
//using enum
function printResult(result: number, printMode: OutputMode) {
	if (printMode === OutputMode.CONSOLE) {
		console.log(result);
	} else if (printMode === OutputMode.ALERT) {
		alert(result);
	}
}

printResult(result, OutputMode.CONSOLE);
printResult(result, OutputMode.ALERT);

type CalculationResults = { result: number; print: () => void }[];
type CalculationContainer = { result: number; print: () => void };

interface CalcContainer {
	result: number;
	print(): void;
}

// const results: { result: number; print: () => void }[] = [];
// const results: CalculationContainer[] = [];
//syntactic sugar of below
const results: CalcContainer[] = [];
const resultsAny: Array<any>[] = [];
const resultsTest: Array<CalcContainer>[] = [];
const names = ['Howard'];

buttonElement.addEventListener('click', () => {
	const num1 = +num1Input.value;
	const num2 = +num2Input.value;
	const result = add(num1, num2);

	// const resultContainerTest: { result: number } = {
	// 	result: result
	// };

	// const resultContainer = {
	// 	result: result,
	// 	print(): void {
	// 		console.log(this.result);
	// 	},
	// };

	const resultContainer: CalculationContainer = {
		result: result,
		print(): void {
			console.log(this.result);
		},
	};

	results.push(resultContainer);
	// printResult(resultContainer.result);
	// printResult(results);
	results[0].print();
});

function logAndEcho<T>(val: T) {
	console.log(val);
	return val;
}

logAndEcho<string>('Hi There!').split(' ');

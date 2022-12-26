"use strict";
// class User {
// 	name: string;
// 	private age: number;
//in typescript rewriting classes
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } //converted as properties
    print() {
        console.log(this.name);
    }
}
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User('Howard', 26);
console.log(user.name);
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
const result = add(5, 3);
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
// function printResult(result: number, printMode: 'console' | 'alert') {
// function printResult(result: number, printMode: PrintMode) {
//using enum
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
printResult(result, OutputMode.CONSOLE);
printResult(result, OutputMode.ALERT);
// const results: { result: number; print: () => void }[] = [];
// const results: CalculationContainer[] = [];
//syntactic sugar of below
const results = [];
const resultsAny = [];
const resultsTest = [];
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
    const resultContainer = {
        result: result,
        print() {
            console.log(this.result);
        },
    };
    results.push(resultContainer);
    // printResult(resultContainer.result);
    // printResult(results);
    results[0].print();
});
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho('Hi There!').split(' ');

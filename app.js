var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
var result = add(5, 3);
function printResult(result) {
    console.log(result);
}
printResult(result);
var results = [];
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    // const resultContainerTest: { result: number } = {
    // 	result: result,
    // };
    var resultContainer = {
        result: result
    };
    results.push(resultContainer);
    // printResult(resultContainer.result);
    printResult(results);
});

class Calculator {
  constructor(operation, result) {
    this.operation = operation;
    this.result = result;
    this.clear();
  }
  
  clear() {
    this.operation = "";
    this.result = "";
    this.operator = undefined;
}

const operation = document.querySelector('[data-operation]');
const result = document.querySelector('[data-result]');
const clear = document.querySelector('[data-clear]');
const operator = document.querySelectorAll('[data-operator]');
const number = document.querySelectorAll('[data-number]');
const equals = document.querySelector('[data-equals]');

const Calculator = new Calculator(operation, result);

/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(res) {
    this.result = res;
  }
  add(num) {
    this.result += num;
  }
  sub(num) {
    this.result -= num;
  }
  mul(num) {
    this.result *= num;
  }
  div(num) {
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getRes() {
    return this.result;
  }
  calculate(str) {
    let valid = new Set('0123456789+-*/() ');
    let newStr = "";
    for(let i=0; i<str.length; i++){
      if(valid.has(str[i])){
        if(str[i]!=' ' && newStr.indexOf(newStr.length) !=' ')newStr += str[i];
        else if(str[i]!=' ') newStr += str[i];
      }
      else throw new Error("Invalid Input");
    }
    this.result += eval(newStr);
    
  }
}

let cal = new Calculator(0);
cal.calculate('10  + 2 + 3 * 7')
cal.add(10)
cal.sub(5)
cal.mul(2)
cal.div(2)
console.log(cal.getRes());



function newFunc(num1) {
    
    return function (num2) { 
        console.log(num1 + num2);
    }
}

let myFunc = newFunc(3);
myFunc(2)

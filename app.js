let myName = "Ryan"; //This is my name

const numStates = 50; //This is the umber of states in the US

let sum = 5 + 4; //This is a mathmatical equation stored ina variable.

function sayHello() {
    alert('Hello World!');
}; //creaes an alert.

sayHello();

function checkAge (name, age) {

    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    };
    
}; //checks age to determine permitance to the page

checkAge("Charles", 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
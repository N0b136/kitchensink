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

let favVeg = ['Broccoli', 'corn', 'spinach', 'greenbeans'];

for (let i of favVeg) {
    console.log(i);
};


let testPool = [{name: 'Xonis', age: 43}, {name:'Valhaia', age: 22}, {name:'Kephius', age:19}, {name:'Oskar', age: 36}, {name:'Levi', age:2}];


for (let person of testPool) {
    checkAge(person.name, person.age)
};


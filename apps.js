// console.log("connected"); 
//use this to check each time

// let string = " I am a string ";
// let sentence = " Hello Angel " + " and Vicky";
// let combine = string + sentence
// console.log(combine)

// let student = "Sandra"
// let student2 = "Gia";
// let couseName= "AP CSP"
// let teacherName = "Whalen"
// let sentence = 
//     student + 
//     " and " + 
//     student2 + 
//     " are talking " + 
//     courseName " width " + 
//     teacherName;

// let betterSentence = ${student} and ${student2} are taking ${courseName} with ${teacherName} next year; 

// the ones on top doesnt work and how to format it

// let year = 2020;
// let nextYear = year-1; 
// let past = 2020 / 2;
// let future = year * 2; 

// BooLEANS
// let trueStatement = "false";

// //NULL AND UNDEFINED 
// let richard; 

//BooLean Logic or if/else 
//let age = 18;
//let baoSquared = "Bao Bao";
// console.log(baoSquared === "Bao Bao");
// console.log(age == "17" );
//triple = is what we use 
//lower and upper case are diff 


// let age = 20;
// if (age < 18) {
//     console.log("You are a child");
// } else if (age == 18){
//     console.log("happy birthday");
// } else{
//     console.log("Your are over 18");
// }

//red, green, yellow 

// let light = "red"; 
// if (light === "red") {
//     console.log("stop");
// } else if (light === "yellow") {
//     console.log("caution!");
// } else {
//     console.log("go");
// }

// let kristyIntolerant = true;
// let baoBaoIntolerant = false; 

// if (kristyIntolerant === true && baoBaoIntolerant === true){
//     console.log("only almond milk");
// }
// else if (kristyIntolerant === true || baoBaoIntolerant === true){
//     consolse.log("Get both Milks");
// }else{
//     console.log("just regular milk");
// }

/* let temperature = 90; 
if (temperature < 86) {
    console.log("too cold");
} else if (temperature <= 72 && temperature >= 68) {
    console.log("perfect");
} else if (temperature <= 76 && temperature > 72){
    console.log("warm");
} else {
    console.log("too hot");
} */

//console.log("Shut up Jacob!");

/* function test() {
    console.log("I'm a function");
}
test(); */

//const add= function(x,y) {
//return x + y; //return ends the function 
// };

//console.log(add(100,20));
//const name= "Richard"; //cannot re-define const

/* const hello = function() {
    console.log("Hello");
};

const bye = function(){
    console.log("Bye");
};

const hiBye = function() {
    hello();
    bye();
    hello();
    bye();
};
hiBye(); */

/* const name = "Thurushi"; //global variable pr global space

function displayName() {
    const name = "Kelly"; //local or function scope
    alert(name);
    function sun () {
        const name2 = "Jacob";
        console.log(name2); //inner function has access to outer function
    }

    return sun;
}

const myFunc = displayName();
myFunc(); */
//closure

///////Arrays
/* 
const names = ["Aarthi", "Vicky", "Vincent", "Dolye", "Kelly"];
names.forEach(name => console.log(name)); */

///spread operator
//const numbers = [1, 2, 3, 4, 5, 6];
//const add = function (x, y, z, a, b, c) {
//  return x + y + z + a + b + c;
//};

// console.log(add(...numbers));
/*  */
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
console.log(students.some(name=> name == "Savva" || name == "Alan"));

///filter out all students whose names contain <5 characters
/* const newArr = students
.push()
.forEach()
.map();
*/

//"includes" junshen

//Alan or Savva included in "some"

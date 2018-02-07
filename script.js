//-------1---------
const hello = 'Hello';
const world = 'World';
const helloWorld = (`${hello} ${world}`);
console.log(`Zadanie 1: ${helloWorld}`);

//-------2---------
let multiply = (a=1, b=1) => a * b;
console.log(`Zadanie 2 z podaniem jednej zmiennej: ${multiply(5)}`);
console.log(`Zadanie 2 z podaniem dwóch zmiennych: ${multiply(2, 4)}`);

//-------3---------

//-----metoda 1------

let averages1 = (...args) => sum(args)/args.length

console.log(`Zadanie 3 - metoda 1: ${averages1(1, 4, 1, 1)}`);

//-----metoda 2-----

let result = 0;
function averages(...args) {
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    } 
    return result/args.length;
};

console.log(`Zadanie 3 - metoda 2: ${averages(2, 2, 2, 2)}`);

//-------4---------


let grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Zadanie 4: ${averages(...grades)}`);


//-------5---------

const array = [1, 4,'Iwona', false, 'Nowak'];
const [ , ,firstname, ,lastname] = array;
console.log(`Zadanie 5: ${firstname} ${lastname}`);

'use strict';

//-------1---------
var hello = 'Hello';
var world = 'World';
var helloWorld = hello + ' ' + world;
console.log('Zadanie 1: ' + helloWorld);

//-------2---------
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log('Zadanie 2 z podaniem jednej zmiennej: ' + multiply(5));
console.log('Zadanie 2 z podaniem dw\xF3ch zmiennych: ' + multiply(2, 4));

//-------3---------

//-----metoda 1------

var averages1 = function averages1() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.forEach(function (arg) {
        return arg.length;
    }) / args.length;
};

console.log('Zadanie 3 - metoda 1: ' + averages1(1, 4, 1, 1));

//-----metoda 2-----

var result = 0;
function averages() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    for (var i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result / args.length;
};

console.log('Zadanie 3 - metoda 2: ' + averages(2, 2, 2, 2));

//-------4---------


var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('Zadanie 4: ' + averages.apply(undefined, grades));

//-------5---------

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = array[2],
    lastname = array[4];

console.log('Zadanie 5: ' + firstname + ' ' + lastname);

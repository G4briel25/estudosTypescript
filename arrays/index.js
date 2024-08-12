"use strict";
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
// 2. outra sintaxe de array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// tipagem na função
function soma(a, b) {
    console.log(a + b);
}
soma(1, 2);
// retorno da função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Gabriel"));
// função anônima
setTimeout(function () {
    const salario = 1250;
    //console.log(parseFloat(salario));
}, 2000);
// tipos de objetos
function objetos(doisAqui) {
    console.log("X coordia: ", doisAqui.x);
    console.log("Y coordia: ", doisAqui.y);
}
const objCoordias = { x: 329, y: 951 };
objetos(objCoordias);
// props opcionais
function showNumbers(a, b, c) {
    console.log("A: ", a);
    console.log("B: ", b);
    if (c) {
        console.log("C: ", c);
    }
}
showNumbers(1, 2, 3);
showNumbers(9, 8);
// Melhor maneira de validar parametro opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá ${firstName} ${lastName}, tudo bem?`);
    }
    else {
        console.log(`Olá ${firstName}, tudo bem?`);
    }
}
advancedGreeting('Gabriel', 'Ribera');
advancedGreeting('Gabriel');
// union types
function showBalance(number) {
    console.log(`O saldo da conta é: ${number}`);
}
showBalance(2700);
showBalance('5000');
//showBalance(true);
const arr2 = ['teste', 123, false];
console.log(arr2);
// avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        console.log("Usuário não aprovado!");
    }
    else {
        console.log(`A função do usuário é: ${role}`);
    }
}
showUserRole(false);
showUserRole('Admin');
function showId(id) {
    console.log(`O ID é ${id}`);
}
showId(12);
showId('215');
function showCoors(obj) {
    console.log(`X: ${obj.x}; Y: ${obj.y}; Z: ${obj.z}`);
}
const corrsObj = {
    x: 10,
    y: 15,
    z: 5
};
showCoors(corrsObj);
// Com interface podemos inplementar mais valores
const fullPerson = { name: 'Gabriel', age: 20 };
console.log(fullPerson);
// type personType = {
//     age: 20
// }
// Não permite duplicar
// literal types
let teste;
// teste = 'testand' // não vai funcionar
teste = 'testando'; // agora sim
console.log(teste);
function showDirection(direction) {
    console.log(direction);
}
showDirection('left'); // funcionar
//showDirection('top'); // não funcionar
// bigint
let number;
number = 1000n;
console.log(number);
// symbol
let simboloA = Symbol('a');
let simboloB = Symbol('a');
let simboloC = 'b';
let simboloD = 'b';
console.log(simboloA);
console.log(simboloA == simboloB); // false
console.log(simboloA === simboloB); // false
console.log(simboloC == simboloD); // true
console.log(simboloC === simboloD); // true

"use strict";
// Void
function withReturn() {
    console.log("Função sem retorno!");
}
withReturn();
// Callback como argumento
function greeting(name) {
    console.log(`Olá ${name}`);
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    greet;
}
preGreeting(greeting, "Fulano");
preGreeting(greeting, "Teste123");
// Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(['a', 'b', 'c']));
// Nesta função só é possível retornar uma array de numeros,
// caso queira retornar outro tipo terá que criar outra função
// já usando o Generic podemos retornar qualquer tipo, tanto 
// number, string, boolean no mesmo array
function arrayTeste(array) {
    return array[0];
}
//console.log(arrayTeste([9,8,7,6,5,4, true, 'a']));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Gabriel" }, { age: 20, job: "Programmer" });
console.log(newObject);
// Constraints
function biggerstNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggerstNumber(5, 3));
console.log(biggerstNumber('12', '54'));
//console.log(biggerstNumber(true, false));
//console.log(biggerstNumber('12', 2));
// Especificar tipo de argumento
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([10, 11, 12], ["teste", '13']));
// Parametro opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${name} ${greet}, td bem?`;
    }
    else {
        return `Olá ${name}, td bem?`;
    }
}
console.log(modernGreeting("Gabriel25"));
console.log(modernGreeting("Gabriel25", "Master"));
// Parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(5, 20));
// Unknow
// semelhante ao any, porém tem trava de segurança
function verificar(x) {
    if (Array.isArray(x)) {
        console.log(x[1]);
    }
    else if (typeof x === 'number') {
        console.log("X é um número");
    }
    // return x[0]  // não vai retornar pq tem que dizer a ele que é do tipo array
}
verificar([1, 2, 3]);
verificar(48);
// never
// function showErrorMenssage(msg: string): never {
//     throw new Error(msg);    
// }
//showErrorMenssage("Erro aqui")
// Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
// Destructuring como parametro
// Ao inves de acessar o objeto como obj.name, usamos o metodo destruturing
// Modo sem objeto
function showProductDetails(name, price) {
    return `1 - O nome do produto é ${name} e custa ${price}`;
}
const shirt1 = showProductDetails('Camisa', 49.90);
console.log(shirt1);
// Agora acessando como objeto sem o obj.name
function showProductDetails2({ name, price }) {
    return `2 - O nome do produto é ${name} e custa ${price}`;
    ;
}
const shirt2 = { name: "Camisa 2", price: 89.92 };
console.log(showProductDetails2(shirt2));

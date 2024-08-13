"use strict";
// Generic  -  só pra lembrar
function teste002(valor) {
    return `O dado é ${valor}`;
}
console.log(teste002(25));
console.log(teste002([]));
console.log(teste002(false));
// Constraint em generic
function showProductName(obj) {
    return `Nome do produto é ${obj.name}`;
}
const obj001 = { name: 'Fulano', age: 34, cor: "Black" };
const obj002 = { age: 34, cor: "Black" };
console.log(showProductName(obj001));
const obj003 = {
    name: "Ferrari",
    rodas: 4,
    motor: 5.1,
    color: true
};
const obj004 = {
    name: "Fiat",
    rodas: 5,
    motor: 'nove cavalos',
    color: 'verde'
    //color: false    // Não vai funcionar pq espera uma string
};
console.log(obj003);
console.log(obj004);
// Type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Gabriel",
    age: 20,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
// Typeof type operator
const userName = "Gabriel25";
const userName2 = "Fulano";
// const userName3: typeof userName = true;    //Não vai funcionar pq ele esta tipado em string
console.log(userName, userName2);
const userName4 = "Teste";
const newTruck = {
    km: 30,
    kg: 14,
    description: 'Descrição de teste'
};
function showKm(km) {
    console.log(`O veiculo tem a km de: ${km}`);
}
showKm(newTruck.km);
//showKm(newTruck.description);    // Não vai funfar pq o tipo Indexed foi dito q somente o tipo number vai funcionar
const newCar = {
    km: 3000,
    kg: 1300
};
showKm(newCar.km);
; // Nao existe
const testing = "some Text";
const testing2 = "Testando + Union";

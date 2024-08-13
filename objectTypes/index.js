"use strict";
function showProductsDetails(product) {
    console.log(`O nome do produto é ${product.name}, custa R$${product.price}`);
    if (product.isAvailable)
        console.log("Este produto está disponível");
}
const camisa = {
    name: "Camisola",
    price: 24.99,
    isAvailable: true
};
const calca = {
    name: "Calça berge",
    price: 94.90,
    isAvailable: false
};
showProductsDetails(camisa);
showProductsDetails(calca);
function exibirUsuario(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = { email: "gabriel@email.com", role: "Admin" };
const u2 = { email: "franthesco@email.com" };
exibirUsuario(u1);
exibirUsuario(u2);
const fusca = {
    modelo: "VM",
    rodas: 4
};
console.log(fusca);
let criarUser = {
    x: 15
};
console.log(criarUser);
const gabriel = { nomeDoIndividuo: "Gabriel", idadeTbm: 20 };
console.log(gabriel);
const naruto = { nomeDoIndividuo: "Naruto", idadeTbm: 35, superPoder: ["Modo-senin", "Modo-kyuubi"] };
console.log(naruto.nomeDoIndividuo + " tem o poder do " + naruto.superPoder[1]);
const pa1 = {
    name: "Atirador",
    type: "Fuzil",
    calibre: 12
};
console.log(pa1);
console.log("A calibre da arma é", pa1.calibre);
// Readonly array
let meuArray = ["Abacate", "Maçã", "Banana"];
// meuArray[3] = "Cenoura"      // Não vai funcionar pq o metodo é somente leitura
console.log(meuArray);
const minhaVariavel = [1, 2, 3, 4, 5];
console.log(minhaVariavel);
const minhaVariavel2 = ["Gabriel", 20];
//minhaVariavel2[1] = "dadad";
console.log(minhaVariavel2);
// Tuplas com ReadOnly
function imprimir2(numeros) {
    // numeros[0] = 21;
    console.log(numeros[0]);
    console.log(numeros[1]);
}
imprimir2([100, 23]);

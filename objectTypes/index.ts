// tipo de objeto para função com interface
interface Producto {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductsDetails(product: Producto) {
    console.log(`O nome do produto é ${product.name}, custa R$${product.price}`);
    if(product.isAvailable) console.log("Este produto está disponível");
}

const camisa: Producto = {
    name: "Camisola",
    price: 24.99,
    isAvailable: true
}

const calca: Producto = {
    name: "Calça berge",
    price: 94.90,
    isAvailable: false
}

showProductsDetails(camisa);
showProductsDetails(calca);





// Propriedade opcional em interface
interface UsuarioTeste {
    email: string,
    role?: string
}

function exibirUsuario(user: UsuarioTeste) {
    console.log(`O usuário tem o e-mail: ${user.email}`);

    if(user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }

}

const u1: UsuarioTeste = {email: "gabriel@email.com", role: "Admin"};
const u2: UsuarioTeste = {email: "franthesco@email.com"}

exibirUsuario(u1);
exibirUsuario(u2);






// Propriedade readonly
interface Carro {
    modelo: string,
    readonly rodas: number
}

const fusca: Carro = {
    modelo: "VM",
    rodas: 4
}

console.log(fusca);
// fusca.rodas = 5;  // Não é possivel alterar usando o READONLY pq é somente leitura






// Index signature
interface Teste01 {
    [index: string]: number
}

let criarUser: Teste01 = {
    x: 15
}

console.log(criarUser);






// Extending interface
interface Humano {
    nomeDoIndividuo: string,
    idadeTbm: number
}

interface SuperHumano extends Humano {
    superPoder: string[];
}

const gabriel: Humano = {nomeDoIndividuo: "Gabriel", idadeTbm: 20};
console.log(gabriel);

const naruto: SuperHumano = {nomeDoIndividuo: "Naruto", idadeTbm: 35, superPoder: ["Modo-senin", "Modo-kyuubi"]};
console.log(naruto.nomeDoIndividuo + " tem o poder do " + naruto.superPoder[1]);






// Intersection types
interface Personagem {
    name: string
}

interface Arma {
    type: string,
    calibre: number
}

type PersonagemComArma = Personagem & Arma;     // Estamos unindo a interface Personagem com a Arma

const pa1: PersonagemComArma = {
    name: "Atirador",
    type: "Fuzil",
    calibre: 12
}

console.log(pa1);
console.log("A calibre da arma é", pa1.calibre);





// Readonly array
let meuArray: ReadonlyArray<string> = ["Abacate", "Maçã", "Banana"];

// meuArray[3] = "Cenoura"      // Não vai funcionar pq o metodo é somente leitura

console.log(meuArray);





// Tuplas
type myFiveNumbers = [number, number, number, number, number];

const minhaVariavel: myFiveNumbers = [1,2,3,4,5];
console.log(minhaVariavel);

type meApresentando = [string, number];

const minhaVariavel2: meApresentando = ["Gabriel", 20];
//minhaVariavel2[1] = "dadad";
console.log(minhaVariavel2);





// Tuplas com ReadOnly
function imprimir2(numeros: readonly [number, number]) {    // Os valores do arrays serão somente leitura
     // numeros[0] = 21;
    console.log(numeros[0]);
    console.log(numeros[1]);
}

imprimir2([100, 23]);











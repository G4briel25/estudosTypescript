// Generic  -  só pra lembrar
function teste002<T>(valor: T): string {
    return `O dado é ${valor}`;
}

console.log(teste002(25));
console.log(teste002([]));
console.log(teste002(false));





// Constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `Nome do produto é ${obj.name}`;
}

const obj001 = {name: 'Fulano', age: 34, cor: "Black"};
const obj002 = {age: 34, cor: "Black"};

console.log(showProductName(obj001));
// console.log(showProductName(obj002));    // Não rola, pq a função está esperando um atributo name em string





// Generics com Interface
interface MyObject001<T, U, Q> {
    name: string,
    rodas: T,
    motor: U,
    color: Q
}

type object01 = MyObject001<number, number, boolean>;
type object02 = MyObject001<number, string, string>;

const obj003: object01 = {
    name: "Ferrari",
    rodas: 4,
    motor: 5.1,
    color: true
}

const obj004: object02 = {
    name: "Fiat",
    rodas: 5,
    motor: 'nove cavalos',
    color: 'verde'
    //color: false    // Não vai funcionar pq espera uma string
}

console.log(obj003);
console.log(obj004);





// Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {   // o K é uma chave de T
    return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));





// Keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean};

type C = keyof Character;   // Representa toda chave do Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`;
}

const myChar: Character = {
    name: "Gabriel",
    age: 20,
    hasDriveLicense: true
}

console.log(showCharName(myChar, "name"));





// Typeof type operator
const userName: string = "Gabriel25";
const userName2: typeof userName = "Fulano";
// const userName3: typeof userName = true;    //Não vai funcionar pq ele esta tipado em string

console.log(userName, userName2);

type x = typeof userName;
const userName4: x = "Teste"





// Indexed access type
type Truck = {km: number, kg: number, description: string};

type Km = Truck['km'];    // Indexed tipará uma chave especifica, ao contrario de Keyof

const newTruck: Truck = {
    km: 30,
    kg: 14,
    description: 'Descrição de teste'
}

function showKm(km: Km) {
    console.log(`O veiculo tem a km de: ${km}`);
}

showKm(newTruck.km);
//showKm(newTruck.description);    // Não vai funfar pq o tipo Indexed foi dito q somente o tipo number vai funcionar

const newCar = {
    km: 3000,
    kg: 1300
}

showKm(newCar.km);





// Conditional Expressions Type
interface Animal {
    anda(): void
}
interface Dog {
    late(): void
}
interface Nexiste {}; // Nao existe

type Exemplo1 = Dog extends Animal ? number : string;

type Exemplo2 = Nexiste extends Animal ? boolean : number;





// Template literals type
type testA = "Text";
type CustomType = `some ${testA}`;    // Isso se chama template literals
const testing: CustomType = "some Text";
//const testing2: CustomType = "some Text2";

type a1 = 'Testando';
type a2 = 'Union';
type JuntarA = `${a1} + ${a2}`;
const testing2: JuntarA = "Testando + Union";
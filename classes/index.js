"use strict";
// Campo de classe
// Este é o metodo sem valores
class User001 {
}
const gabriel001 = new User001();
gabriel001.name = "Fulano";
gabriel001.age = 20;
//gabriel001.job = "Dev"    // Da erro pq n pode adicionar um atributo q n foi definido na classe
console.log(gabriel001);
// Constructor
class NewUser {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
const pedro = new NewUser("Pedro", 34);
console.log(pedro);
// ReadOnly
class Car {
    constructor(_name) {
        this.rodas = 4; //Somente leitura, impossivel de alterar
        this.name = _name;
    }
}
const car1 = new Car("Uno");
car1.name = "Corola";
//car1.rodas = 5;    // N pode ser alterado
console.log(car1.name);
// Herença e Super
class Machine {
    constructor(_name) {
        this.name = _name;
    }
}
class KillerMachine extends Machine {
    constructor(_name, _guns) {
        super(_name);
        this.guns = _guns;
    }
}
const trator = new Machine("Trator");
const destroyer = new KillerMachine("Destruidor", 17);
console.log(trator);
console.log(destroyer);
// Métodos
class Pessoa {
    constructor(_name) {
        this.name = _name;
    }
    falar() {
        console.log("Está pessoa fala!");
    }
}
const p1 = new Pessoa("Gabriel");
console.log(p1);
p1.falar();
// This
class Caminhao {
    constructor(_model, _hp) {
        this.model = _model;
        this.hp = _hp;
    }
    showDetails() {
        console.log(`O caminhão do modelo ${this.model} tem ${this.hp} cavalos.`);
    }
}
const myCaminhao = new Caminhao("Volvo", 4000);
console.log(myCaminhao);
myCaminhao.showDetails();
// Setter
class Coords {
    set escrevaX(x) {
        if (x === 0) {
            return;
        }
        this._x = x;
        console.log("X inserido com sucesso!");
    }
    set escrevaY(y) {
        this._y = y;
        console.log(`Y inserido com sucesso!`);
    }
    get getCoords() {
        return `X${this._x} e Y${this._y}`;
    }
}
const cords1 = new Coords();
cords1.escrevaX = 1;
cords1.escrevaY = 789;
console.log(cords1);
console.log(cords1.getCoords);
class BlogPost {
    constructor(_nomeDoSite) {
        this.nameDoSite = _nomeDoSite;
    }
    itemTitle() {
        return `vc deu o nome do site de ${this.nameDoSite}`;
    }
}
const blog1 = new BlogPost("WikiPedia");
console.log(blog1.itemTitle());
class SegundoPost {
    constructor(_segudoNome) {
        this.nameDoSite2 = _segudoNome;
    }
    itemTitle() {
        return `segunda classe preenchida ${this.nameDoSite2}`;
    }
}
const blog2 = new SegundoPost("TorrentFilmes");
console.log(blog2.itemTitle());
console.log("----------------------------------");
// Override de métodos
class Base {
    someMethod() {
        console.log("Retornando na classe Base");
    }
}
class NovaBase extends Base {
    someMethod() {
        console.log("Sobreescrevendo para retornar na classe NovaBase");
    }
}
const base1 = new NovaBase();
base1.someMethod();
/*
----------------------- Visibilidade -----------------------
*/
// Protected
class A {
    constructor() {
        this.x = 10;
    }
}
class B extends A {
    metodo() {
        return `Metodo para chamar o item ${this.x} da classe A`;
    }
}
const protected1 = new B();
// console.log(protected1.x);   //N funfa pq é protegida, para acessar deve usar um metodo
console.log(protected1.metodo());
console.log("----------------------------------");
// Private
class ClassePrivada {
    constructor() {
        this.name = "Gabriel Jaune Ribera";
    }
    metodoPrivada() {
        return this.name;
    }
    metodoPrivadaTeste() {
    }
}
class TentarAcessar extends ClassePrivada {
    meuOutroMetodo() {
        //this.metodoPrivadaTeste();    //Nem extendendo irá funcionar
    }
}
const privada1 = new ClassePrivada();
//console.log(privada1.name);
console.log(privada1.metodoPrivada()); //Só acessei pq criei um metodo dentro da classe onde o item privada está
console.log("----------------------------------");
// Static Members
// class StaticMembers {
//     prop = "Teste static"
// }
// console.log(StaticMembers.prop);     //Não funciona acessar dessa meneira
class StaticMembers2 {
    static metodo() {
        return "Teste usando metodo";
    }
}
StaticMembers2.prop2 = "Teste static2"; // Agora sim
console.log(StaticMembers2.prop2);
console.log(StaticMembers2.metodo());
console.log("----------------------------------");
// Generic class
class Item {
    constructor(_primeiro, _segundo) {
        this.primeiro = _primeiro;
        this.segundo = _segundo;
    }
    get getItem() {
        return `Itens são ${this.primeiro} e ${this.segundo}`;
    }
}
const item1 = new Item(150, "SEGUNDO ITEM EM STRING");
console.log(item1.primeiro);
console.log(item1.segundo);
console.log(item1.getItem);
console.log("----------------------------------");
// Parameter properties
class ParameterProperties {
    constructor(name, qtd, price) {
        this.name = name;
        this.qtd = qtd;
        this.price = price;
        this.name;
        this.qtd;
        this.price;
    }
    get showQuantidade() {
        return `Quantidade: ${this.qtd}`;
    }
    get showPrice() {
        return `Preço: ${this.price}`;
    }
}
const parameter1 = new ParameterProperties("Camisa", 3, 24.90);
console.log(parameter1.name);
console.log(parameter1.showQuantidade);
console.log(parameter1.showPrice);
console.log("----------------------------------");
// Class expressions
const myClass = class {
    constructor(_name) {
        this.name = _name;
    }
};
const pessoa = new myClass("Gabrielelelele");
console.log(pessoa.name);
// Abstract class
// É um tipo de classe especial que não pode ser instanciada, apenas herdada
class AbstractClass {
}
class AbstractClassExemplo extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`Retorna o nome ${this.name}`);
    }
}
const abstClass1 = new AbstractClassExemplo("Minha classe abstrata aqui");
abstClass1.showName();
console.log("------------------------------------");
// Relações entre classes
class Cachorro {
}
class Gato {
}
const doguinho = new Gato();
console.log(doguinho);

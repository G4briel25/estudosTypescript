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

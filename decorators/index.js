"use strict";
// 1. Exemplo de decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function meuDecorator(target, propertKey, descriptor) {
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClasse {
    //@meuDecorator()
    testando() {
        console.log("Terminando execução de método");
    }
}
const myClasse1 = new myClasse();
myClasse1.testando();
console.log("--------------------------------------------------------");
// Multiplos decorators
function decoratorC() {
    return function (target, propertKey, descriptor) {
        console.log("Executou o metodo C");
    };
}
function decoratorB() {
    return function (target, propertKey, descriptor) {
        console.log("Executou o metodo B");
    };
}
function decoratorA() {
    return function (target, propertKey, descriptor) {
        console.log("Executou o metodo A");
    };
}
class Multiple {
    testando() {
        console.log("Terminando a execução");
    }
}
__decorate([
    decoratorA(),
    decoratorB(),
    decoratorC()
], Multiple.prototype, "testando", null);
const multiplos = new Multiple();
multiplos.testando();
/*
Na saída irá mostrar na seguinte ordem:

Executou o metodo C
Executou o metodo B
Executou o metodo A
Terminando a execução

Caso tiver mais de um decorator, ele executará o mais baixo primeiro, o decorato mais proximo da função
*/
console.log("-----------------------------------------------------------");
// Class Decorator
function classDescorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'Usuario') {
        console.log("Criando usuario");
    }
}
let Usuario = class Usuario {
    constructor(_name) {
        this.name = _name;
    }
};
Usuario = __decorate([
    classDescorator
], Usuario);
const usuario1 = new Usuario("Gabriel");
console.log(usuario1);
// Decorator de metodo
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Maquina {
    constructor(_name) {
        this.name = _name;
    }
    showNameMaquina() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Maquina.prototype, "showNameMaquina", null);
const nomeMaquina = new Maquina("TRX");
console.log(nomeMaquina.showNameMaquina());
console.log("-------------------------------------------------------------");
// Acessor decorator
class Monster {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    get showNameMonster() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAgeMonster() {
        return `A idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showNameMonster", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAgeMonster", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
console.log("-----------------------------------------------------------");
// Property decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class Identificador {
    constructor(_id) {
        this.id = _id;
    }
}
__decorate([
    formatNumber()
], Identificador.prototype, "id", void 0);
const newItem = new Identificador("1");
console.log(newItem);
console.log("---------------------------------------------------------");
// Exemplo real com Class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date;
}
let Book = class Book {
    constructor(_id) {
        this.id = _id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(_id) {
        this.id = _id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(4);
console.log(newBook);
console.log(newBook.createdAt);
console.log(newPen);
console.log("------------------------------------------------------------");
// Exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("O usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(_content, _alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${_content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
console.log('---------------------------------------------------------------');
// Exemplo real: Property Decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter o máximo ${limit} dígitos`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, { get: getter, set: setter });
    };
}
class Admin {
    constructor(_userName) {
        this.userName = _userName;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "userName", void 0);
const admin1 = new Admin("gabriel1234"); // Saida: O valor deve ter o máximo 10 dígitos
console.log(admin1);

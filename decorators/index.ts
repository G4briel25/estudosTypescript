// 1. Exemplo de decorator

function meuDecorator(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");        
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
        
    }
}

class myClasse {
    @meuDecorator()
    testando() {
        console.log("Terminando execução de método");        
    }
}

const myClasse1 = new myClasse();
myClasse1.testando();



console.log("--------------------------------------------------------");
// Multiplos decorators
function decoratorC() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou o metodo C");
    }
}


function decoratorB() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou o metodo B");
    }
}


function decoratorA() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou o metodo A");
    }
}

class Multiple {
    @decoratorA()
    @decoratorB()
    @decoratorC()
    testando() {
        console.log("Terminando a execução");
    }
}

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
function classDescorator(constructor: Function) {
    console.log(constructor);
    if(constructor.name === 'Usuario') {
        console.log("Criando usuario");
    }
}

@classDescorator
class Usuario {
    name;

    constructor(_name: string) {
        this.name = _name;
    }
}

const usuario1 = new Usuario("Gabriel");
console.log(usuario1);




// Decorator de metodo

function enumerable(value: boolean) {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}


class Maquina {
    name;
    constructor(_name: string) {
        this.name = _name;
    }

    @enumerable(false)
    showNameMaquina() {
        console.log(this);    
        return `O nome da máquina é ${this.name}`;
    }
}

const nomeMaquina = new Maquina("TRX");
console.log(nomeMaquina.showNameMaquina());


console.log("-------------------------------------------------------------");
// Acessor decorator
class Monster {
    name?;
    age?;

    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }

    @enumerable(true)
    get showNameMonster() {
        return `O nome do monstro é ${this.name}`;
    }

    @enumerable(true)
    get showAgeMonster() {
        return `A idade do monstro é ${this.age}`;
    }
}

const charmander = new Monster("Charmander", 10);
console.log(charmander);


console.log("-----------------------------------------------------------");
// Property decorator
function formatNumber() {
    return function(target: Object, propertKey: string) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}

class Identificador {
    @formatNumber()
    id;
    
    constructor(_id: string) {
        this.id = _id;
    }
}

const newItem = new Identificador("1");
console.log(newItem);



console.log("---------------------------------------------------------");
// Exemplo real com Class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date;
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(_id: number) {
        this.id = _id;
    }
}

@createdDate
class Pen {
    id

    constructor(_id: number) {
        this.id = _id
    }
}

const newBook = new Book(12);
const newPen = new Pen(4);

console.log(newBook);
console.log(newBook.createdAt);
console.log(newPen);



console.log("------------------------------------------------------------");
// 
// typeof
function sum(a: number | string, b: number | string) {
    if(typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    } else if(typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);        
    } else {
        console.log("Impossível realizar a soma!");
    }
}

sum('10', '5');
sum(5, 5);
sum('100', 5);


// checando se valor existe
function operations(arr: number[], operations?: string | undefined) {
    if(operations) {
        if(operations === 'sum') {
            const sum = arr.reduce((a, at) => a + at);
            console.log(sum);            
        } else if(operations === 'multiply') {
            const multiply = arr.reduce((a, at) => a * at);
            console.log(multiply);            
        }
    } else {
        console.log("Por favor, defina uma operação");
    }
}

operations([10,20,30]);
operations([1,2,3], 'sum');
operations([5,5,1,1], 'multiply');


// instance of
class User {
    name;
    constructor(_name: string) {
        this.name = _name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const user1 = new User("Fulano");
const user2 = new SuperUser("Gabriel");

console.log(user1);
console.log(user2);

function greetingUser(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja entrar no modo expert?`);
    } else if(user instanceof User) {
        console.log(`Olá ${user.name} :)`);
    } else {
        console.log("Usuário inválido!");        
    }
}

greetingUser(user1);
greetingUser(user2);



// operador in
class Dog {
    name;
    breed;

    constructor(_name: string, _breed?: string) {
        this.name = _name;
        if(_breed) {
            this.breed = _breed;
        }
    }
}

const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');

function showDetails(dog: Dog) {
    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);        
    } else {
        console.log(`O cachorro é um SRD (Sem Raça Definida)`);        
    }
}

showDetails(bob);
showDetails(turca);

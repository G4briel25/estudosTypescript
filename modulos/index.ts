// Importação de arquivos
import importGreet from './greet.js'
importGreet();


// Importação de variavel
import {x} from './importandoVariaveis.js'
console.log(x);


// Multiplas importações
import { variaveis1, variaveis2, variaveis3, variaveis4 } from './multiplosImports.js';
console.log(variaveis1, variaveis2);
console.log(variaveis3);
variaveis4();


// Trocando o nome usando o alias
import { someName as nome } from './alias.js';
console.log(nome);


// Importando tudo usando o *
import * as meusNumeros from './importandoTudo.js'
console.log(meusNumeros.n1);
console.log(meusNumeros.n2);
console.log(meusNumeros.n3);


// Importando Tipos
import { Human } from './importandoTipos.js';

class User implements Human {
    name
    age

    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }
}

const user1 = new User("Humano1", 25);
console.log(user1.name, user1.age);

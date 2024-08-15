function Log(target: any) {
    console.log(target);    
}

@Log
class MinhaClasse {
    name;
    constructor(_name: string) {
        this.name = _name;
    }
}

// const minhaClasse = new MinhaClasse("Teste");
// console.log(minhaClasse);



// Segundo exemplo
function Log2(prefix: string) {
    return function(target: any) {
        console.log(prefix, target);
    }
}

@Log2("print")
class Exemplo {}


// Terceiro exemplo
function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            versão = apiVersion;
        }
    }
}

@setAPIVersion('v1.0.0')
class API {}
console.log(new API);

@setAPIVersion('v1.0.2')
class WebHook {}
console.log(new WebHook);




// Quarto exemplo - usando propriedades
function minLength(length: number) {
    return (target: any, key: string) => {
        console.log(length, target, key);
        const val = target[key];
        
    }
}
class Category {
    @minLength(3)
    private titulo;

    constructor(_title: string) {
        this.titulo = _title;
    }
}

console.log(new Category('teste'));

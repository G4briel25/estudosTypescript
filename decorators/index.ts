function myDecorator() {
    console.log("Iniciando decorator");
    
    return function(target: any, propertKey: string | symbol, descriptor: PropertyDecorator) {
        console.log("Executando decorator");
        console.log(`Decorador aplicado com parâmetro ${param}`);
    }
}

class minhaClasse {
    @myDecorator()
    testing() {
        console.log("Terminando execução do método");
    }
}
const myObj = new minhaClasse();
myObj.testing();
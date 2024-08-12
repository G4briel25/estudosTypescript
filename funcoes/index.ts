// Void
function withReturn(): void {
    console.log("Função sem retorno!");   
}

withReturn();


// Callback como argumento
function greeting(name: string) {
    console.log(`Olá ${name}`);
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função!");
    
    const greet = f(userName)

    greet;

}

preGreeting(greeting, "Fulano");
preGreeting(greeting, "Teste123");



// Generic function
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1,2,3,4,5]));
console.log(firstElement(['a', 'b', 'c']));


// Nesta função só é possível retornar uma array de numeros,
// caso queira retornar outro tipo terá que criar outra função
// já usando o Generic podemos retornar qualquer tipo, tanto 
// number, string, boolean no mesmo array
function arrayTeste(array: number[]) {
    return array[0];
}

//console.log(arrayTeste([9,8,7,6,5,4, true, 'a']));


function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Gabriel"}, {age: 20, job: "Programmer"});
console.log(newObject);




// Constraints
function biggerstNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;
    if(+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest
}

console.log(biggerstNumber(5,3));
console.log(biggerstNumber('12', '54'));
//console.log(biggerstNumber(true, false));
//console.log(biggerstNumber('12', 2));




// Especificar tipo de argumento
function mergeArrays<T>(array1: T[], array2: T[]) {
    return array1.concat(array2);
}

console.log(mergeArrays([1,2,3], [4,5,6]));
console.log(mergeArrays<string | number>([10,11,12], ["teste", '13']));



// Parametro opcionais
function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `Olá ${name} ${greet}, td bem?`;
    } else {
        return `Olá ${name}, td bem?`;
    }
}

console.log(modernGreeting("Gabriel25"));
console.log(modernGreeting("Gabriel25", "Master"));




// Parametro default
function somaDefault(n: number, m = 10): number {
    return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(5, 20));




// Unknow
// semelhante ao any, porém tem trava de segurança
function verificar(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[1]);        
    } else if(typeof x === 'number') {
        console.log("X é um número");
    }
    // return x[0]  // não vai retornar pq tem que dizer a ele que é do tipo array
}

verificar([1,2,3]);
verificar(48);



// never
// function showErrorMenssage(msg: string): never {
//     throw new Error(msg);    
// }

//showErrorMenssage("Erro aqui")



// Rest operator
function sumAll(...n: number[]) {    // ...n é o rest
    return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1,2,3,4,5));




// Destructuring como parametro
// Ao inves de acessar o objeto como obj.name, usamos o metodo destruturing

// Modo sem objeto
function showProductDetails(name: string, price: number) {
    return `1 - O nome do produto é ${name} e custa ${price}`;
}

const shirt1 = showProductDetails('Camisa', 49.90);
console.log(shirt1);


// Agora acessando como objeto sem o obj.name
function showProductDetails2({name, price}: {name: string, price: number}): string {
    return `2 - O nome do produto é ${name} e custa ${price}`;;
}

const shirt2 = {name: "Camisa 2", price: 89.92};
console.log(showProductDetails2(shirt2));

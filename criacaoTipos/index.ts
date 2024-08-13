// generic  -  só pra lembrar
function teste002<T>(valor: T): string {
    return `O dado é ${valor}`;
}

console.log(teste002(25));
console.log(teste002('dadawdawd'));
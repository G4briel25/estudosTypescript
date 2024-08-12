"use strict";
/*
 1. Vamos criar uma função que recebe review dos usuários, precisamos
 utilizar o narrowing para receber o dado;
 2. As possibilidades são boolean e number;
 3. Serão enviados números de 1 a 5 (estrelas), prever uma mensagem para
 cada uma destas notas;
 4. Ou false, que é quando o usuário não deixa uma review, prever um retorno
 para este caso também;
*/
function reviewUser(review) {
    if (typeof review === 'number') {
        switch (review) {
            case 1:
                console.log("Péssimo");
                break;
            case 2:
                console.log("Boa");
                break;
            case 3:
                console.log("Mediana");
                break;
            case 4:
                console.log("Excelente");
                break;
            case 5:
                console.log("Maravilhoso");
                break;
            default:
                console.log("Nota inválida");
                break;
        }
    }
    else if (typeof review === 'boolean') {
        if (review === false) {
            console.log("O usuário não deixou uma valiação");
        }
        else {
            console.log("Avaliação inválida");
        }
    }
    else {
        console.log("Tipo de dado inválido!");
    }
}
reviewUser(2); // Boa
reviewUser(5); // Maravilhoso
reviewUser(8); // Nota inválida
reviewUser(false); // O usuário não deixou uma valiação
reviewUser(true); // Avaliação inválida
// reviewUser();  // tipo de dado inválido

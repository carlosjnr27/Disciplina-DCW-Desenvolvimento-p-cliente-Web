//Atividade: Execute e explique o código-fonte Javascript abaixo:

let i = 0;
let numero = prompt('Insira um valor');
while (numero <= 10 ){
    document.write('<p>Linha ' + i + '</p>');
    i++;
    numero++;
}
/**
 * Resposta: O programa pede ao usuário que insira um valor e o armazena na variavel "numero".
 * Depois, o laço while continua executando enquanto o valor de "numero" for menor ou igual a 10.
 * A cada iteração, o código escreve uma linha com o metodo "document.write", onde "i" é o numero de iteração.
 * O laço é repetido imprimindo as linhas ate o valor que o usuário inseriu -1
 * O laço não executa caso o valor iserido seja maior que 10
 */  








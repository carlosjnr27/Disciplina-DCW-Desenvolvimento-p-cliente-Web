//Atividade: Use o Do-While no Javascript para adicionar números pares sequenciais em um vetor conforme quantidade informada pelo usuário (de 2 a 18). Imprima o conteúdo do respectivo vetor.

let quantidade = parseInt(prompt('Insira a quantidade de números pares (entre 2 e 18):'));

if (quantidade >= 2 && quantidade <= 18) {
    let numerosPares = []; // vetor para armazenar os numeros pares
    let numero = 2; // inicio com o primeiro numero par
    let contador = 0;

    // Laço do-while que continua ata adicionar a quantidade de numeros pares
    do {
        numerosPares.push(numero); // push adiciona o numero par no vetor
        numero += 2; // incrementa o próximo numero par
        contador++;
    } while (contador < quantidade);

    document.write('<p>Números pares: [' + numerosPares.join(', ') + ']</p>');
} else {
    document.write('<p>Quantidade inválida. Insira um número entre 2 e 18.</p>');
}

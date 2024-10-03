//Atividade: implemente um programa em JS que use pelomenos 3 funções de string.

// Solicita uma frase ao usuário
let frase = prompt('Insira uma frase');

// Função 1: toUpperCase() - Converte a frase para letras maiusculas
let fraseMaiuscula = frase.toUpperCase();
document.write('<p>Frase em maiúsculas: ' + fraseMaiuscula + '</p>');

// Função 2: includes() - Verifica se a palavra "JAVASCRIPT" está presente na frase
let contemPalavra = fraseMaiuscula.includes('JAVASCRIPT');
if (contemPalavra) {
    document.write('<p>A frase contém a palavra "JAVASCRIPT".</p>');
} else {
    document.write('<p>A frase não contém a palavra "JAVASCRIPT".</p>');
}

// Função 3: slice() - Retorna uma parte da frase
let parteFrase = frase.slice(0, 10); // pegando os primeiros 10 caracteres
document.write('<p>Os primeiros 10 caracteres da frase: ' + parteFrase + '</p>');



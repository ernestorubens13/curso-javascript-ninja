/*
Crie um array com 5 items (tipos variados).
*/
let pessoa = ['Ernesto', 21, true, {sexo: 'Masculino', altura: 1.75}, function vazia (){ return null}];


/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
pessoa.push( function addItem (item) {
    pessoa.push(item);
    return pessoa;
})
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(pessoa.push([99.45, NaN, false]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + pessoa[7][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + pessoa.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + pessoa[7].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?
num = 10;
while (num <= 20) {
    num % 2 === 0 ? console.log(num) : '';
    num++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
num2 = 10;
while (num2 < 20) {
    num2 % 2 !== 0 ? console.log(num2) : '';
    num2++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (n1 = 100; n1 <= 120; n1++) {
    n1 % 2 === 0 ? console.log(n1) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for (n2 = 111; n2 <= 125; n2++) {
    n2 % 2 !== 0 ? console.log(n2) : '';
}
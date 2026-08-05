const frutas = ['Laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão', 'tangerina'];
const numeros = [1, 5, 7, 10, 2, 24, 15];

function buscaSequencial(vetor, valorBusca) {
    //percurso do vetor com for tradicional
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i;
    }
    return -1 // valorBusca não existe no vetor
}

console.log("Buscando Tangerina:", buscaSequencial(frutas, "tangerina"));
console.log("Buscando Limão:", buscaSequencial(frutas, "limão"));
console.log("Buscando Bandeclay:", buscaSequencial(frutas, "bandeclay"));

console.log("Buscando o número 5:", buscaSequencial(numeros, 5));
console.log("Buscando o número 3:", buscaSequencial(numeros, 3));

function buscaBinaria(vetor, valorBusca) {
    let ini = 0;
    let fim = vetor.length - 1;

    while (ini <= fim) {
        let meio = Math.floor((ini + fim) / 2);

        if (valorBusca === vetor[meio]) {
            return meio;
        }
        if (valorBusca > vetor[meio]) {
            ini = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1; // Valor não encontrado
}

let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];

console.log(`Posição de 99: ${buscaBinaria(nums, 99)}`);
console.log(`Posição de 100: ${buscaBinaria(nums, 100)}`);

import {objNomes} from '../data/vetor-obj-nomes.mjs';

function buscaBinaria(vetor, fnComp) {
    let ini = 0;
    let fim = vetor.length - 1;

    while (ini <= fim) {

        let meio = Math.floor((ini + fim)/2);

        switch(fnComp(vetor[meio])){
            case 0:
                return meio
            case 1:
                ini = meio + 1
                break
            default:
                fim = meio - 1
        }
    }

    return -1; // Valor não encontrado
}

//Usando ArrowFunction
console.log("Posição de first_name = ALEXANDRE", buscaBinaria(objNomes, (valorMeio, valorBusca = "ALEXANDRE") => {
    if(valorBusca === valorMeio.first_name) return 0;
    else if(valorBusca > valorMeio.first_name) return 1;
    else return -1;
}))

//Usando função separada
function compara(valorMeio, valorBusca = 'VINICIUS'){
    if(valorBusca === valorMeio.first_name) return 0;
    else if(valorBusca > valorMeio.first_name) return 1;
    else return -1;
}

console.log(`A posição de first_name = VINICIUS: ${buscaBinaria(objNomes, compara)}`)



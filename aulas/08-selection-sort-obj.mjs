let pass, comps, trocas

function selectionSort(vetor, fnComp) {
    pass = 0;
    comps = 0;
    trocas = 0;

    for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
        pass++;

        let posMenor = posSel;

        for (let i = posSel + 1; i < vetor.length; i++) {
            comps++;

            if (fnComp(vetor[posMenor], vetor[i])) {
                posMenor = i;
            }
        }

        if (posMenor !== posSel) {
            [vetor[posSel], vetor[posMenor]] =
                [vetor[posMenor], vetor[posSel]];

            trocas++;
        }
    }

    return vetor;
}


import { objMotoristas } from '../data/motoristas-obj-desord.mjs';

let objMotoristaObj = selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

console.log(objMotoristaObj)
console.log({pass, comps, trocas});

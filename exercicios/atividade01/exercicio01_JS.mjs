//

/*
DEFINIÇÃO DE REQUISITOS / ESPECIFICAÇÕES / CONSIDERAÇÕES /
RECOMENDAÇÔES:
ESTRUTURA: Construa uma aplicação em Javascript para a manipulação de
dados armazenados em uma estrutura de dados heterogênea dinâmica utilizando
um Array de Objetos por exemplo. O software deve ser capaz de realizar um
Cadastro de Alunos de uma Faculdade. Se preferir, poderá definir um limite
máximo de alunos cadastrados.
Você deve implementar os algoritmos sem usar Array.sort()
DADOS: Os dados/campos a serem armazenados sobre os alunos são
obrigatoriamente: NOME; RA; IDADE; SEXO; MÉDIA e RESULTADO
(Aprovado/Reprovado). Observação para média de aprovados: >= 6,0
TELA DE APRESENTAÇÃO DO PROGRAMA:
Conter as opções abaixo:
- Cadastrar Alunos.
- Relatório de Alunos em ordem crescente por Nome.
- Relatório de Alunos em ordem decrescente por RA.
- Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.
Obs: Para os relatórios, todos os campos de cada aluno deverão ser apresentados
na tela.
*/
import readline from 'readline/promises'
import { stdin as standardInput, stdout as standardOutput } from 'process';

let alunos = [
    {
        nome: "Carlos",
        ra: "62485",
        idade: 19,
        sexo: "M",
        media: 8.5,
        resultado: "APROVADO"
    },
    {
        nome: "Ana Maria",
        ra: "10452",
        idade: 22,
        sexo: "F",
        media: 5.5,
        resultado: "REPROVADO"
    },
    {
        nome: "Beatriz",
        ra: "85214",
        idade: 20,
        sexo: "F",
        media: 9.0,
        resultado: "APROVADO"
    },
    {
        nome: "Daniel",
        ra: "33145",
        idade: 25,
        sexo: "M",
        media: 4.0,
        resultado: "REPROVADO"
    },
    {
        nome: "Eduardo",
        ra: "94120",
        idade: 21,
        sexo: "M",
        media: 6.0,
        resultado: "APROVADO"
    }
]

async function menuOpcoes() {
    const interfaceLeitura = readline.createInterface({
        input: standardInput,
        output: standardOutput
    });

    let escolha;

    function fnComp(elem1, elem2, comp, ordem = "CRESCENTE"){
        //comp = comparação, o que ele deseja comparar (ex: nomes de alunos)
        //ordem = Ira listar em ordem crescente (digitar CRESCENTE), ou em ordem decrescente (digitar DECRESCENTE)
        if (ordem === "CRESCENTE"){
            return elem1[comp] > elem2[comp]
        }
        else if (ordem == "DECRESCENTE"){
            return elem1[comp] < elem2[comp]
        }
    }

    function filtrar(vetor, campo, valorDesejado){
        const vetorFiltrado = [];
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i][campo] === valorDesejado){
                vetorFiltrado.push(vetor[i]);
            }
        }
        return vetorFiltrado;
    }

    function listar(vetor, fnComp, comp, ordem = "CRESCENTE", ini = 0, fim = vetor.length - 1){
        if(fim <= ini) return; // condição de saída

        const pivot = fim; // pivô

        let div = ini - 1; // divisor de regiões (inicialmente, antes do ínicio do vetor)

        for (let i = ini; i < fim; i++){
            if(fnComp(vetor[pivot], vetor[i], comp, ordem)){
                div++;
                if (div !== i){
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]];
                }
            }
        }

        div++
        // ccolocamos o pivô em seu lugar definitivo

        if (div !== pivot){
            [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]];
        }

        listar(vetor, fnComp, comp, ordem, ini, div - 1);
        listar(vetor, fnComp, comp, ordem, div + 1, fim);
    }

    console.log("===== Sistema de Gerenciamento de Alunos =====")
    do {
        escolha = '0';

        console.log(
            "\nDigite o número da ação que deseja realizar:",
            "\n 1- Cadastrar Alunos;",
            "\n 2- Listar Relatório de Alunos em ordem crescente por Nome;",
            "\n 3- Listar Relatório de Alunos em ordem decrescente por RA;",
            "\n 4- Listar Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.",
            "\n 5- Encerrar programa."
        );
        
        escolha = await interfaceLeitura.question("Digite o valor: ")

        switch (escolha){
            case '1':
                console.log("\n==== 1- Cadastrar Alunos ====");

                let nomeAluno = "";
                do {
                    nomeAluno = await interfaceLeitura.question("\nDigite o nome completo do aluno: ");
                    nomeAluno = nomeAluno.trim();
                    if (nomeAluno.length === 0) {
                        console.log("\nO nome do aluno não pode ser vazio.");
                    }
                } while (nomeAluno.length === 0);

                let raAluno = "";
                do {
                    raAluno = await interfaceLeitura.question("\nDigite o RA do aluno: ");
                    raAluno = raAluno.trim();
                    if (raAluno.length !== 5 || Number.isNaN(Number(raAluno))) {
                        console.log("\nValor de RA inválido, deve ter exatos 5 dígitos numéricos.");
                    }
                } while (raAluno.length !== 5 || Number.isNaN(Number(raAluno)));

                let idadeAluno = "";
                do {
                    idadeAluno = await interfaceLeitura.question("\nDigite a idade do aluno: ");
                    idadeAluno = Number(idadeAluno.trim());
                    if (Number.isNaN(idadeAluno) || idadeAluno <= 0 || !Number.isInteger(idadeAluno)) {
                        console.log("\nIdade inválida. A idade deve ser um número inteiro maior que 0.");
                    }
                } while (Number.isNaN(idadeAluno) || idadeAluno <= 0 || !Number.isInteger(idadeAluno));

                let sexoAluno = "";
                do {
                    sexoAluno = await interfaceLeitura.question("\nDigite o sexo do aluno (M ou F): ");
                    sexoAluno = sexoAluno.trim().toUpperCase();
                    if (sexoAluno !== "M" && sexoAluno !== "F") {
                        console.log("\nO sexo do aluno deve ser M (Masculino) ou F (Feminino).");
                    }
                } while (sexoAluno !== "M" && sexoAluno !== "F");

                let mediaAluno = "";
                do {
                    mediaAluno = await interfaceLeitura.question("\nDigite a média do aluno: ");
                    mediaAluno = Number(mediaAluno.trim().replace(',', '.'));
                    if (Number.isNaN(mediaAluno) || mediaAluno > 10 || mediaAluno < 0) {
                        console.log("\nValor inválido, a média deve ser um número entre 0 e 10.");
                    }
                } while (Number.isNaN(mediaAluno) || mediaAluno > 10 || mediaAluno < 0);

                let resultadoAluno = "";
                if (mediaAluno >= 6) {
                    resultadoAluno = "APROVADO";
                } else {
                    resultadoAluno = "REPROVADO";
                }

                alunos.push({
                    nome: nomeAluno,
                    ra: raAluno,
                    idade: idadeAluno,
                    sexo: sexoAluno,
                    media: mediaAluno,
                    resultado: resultadoAluno
                })
                console.log("\nAluno cadastrado com sucesso!")
                break;
            case '2':
                console.log("\n=== 2- Listar Relatório de Alunos em ordem crescente por Nome ===");
                listar(alunos, fnComp, "nome");
                console.table(alunos);
                break;
            case '3':
                console.log("\n=== 3- Listar Relatório de Alunos em ordem decrescente por RA ===");
                listar(alunos, fnComp, "ra", "DECRESCENTE");
                console.table(alunos);
                break
            case '4':
                console.log("\n=== 4- Listar Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados ===");
                let alunosFiltrado = filtrar(alunos, "resultado", "APROVADO");
                listar(alunosFiltrado, fnComp, "nome");
                console.table(alunosFiltrado);
                break;
            case '5':
                console.log ("\n===== Obrigado. Volte Sempre! =====")
                break;
            default:
                console.log("\nValor inválido, tente novamente.")
                break;
        }
    } while (escolha !== '5')

    interfaceLeitura.close();
}

menuOpcoes();



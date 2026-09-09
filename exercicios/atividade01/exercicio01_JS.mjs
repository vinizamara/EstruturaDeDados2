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

async function menuOpcoes() {
    const interfaceLeitura = readline.createInterface({
        input: standardInput,
        output: standardOutput
    });

    let escolha = '0';

    do {
        switch (escolha){
            case '0':
                console.log(
                    "\nDigite o número da ação que deseja realizar:",
                    "\n 1- Cadastrar Alunos;",
                    "\n 2- Listar Relatório de Alunos em ordem crescente por Nome;",
                    "\n 3- Listar Relatório de Alunos em ordem decrescente por RA;",
                    "\n 4- Listar Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados."
                );
                escolha = await interfaceLeitura.question("Digite o valor: ")
                break;
            case '1':
                console.log("\n 1- Cadastrar Alunos.");
                escolha = '0';
                break;
            case '2':
                console.log("\n 2- Listar Relatório de Alunos em ordem crescente por Nome.");
                escolha = '0';
                break;
            case '3':
                console.log("\n 3- Listar Relatório de Alunos em ordem decrescente por RA.");
                escolha = '0';
                break
            case '4':
                console.log("\n 4- Listar Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.");
                escolha = '0';
                break;
            case '5':
                console.log ("Até mais!")
                break
            default:
                console.log("\n Valor incorreto!")
                escolha = '0';
                break;
        }
    } while (escolha !== '5')

    console.log ("\n Até mais!")

    interfaceLeitura.close();
}

menuOpcoes();



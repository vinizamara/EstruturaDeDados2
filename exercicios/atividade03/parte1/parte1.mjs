/*
PARTE 1: PERCURSOS E FORMA DA ÁRVORE EM CÓDIGO (Valor 3,0)
Crie o arquivo parte1.mjs, que importa a classe BinarySearchTree vista em aula
(BinarySearchTree.mjs) e executa os exercícios abaixo, exibindo na tela o resultado de cada
um com um título. Cada exercício vale 1,0. Os valores são inseridos na ordem indicada, em
uma ABB inicialmente vazia.
*/


import BinarySearchTree from "../../../lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree();


/*
Exercício 1: insira 50, 30, 70, 20, 40, 60, 80 e exiba os percursos em-ordem, pré-ordem
e pós-ordem, cada um em uma linha (por exemplo, Em-ordem: 20, 30, 40, ...), usando
uma função de callback que guarda os valores em um array. Em um comentário no código,
explique por que o em-ordem sai em ordem crescente
*/
console.log("\n======EXERCICIO 01:======")

arvore.insert(50);
arvore.insert(30);
arvore.insert(70);
arvore.insert(20);
arvore.insert(40);
arvore.insert(60);
arvore.insert(80);

let percursoInOrder = [];
arvore.inOrderTraversal(val => percursoInOrder.push(val));
console.log("\nEm-Ordem: ", percursoInOrder);

let percursoPreOrder = [];
arvore.preOrderTraversal(val => percursoPreOrder.push(val));
console.log("\nPré-Ordem: ", percursoPreOrder);

let percursoPosOrder = [];
arvore.postOrderTraversal(val => percursoPosOrder.push(val));
console.log("\nPós-Ordem: ", percursoPosOrder);


/*
RESPOSTAS: O Em-Ordem sai em ordem crescente pois ela segue o seguinte caminho:
percorre todos os nós da subárvore da esquerda
pega a raiz
percorre todos os nós da subárvore da direita
Tendo em vista que em uma árvore binária de busca, o menor valor fica na posição a esquerda e o maior na direita,
por começarmos pelo primeiro na esquerda, chegarmos na raiz e seguirmos para a direita, acabamos pegando todos os valores em ordem
crescente
*/

/*
Exercício 2: acrescente à classe os métodos height() e countLeaves() (a altura é contada
em arestas: árvore vazia devolve -1 e árvore só com a raiz devolve 0). Insira 8, 3, 10, 1, 6,
14, 4, 7, 13 e exiba os três percursos, a altura e o número de folhas.
*/
console.log("\n======EXERCICIO 02:======")

const arvore2 = new BinarySearchTree();

arvore2.insert(8);
arvore2.insert(3);
arvore2.insert(10);
arvore2.insert(1);
arvore2.insert(6);
arvore2.insert(14);
arvore2.insert(4);
arvore2.insert(7);
arvore2.insert(13);

percursoInOrder = [];
arvore2.inOrderTraversal(val => percursoInOrder.push(val));
console.log("\nPercurso Em-Ordem:", percursoInOrder);

percursoPreOrder = [];
arvore2.preOrderTraversal(val => percursoPreOrder.push(val));
console.log("\nPercurso Pré-Ordem:", percursoPreOrder);

percursoPosOrder = [];
arvore2.postOrderTraversal(val => percursoPosOrder.push(val));
console.log("\nPercurso Pós-Ordem:", percursoPosOrder);

console.log("\nA altura da árvore é: ", arvore2.height());

console.log("\nA quantidade de folhas da árvore é: ", arvore2.countLeaves());

/*
Exercício 3: (a) insira 1, 2, 3, 4, 5 e exiba a altura; em um comentário, explique por que
essa forma é ruim para a busca. 
(b) insira 50, 70, 30, 60, 80, 20, 40 (os mesmos valores
do Exercício 1, em outra ordem) e compare a pré-ordem com a do Exercício 1: a árvore ficou
igual? 
(c) escolha outra ordem de inserção dos mesmos valores do Exercício 1 que gere uma
árvore diferente e mostre, pela pré-ordem, que ela é diferente.
*/

console.log("\n======EXERCICIO 03:======")
console.log("\n======LETRA A:======")

const arvore3 = new BinarySearchTree();

arvore3.insert(1);
arvore3.insert(2);
arvore3.insert(3);
arvore3.insert(4);
arvore3.insert(5);

console.log("\nA altura da árvore é: ", arvore3.height());

/*
EXERCICIO 3 A):
REPOSTA: 
Essa forma de árvore é inadequada pois transforma uma ABB em apenas uma forma de busca sequêncial
reduzindo sua eficiência de um O(log n) para um O(n).
*/

console.log("\n======LETRA B:======")

const arvore4 = new BinarySearchTree();

arvore4.insert(50);
arvore4.insert(70);
arvore4.insert(30);
arvore4.insert(60);
arvore4.insert(80);
arvore4.insert(20);
arvore4.insert(40);

percursoPreOrder = [];
arvore4.preOrderTraversal(val => percursoPreOrder.push(val));
console.log("\nPercurso Pré-Ordem Exercicio 03 B:", percursoPreOrder);

percursoPreOrder = [];
arvore.preOrderTraversal(val => percursoPreOrder.push(val));
console.log("\nPercurso Pré-Ordem Exercicio 1:", percursoPreOrder);

/*
EXERCICIO 3 B):
REPOSTA: 
Sim, a árvore do exercicio 03 ficou igual a árvore do exercicio 01.
*/

console.log("\n======LETRA C:======")

const arvore5 = new BinarySearchTree();

arvore5.insert(70);
arvore5.insert(50);
arvore5.insert(30);
arvore5.insert(20);
arvore5.insert(60);
arvore5.insert(80);
arvore5.insert(40);

percursoPreOrder = [];
arvore5.preOrderTraversal(val => percursoPreOrder.push(val));
console.log("\nPercurso Pré-Ordem Exercicio 03 C:", percursoPreOrder);

percursoPreOrder = [];
arvore.preOrderTraversal(val => percursoPreOrder.push(val));
console.log("\nPercurso Pré-Ordem Exercicio 1:", percursoPreOrder);

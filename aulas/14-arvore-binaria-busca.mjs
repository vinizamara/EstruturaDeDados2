import BinarySearchTree from "../lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percursoIN = []
let percursoPRE = []
let percursoPOS = []

// Percurso em-ordem:
arvore.inOrderTraversal(val => percursoIN.push(val));
console.log('Percurso em-ordem: ', percursoIN);

// Percurso pré-ordem:
arvore.preOrderTraversal(val => percursoPRE.push(val));
console.log('Percurso pré-ordem: ', percursoPRE);

// Percurso Pos-ordem:
arvore.postOrderTraversal(val => percursoPOS.push(val));
console.log('Percurso pós-ordem: ', percursoPOS);

// Testes de Remoção
let percursoREM = [];
arvore.inOrderTraversal(val => percursoREM.push(val));
console.log('ANTES DAS REMOÇÕES:', percursoREM);

// Remoção de um nodo de grau 0
arvore.remove(64);
percursoREM = [];
arvore.inOrderTraversal(val => percursoREM.push(val));
console.log('Após a remoção do 64:', percursoREM);

// Remoção de um nodo de grau 1
arvore.remove(1);
percursoREM = [];
arvore.inOrderTraversal(val => percursoREM.push(val));
console.log('Após a remoção do 1:', percursoREM);

// Remoção de um nodo de grau 2
arvore.remove(15);
percursoREM = [];
arvore.inOrderTraversal(val => percursoREM.push(val));
console.log('Após a remoção do 15:', percursoREM);

// Remoção da raiz
arvore.remove(48);
percursoREM = [];
arvore.inOrderTraversal(val => percursoREM.push(val));
console.log('Após a remoção do 48:', percursoREM);

percursoREM = [];
arvore.preOrderTraversal(val => percursoREM.push(val));
console.log('O novo valor da raiz é ', percursoREM[0])

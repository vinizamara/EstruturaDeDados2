// Classe que representa a unidade de informação da árvore binária de busca

class Node {
    constructor(val) {
        this.data = val; // Armazena a informação da árvore binária de busca
        this.left = null; // Ponteiro para a subárvore esquerda
        this.right = null; // Ponteiro para a subárvore direita
    }
}

// Classe que implementa a árvore binária de busca
export default class BinarySearchTree {
    #root // raiz da árvore
    
    constructor() {
        this.#root = null;
    }

    // método para efetuar inserção ABB (Árvore Binária de Busca)
    insert(val){

        const inserted = new Node(val);

        // 1 Caso: Árvore Vazia
        // O primeiro nodo fica sendo a raiz da árvore
        if (this.#root === null) this.#root = inserted;

        // 2 Caso: inserção recursiva, percorrendo a árvore recursivamente
        else this.#insertNode(inserted, this.#root);
    }

    // Método PRIVADO que insere um novo nodo na árvore
    #insertNode(inserted, root){

    }
};

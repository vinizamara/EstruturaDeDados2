//Classe que representa a unidade de informação da árvore binária de busca
class Node {
    constructor(val) {
        this.data = val; // armazena a informação da árvore binária de busca
        this.left = null; // ponteiro para a subárvore esquerda
        this.right = null; // ponteiro para a subárvore direita
    }
}

//Classe que implementta a árvore binária de busca
export default class BinarySearchTree {
    #root; //raiz da árvore

    constructor() {
        this.#root = null;
    }


    //método para efetuar inserção ABB
    insert(val) {
        const inserted = new Node(val);

        //1º caso: árvore vazia
        //o primeiro nodo fica sendo a raiz da árvore
        if (this.#root === null) this.#root = inserted;
        //2º caso: inserção recursiva, percorrendo a árvore recursivamente
        else this.#insertNode(inserted, this.#root);
    }


    //método PRIVADO que insere um novo nodo na árvore
    #insertNode(inserted, root) {
        // 1º caso: valor a ser inserido é MENOR que o valor da raiz
        // inserção ocorre à ESQUERDA da raiz
        if (inserted.data < root.data) {
            // se a posição à esquerda da raiz está desocupada, faz a inserção
            if (root.left === null) {
                root.left = inserted
                // senão, reinicia o processo de inserção recursivamente com a subárvore esquerda como raiz 
            } else {
                this.#insertNode(inserted, root.left)
            }
        }
        // 2ºcaso: valor a ser inserido é MAIOR que o valor da raiz
        // inserção ocorre à DIREITA da raiz
        else if (inserted.data > root.data){

            if (root.right === null) {
                root.right = inserted
            }// senão, reinicia o processo de inserção recursivamente com a subárvore direita como raiz  
            else {
                this.#insertNode(inserted, root.right)
            }
        }
        //3° caso: o valor a ser inserido é IGUAL ao valor da raiz;
        // senão, reinicia o processo de inserção, recursivamente, com a subárvore esquerda como raiz
        else{
            return; //Não vai permitir retornar um valor igual
        }
    }

    /*
    PECURSOS
    Métodos que executa o percurso em-ordem (In-order traversal) na árvore
    Ordem do percurso
    1° Percorre recursivamente em-ordem a subárvore esquerda
    2° Visita a raiz
    3° Percorre recursivamente em-ordem a subárvore direita
    */

    inOrderTraversal(fnCallback, root = this.#root){
        if(root != null){
            this.inOrderTraversal(fnCallback, root.left)  //1°
            fnCallback(root.data)                         //2°
            this.inOrderTraversal(fnCallback, root.right) //3°
        }
    }

    /*
    Método que executa o percurso pré-ordem (pre-order traversal) na árvore
    Ordem do percurso:
    1° Visita a raiz
    2° Percorre recursivamente em-ordem a subárvore esquerda
    3° Percorre recursivamente em-ordem a subárvore direita
    */
    preOrderTraversal(fnCallback, root = this.#root){
        if(root != null){
            fnCallback(root.data)                          //1°
            this.preOrderTraversal(fnCallback, root.left)  //2°
            this.preOrderTraversal(fnCallback, root.right) //3°
        }
    }

    /*
    Método que executa o percurso pós-ordem (after-order traversal) na árvore
    Ordem do percurso:
    1° Percorre recursivamente em-ordem a subárvore esquerda
    2° Percorre recursivamente em-ordem a subárvore direita
    3° Visita a raiz
    */
    postOrderTraversal(fnCallback, root = this.#root){
        if(root != null){
            this.postOrderTraversal(fnCallback, root.left)  //1°
            this.postOrderTraversal(fnCallback, root.right) //2°
            fnCallback(root.data)                           //3°
        }
    }


    /* Método PRIVADO que retorna o nodo de MENOR valor da árvore */
    #minNode(root){
        // a partir da raiz, percorre á esquerda enquanto possível
        while(root !== null && root.left !== null){
            root = root.left;
        }
        return root;
    }

    /* Método PRIVADO que retorna o nodo de MAIOR valor da árvore */
    #minNode(root){
        // a partir da raiz, percorre á direita enquanto possível
        while(root !== null && root.right !== null){
            root = root.right;
        }
        return root;
    }

    /* Método PÚBLICO para excluir um nodo da árvore */
    remove(val){
        this.#root = this.#removeNode(this.#root, val);
    }

    /* Método PRIVADO para excluir um nodo da árvore */
    #removeNode(root, val){
        //1ª caso: árvore vazia
        if (root === null){
            return null;
        }

        //2 caso: o valor a ser excluído é MENOR que o valor da raiz
        // Continua recursivamente o processo de exclusão pela subárvore ESQUERDA
        if (val < root.data){
            root.left = this.#removeNode(root.left, val);
            return root;
        }

        //3 caso: o valor a ser excluído é MAIOR que o valor da raiz
        // Continua recursivamente o processo de exclusão pela subárvore DIREITA
        if (val < root.data){
            root.right = this.#removeNode(root.right, val);
            return root;
        }

        /* 
        4 caso: o valor a ser excluído é IGUAL ao valor da raiz
        o nodo a ser excluido foi encontrado; é necessário, agora verificar 
        o GRAU desse nodo para aplicar o algoritmo de exclusão apropriado
        */

            /* 4.1: nodo de grau 0 (nodo folha) */
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }

            /* 4.2: nodo de grau 1, com subárvore á esquerda */
            if (root.left !== null && root.right === null){
                root = root.left
                return root;
            }

            /* 4.3: nodo de grau 1, com subárvore á direita */
            if (root.left === null && root.right !== null){
                root = root.right
                return root;
            }
    }

}

percurso = []
arvore.inOrderTraversal(val => percurso.push(val))

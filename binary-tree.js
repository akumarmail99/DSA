class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {

    // construtor
    constructor() {
        this.root = null;
    }
    
    // Inserting an element
    insert(value) {
        
        if (this.root == null) {
            this.root =  new TreeNode(value);
        } else {
            const searchTree = function(data) {
                if (value < data.value) {
                    if (data.left) {
                        searchTree(data.left);
                    } else {
                        data.left = new TreeNode(value);
                    }
                    return;
                } else if (value > data.value) {
                    if (data.right) {
                        searchTree(data.right);
                    } else {
                        data.right = new TreeNode(value);
                    }
                    return;
                } else {
                    return;
                }
            }

            searchTree(this.root);
        }
    }

    // Find Min
    minValue(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
    // Find Max
    maxValue(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    // Deleting an element
    removeElement(node, value) {
        if (this.root == null) {
            return;
        }

        if (value == node.value) {
            if (node.left == null && node.right == null) {
                return null;
            } else if (!node.right) {
                return node.left;
            } else if (!node.left){
                return node.right;
            } else {
                const minNode = this.minValue(node.right);
                node.value = minNode.value;
                node.right = this.removeElement(node.right, minNode.value);
                return node;
            }
        } else if (value < node.value) {
            node.left = this.removeElement(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeElement(node.right, value);
            return node;
        }
    }

    // Searching an element
    searchElement(node, value) {
        while(node !== null) {
            if (value == node.value) {
                return true;
            } else if (value < node.value) {
                node = node.left;
            }else if (value > node.value) {
                node = node.right;
            }
        }
        return false;
    }
    // Traverse

        // Depth first search traversal

            // Pre-Order Traversal (current - left - right)
            PreOrderTraverse(node) {
                if (node == null) {
                    return;
                }

                console.log(node.value);

                this.PreOrderTraverse(node.left);

                this.PreOrderTraverse(node.right);
            }
            
            // In-Order Traversal (left - current - right)
            InOrderTraverse(node) {
                if (node == null) {
                    return;
                }

                this.InOrderTraverse(node.left);

                console.log(node.value);

                this.InOrderTraverse(node.right);
            }

            // Post-Order traversal (left - right - current)

            PostOrderTraverse(node) {
                if (node == null) {
                    return;
                }

                this.PostOrderTraverse(node.left);

                this.PostOrderTraverse(node.right);
                
                console.log(node.value);
            }

        // Breath first search traversal

            // Level Order Traversal

    // Height of the tree

    // Find level of the tree

    // Size of the entire tree
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(6);
tree.insert(4);
tree.insert(8);
tree.insert(14);
tree.insert(12);
tree.insert(16);
tree.insert(20);

// console.log('min node: ', tree.minValue(tree.root));
// console.log('max node: ', tree.maxValue(tree.root));
// const seearhNode = 10;
// console.log('Is Node Present: ', tree.searchElement(tree.root, seearhNode));
// tree.removeElement(tree.root, seearhNode);
// console.log('Is Node Present: ', tree.searchElement(tree.root, seearhNode));
// console.log('min node: ', tree.minValue(tree.root));
// console.log('max node: ', tree.maxValue(tree.root));

// InOrder Traversal
console.log('InOrderTraversal...');
tree.InOrderTraverse(tree.root);

// PreOrder Traversal
console.log('PreOrder Traversal...');
tree.PreOrderTraverse(tree.root);

// PostOrder Traversal
console.log('PostOrder Traversal...');
tree.PostOrderTraverse(tree.root);
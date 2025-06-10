class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Test example
const trie = new Trie();
const output = [null];

output.push(trie.insert("apple"));      
output.push(trie.search("apple"));
output.push(trie.search("app"));        
output.push(trie.insert("app"));        
output.push(trie.search("app"));     

console.log(output);
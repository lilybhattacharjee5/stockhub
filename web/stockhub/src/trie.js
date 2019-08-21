import _ from 'underscore';

export class TrieNode {
  constructor(value, children) {
    this.children = children;
    this.value = value;
    this.searchResult = [];
  }

  search = (node, string) => {
    if (!string) {
      this.searchResult = [];
      return;
    };
    this.searchResult = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return;
      }
    }
    return this.recurseSearch(node);
  }

  recurseSearch = (node) => {
    if (_.isEmpty(node.children)) {
      this.searchResult.push(node.value);
    }
    const childNodes = Object.values(node.children);
    for (let i = 0; i < childNodes.length; i++) {
      this.recurseSearch(childNodes[i]);
    }
  }

  insert = (node, string) => {
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode(char, {});
      }
      node = node.children[char];
    }
    node.value = string;
  }
}

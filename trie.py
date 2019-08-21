import csv

class TrieNode:
    def __init__(self, value, children):
        self.children = {child.value: child for child in children}
        self.value = value
        self.search_result = []

    def search(self, node, string):
        self.search_result = []
        for char in string:
            if char in node.children:
                node = node.children[char]
            else:
                return None
        return self.recurse_search(node)

    def recurse_search(self, node):
        if node.children == {}:
            self.search_result.append(node.value)
        child_nodes = node.children.values()
        for child in child_nodes:
            self.recurse_search(child)

    def insert(self, node, string):
         for char in string:
             if char not in node.children.keys():
                 node.children[char] = TrieNode(char, [])
             node = node.children[char]
         node.value = string

stock_trie = TrieNode(None, [])
with open("./companylist.csv") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")
    for row in csv_reader:
        symbol, name = row[0], row[1]
        stock_trie.insert(stock_trie, name)
# print(stock_trie.children)
print(stock_trie.search(stock_trie, "Z"))
print(stock_trie.search_result)

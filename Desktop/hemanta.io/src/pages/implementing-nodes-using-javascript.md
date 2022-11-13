---
title: "Implementing Nodes Using JavaScript"
date: "2022-01-26"
excerpt: "Nodes are the fundamental building blocks of many data structures in computer science."
categories: ["JavaScript-Data Structures & Algorithms"]
---

```toc

```

Nodes are the fundamental building blocks of many data structures: [linked lists](https://hemanta.io/implementing-a-linked-list-in-javascript/), stacks, [queues](https://hemanta.io/implementing-the-queue-data-structure-in-javascript/), [trees](https://hemanta.io/implementing-a-tree-data-structure-in-javascript/) and more.

An individual node contains data and links to other nodes. Each data structure adds additional constraints or behavior to these features to create the desired structure.

In this blog post, we will learn to implement nodes using JavaScript.

First off, we will create a basic node that contains data and one link to another node. The node’s data will be specified when creating the node. Plus, a node’s link to the next node is ~~null~~, when there are no nodes to traverse.

Below, we have used the ~~Node~~ class. The constructor accepts two arguments: ~~data~~ & ~~next~~. It assigns the ~~data~~ argument to the ~~data~~ property of the ~~Node~~ instance and the ~~next~~ argument to the ~~next~~ property of the ~~Node~~ instance.

Note that we have set the ~~next~~ property on the ~~Node~~ class to ~~null~~, because when a node is first created, it is a node with no links.

```js {numberLines}
class Node {
  constructor(data, next) {
    this.data = data
    this.next = null
  }
}

const firstNode = new Node(24)

console.log(firstNode.data)
// Node { data: 24 }

console.log(firstNode.next)
// null
```

On line 8, we have instantiated a ~~Node~~ with the value ~~24~~ and set it to ~~firstNode~~. Then we have used ~~console.log()~~ to print out the instance’s ~~data~~ property and the ~~next~~ property.

### Node Methods: Set Next Node

Currently when a node is created, the ~~next~~ node is initially set to ~~null~~. However, we want to allow the ~~next~~ node to be updated so it can be traversed and used in more complex data structures.

We will achieve this by implementing the ~~setNextNode()~~ method in the ~~Node~~ class. The ~~setNextNode()~~ method takes ~~node~~ as an argument and updates the ~~next~~ node property appropriately.

```js {numberLines}
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  setNextNode(node) {
    this.next = node
  }
}

const firstNode = new Node("I am a Node instance.")

const secondNode = new Node("I am a Node instance too.")

firstNode.setNextNode(secondNode)

console.log(firstNode.next)
// Node { data: 'I am a Node instance too.', next: null }
```

On line 16, we have called the ~~setNextNode()~~ method on ~~firstNode~~. We have created a second ~~Node~~ instance called ~~secondNode~~ and passed it as an argument to the call to ~~setNextNode()~~.

### Set Next Node Validation

Currently, the node that gets passed in as an argument to the ~~setNextNode()~~ method can be of any data type. However, we want to only allow arguments that are ~~instanceof~~ of nodes or ~~null~~.

> Note: We want to allow ~~null~~ as an argument in the event that we want to break the link between a node and its next node.

So, let’s add in a check:

```js {numberLines, 8-12}
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node
    } else {
      throw new Error("The next node must be an instance of the Node class.")
    }
  }
}

const firstNode = new Node("I am a Node instance.")

firstNode.setNextNode("12")

console.log(firstNode.next)
// Error: The next node must be an instance of the Node class.
```

On line 18, when we tried to set the value of the ~~next~~ property of the ~~firstNode~~ instance to ~~12~~, (which is of _string_ data type), the program raised an error.

### Get Next Node

We can access the ~~next~~ node property directly. However, if we ever want it to be accessed in a special way, we can implement a getter to handle the preprocessing.

```js {numberLines, 15-18}
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node
    } else {
      throw new Error("The next node must be an instance of the Node class.")
    }
  }

  getNextNode() {
    return this.next
  }
}

const firstNode = new Node("I am a Node instance.")

const secondNode = new Node("I am a Node instance too.")

firstNode.setNextNode(secondNode)

console.log(firstNode.getNextNode())
// Node { data: 'I am a Node instance too.', next: null }
```

Above, we have created a simple ~~getNextNode()~~ method that just returns the ~~next~~ node property.

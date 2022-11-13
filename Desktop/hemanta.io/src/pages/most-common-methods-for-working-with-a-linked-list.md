---
title: "Most Common Methods for Working With a Linked List"
date: "2021-09-25"
excerpt: "size(), getFirst(), getLast(), clear(), removeFirst(), removeLast(), insertLast(), getAt(), removeAt()"
categories: ["MongoDB"]

---

```toc

```

In my previous [post](https://hemanta.io/implementing-a-linked-list-in-javascript/), we learnt how to implement a linked list in JavaScript. In this post, we will learn about some of the most common methods used for working with a linked list.

### size()

**Direction**: Implement a method named ~~size~~ that returns the number of nodes in the linked list.

```js {numberLines, 17-28}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")
list.insertFirstNode("c")

console.log(list.size())
// 3
```

### gestFirst

**Direction**: Implement a method named ~~getFirst~~ that returns the first node of the linked list.

The solution is easy as we know that the ~~head~~ property points to the first node of the linked list.

```js {numberLines, 17-19}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  getFirst() {
    return this.head
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")

console.log(list.getFirst())
// Node { data: 'b', next: Node { data: 'a', next: null } }
```

### getLast()

**Direction**: Implement a method named ~~getLast~~ that returns the last node (tail) of the linked list.

```js {numberLines, 17-35}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  lastNode() {
    // The case where the linked list does not have any nodes associated with it.
    if (!this.head) {
      return null
    }

    let tailNode

    let node = this.head

    while (node) {
      if (node.next === null) {
        tailNode = node
      }
      node = node.next
    }
    return tailNode
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")

console.log(list.lastNode())
// Node { data: 'a', next: null }
```

### clear()

**Direction**: Implement a method named ~~clear~~ that empties the linked list of any nodes.

We can empty a linked list simply by reassigning the ~~head~~ property to ~~null~~.

```js {numberLines, 29-31}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0

    let node = this.head

    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  clear() {
    this.head = null
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")

console.log(list.size())
// 2

list.clear()

console.log(list.size())
// 0
```

### removeFirst()

**Direction:** Implement a method called ~~removeFirst~~, which removes _only_ the first node of the linked list. After the first node gets removed, the head points to the second node. Also, consider the case where the linked list does not have any nodes associated with it.

```js {numberLines, 17-22}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  removeFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")
list.insertFirstNode("c")

console.log(list)
// LinkedList {
//  head: Node { data: 'c', next: Node { data: 'b', next: [Node] } }
// }

list.removeFirst()

console.log(list)
// LinkedList {
//  head: Node { data: 'b', next: Node { data: 'a', next: null } }
// }
```

### removeLast()

**Direction:** Implement a method called ~~removeLast~~ that removes the last node of the linked list.

```js {numberLines, 30-43}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0

    let node = this.head

    while (node) {
      counter++

      node = node.next
    }
    return counter
  }

  removeLast() {
    if (!this.head) {
      return
    }

    let node = this.head

    while (node) {
      if (node.next.next === null) {
        node.next = null
      }
      node = node.next
    }
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")
list.insertFirstNode("c")

console.log(list)
// LinkedList {
//  head: Node { data: 'c', next: Node { data: 'b', next: [Node] } }
// }
console.log(list.size())
// 3

list.removeLast()

console.log(list)
// LinkedList {
//   head: Node { data: 'c', next: Node { data: 'b', next: null } }
// }
console.log(list.size())
// 2
```

### insertLast()

**Direction:** Implement a method called ~~insertLast~~ that inserts a new node with the provided data at the end of the linked list.

```js {numberLines, 17-33}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  insertLast(data) {
    const newLastNode = new Node(data)

    if (this.head === null) {
      this.head = newLastNode
    }
    let lastNode
    let node = this.head

    while (node) {
      if (node.next === null) {
        lastNode = node
      }
      node = node.next
    }
    lastNode.next = newLastNode
  }
}

const list = new LinkedList()

list.insertFirstNode("a")

console.log(list)
// LinkedList { head: Node { data: 'a', next: null } }

list.insertLast("b")

console.log(list)
// LinkedList {
//  head: Node { data: 'a', next: Node { data: 'b', next: null } }
// }
```

### getAt()

**Direction:** Implement a method called ~~getAt~~ that returns the node at the provided index. Also, remember to handle two edge cases: (a) the linked list is empty & (b) the value of the index is greater than the size of the linked list. (example: say we have 3 nodes and we want to find out the node at index 6.)

```js {numberLines, 17-30}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  getAt(index) {
    let counter = 0
    let node = this.head

    while (node) {
      if (index === counter) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")
list.insertFirstNode("c")

console.log(list.getAt(1))
// Node { data: 'b', next: Node { data: 'a', next: null } }
```

Note that we are handling both the edge cases on line 28. If the linked list is empty, ~~this.head~~ will be ~~null~~; we will not enter the ~~while~~ loop and return ~~null~~. Also, if the value of the index is greater than the size of the linked list, the ~~while~~ loop will run but will not find the node and we will return ~~null~~ as well.

### removeAt()

**Direction:** Implement a method called ~~removeAt~~ that removes a node at the provided index.

```js {numberLines, 17-35}
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirstNode(data) {
    this.head = new Node(data, this.head)
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next
      return
    }

    let previousIndex = index - 1
    let counter = 0
    let node = this.head

    while (node) {
      if (previousIndex === counter) {
        node.next = node.next.next
      }
      counter++
      node = node.next
    }
    return null
  }
}

const list = new LinkedList()

list.insertFirstNode("a")
list.insertFirstNode("b")

console.log(list)
// LinkedList {
//  head: Node { data: 'b', next: Node { data: 'a', next: null } }
// }

list.removeAt(1)

console.log(list)
// LinkedList { head: Node { data: 'b', next: null } }
```

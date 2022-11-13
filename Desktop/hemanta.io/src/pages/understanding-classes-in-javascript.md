---
title: "Understanding Classes in JavaScript"
date: "2021-06-17"
excerpt: "Reduce duplicate code and debugging time by using classes in JavaScript."
categories: ["JavaScript"]
---

```toc

```

Classes are used to produce similar objects, reducing duplicate code and debugging time. We can think of them as templates for objects.

### Constructor

By convention, we capitalize and CamelCase class names. JavaScript calls the constructor method every time it creates a new instance of a class.

```js {numberLines}
class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
    this.copiesSold = 0
  }

  sellOneCopy() {
    this.copiesSold++
  }
}
```

JavaScript will invoke the constructor method every time we create a new instance of our ~~Book~~ class. The constructor method accepts two arguments: ~~title~~ & ~~author~~.

The ~~this~~ keyword inside the constructor refers to an instance of the ~~Book~~ class. We use ~~this~~ to set the value of ~~Book~~ class instances' ~~title~~ and ~~author~~ properties to the ~~title~~ and ~~author~~ input parameters.

### Instance

An instance is an object that contains the property names and methods of a class, but with unique property values.

We use the ~~new~~ keyword to create an instance of our ~~Book~~ class. The ~~new~~ keyword runs the constructor, runs the code inside it and returns the new instance.

We call a method by appending the instance with a period (~~.~~) and the method name including opening and closing parentheses.

```js {numberLines}
// myBook variable stores an instance of our Book class.
const myBook = new Book("A Starry Night", "Hemanta Sundaray")

console.log(myBook)
//Book { title: 'A Starry Night', author: 'Hemanta Sundaray' }

console.log(myBook.author)
// Hemanta Sundaray

myBook.sellOneCopy()

console.log(myBook.copiesSold)
// 1
```

### Inheritance

When multiple classes share properties and methods, we use inheritance to reduce the amount of code we need to write.

With inheritance, we create a parent class(also known as a superclass) with properties and methods multiple child classes(also known as subclasses) share. The child classes inherit properties and methods from the parent class.

Let’s create a child class named ~~Ebook~~ by extending the shared properties and methods in the ~~Book~~ parent class.

```js {numberLines}
class Ebook extends Book {
  constructor(title, author, fileSize) {
    super(title, author)
    this.fileSize = fileSize
  }
}
```

- **extends**: The ~~extends~~ keyword makes the methods of the ~~Book~~ class available inside the ~~Ebook~~ class.

- **super**: The ~~super~~ keyword calls the constructor of the parent class. In our case, ~~super(title, author)~~ passes the ~~title~~ and ~~author~~ arguments of the ~~Ebook~~ class to the constructor of the ~~Book~~ class. When the ~~Book~~ constructor runs, it sets ~~this.title=title~~ and ~~this.author=author~~ for new ~~Ebook~~ instances.

> **Note**: We must always call the ~~super~~ method before we can use the ~~this~~ keyword - if you don’t, JavaScript will throw a reference error.

In addition to inherited features, child classes can contain their own properties and methods. ~~fileSize~~ is a new property that is unique to the ~~Ebook~~ class, so we set it in the ~~Ebook~~ constructor.

```js {numberLines}
class Ebook extends Book {
  constructor(title, author, fileSize) {
    super(title, author)
    this.fileSize = fileSize
  }
}

const myEbook = new Ebook("Learn TypeScript", "Hemanta Sundaray", "1MB")

myEbook.sellOneCopy()

console.log(myEbook.copiesSold)
// 1
```

In the code above, because the properties and methods of the ~~Book~~ parent class are available to the ~~Ebook~~ child class, we are able to call the ~~sellOneCopy()~~ method on the ~~myEbook~~ instance.

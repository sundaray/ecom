---
title: "An Introduction to Python Class Inheritance"
date: "2021-08-23"
excerpt: "Learn to create a child class that inherits attributes and methods from a parent class.."
categories: ["Python"]
---

```toc

```

###### This blog post assumes that you are familiar with the concept of Python classes. If not, you should first read [this](https://hemanta.io/an-introduction-to-python-classes/) blog post and come back.

If we want to write a class based on an already existing class, we can use inheritance.

The new class (aka child, subclass or derived class) will inherit the attributes and methods of the existing class (aka parent, superclass or base class).

The child class is free to define new attributes and methods of its own.

Let’s say we have an existing ~~Book~~ class.

```py {numberLines}
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.sold = 0

    def sell(self):
        self.sold += 1
```

### Creating a child class

If we want to model an ebook, we can base it on the ~~Book~~ class, because an e-book is a specific kind of book.

Before we add any attributes or methods that are specific to an ebook (for example: file size), first, let’s create an ~~Ebook~~ child class that will inherit all the attributes and methods defined in the parent ~~Book~~ class.

```py {numberLines, 11-20}
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.sold = 0

    def sell(self):
        self.sold += 1


class Ebook(Book):
    """Representing an ebook"""

    def __init__(self, title, author):
        super().__init__(title, author)

kindle = Ebook('Python Pro', 'Hemanta Sundaray')

print(kindle.title)
# Python Prp
```

On line 11, we define the ~~Ebook~~ class and include the name of the parent ~~Book~~ class in parentheses.

On line 15, we use the ~~super()~~ function to tell Python to call the ~~\_\_init\_\_()~~ method from the ~~Book~~ class. This gives the ~~Ebook~~ instance all the attributes defined in that method.

On line 17, we have created and stored an ~~Ebook~~ instance in a variable named ~~kindle~~.

### Adding attributes and methods in the child class

Now, let’s add some attributes and methods that will make an ebook distinct from a general book.

Let’s add an attribute called ~~fileSize~~ and a method called ~~file_size()~~, which simply prints a message.

```py {numberLines, 14-14, 16-16, 18-19, 22-22, 24-25}
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        self.sold = 0

    def sell(self):
        self.sold += 1


class Ebook(Book):
    """Representing an ebook"""

    def __init__(self, title, author, fileSize):
        super().__init__(title, author)
        self.fileSize = fileSize

    def file_size(self):
        print(f"The file size of the ebook is {self.fileSize}.")


kindle = Ebook('Python Pro', 'Hemanta Sundaray', '1 MB')

print(kindle.file_size())
# The file size of the ebook is 1 MB.
```

The ~~fileSize~~ attribute and the ~~file_size()~~ method will be available to all the instances created from the ~~Ebook~~ class.

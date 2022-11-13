---
title: "Understanding 'this' Keyword in JavaScript"
date: "2021-05-15"
excerpt: "Demystifying 'this' keyword in JavaScript with examples."
categories: ["JavaScript"]
---

```toc

```

### "this" outside of functions

Outside of functions (_in the global execution context_), ~~this~~ refers to the global ~~window~~ object. In browsers, the global object is the ~~window~~ object.

```js {numberLines}
console.log(this) // Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}

console.log(this === window) // true
```

### "this" inside of functions

In functions that are not methods of objects, this refers to the global ~~window~~ object.

_A function that is the property of an object is called its method._

```js {numberLines}
function myFunc() {
  console.log(this)
  console.log(this === window)
}

myFunc() // Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}
// true
```

### “this” inside the method of an object

A function that is the property of an object is called its method. And inside the method of an object, ~~this~~ refers to the object the method is called on.

Consider the following:

```js {numberLines}
const developer = {
  name: "Hemanta",
  profession: "front-end developer",
  language: "JavaScript",
  about() {
    console.log(`${this.name} is an expert on ${this.language}`)
  },
}

developer.about() // Hemanta is an expert on Javascript
```

Above, we called the ~~about~~ method on the ~~developer~~ object. Therefore, ~~this~~ inside the ~~about~~ method refers to the ~~developer~~ object. Now, let's consider another example where we have another object inside the ~~developer~~ object.

```js {numberLines}
const developer = {
  name: "Hemanta",
  profession: "front-end developer",
  language: "JavaScript",
  career: {
    company: "Automattic",
    about() {
      console.log(`Hemanta works for ${this.company}`)
    },
  },
}

developer.career.about() // Hemanta works for Automattic
```

Above, which object does ~~this~~ keyword inside the ~~about~~ method refer to?

We know that ~~this~~ always refers to the object the method is called on. We have invoked the ~~about~~ method on the ~~career~~ object; therefore, ~~this~~ keyword inside the method refers to the ~~career~~ object.

> A nice shortcut to find out the object `this` keyword refers to is to find out the object present on the immediate left of the method call.

Next, let's find out about the behavior of ~~this~~ keyword inside a nested function inside the ~~about~~ method of the ~~developer~~ object.

```js {numberLines}
const developer = {
  name: "Hemanta",
  profession: "front-end developer",
  language: "JavaScript",
  about() {
    function aboutDeveloper() {
      console.log(`${this.name} is a ${this.profession}`)
    }
    aboutDeveloper()
  },
}

developer.about() // undefined is a undefined
```

The output of ~~${this.name}~~ and ~~${this.profession}~~ inside the ~~aboutDeveloper~~ function is undefined.

Do you know why?

Let's find out. As we have already discussed, in functions that are not methods of objects, ~~this~~ refers to the global ~~window~~ object.

In the example above, ~~aboutDeveloper~~ function is not a method of the ~~developer~~ object. It's a nested function inside the ~~about~~ method. As a result, ~~this~~ inside the ~~aboutDeveloper~~ function refers to the ~~window~~ object. And because the ~~window~~ object doesn't have ~~name~~ and ~~profession~~ properties, we get ~~undefined~~ as the output of ~~${this.name}~~ and ~~${this.profession}~~.

So, what can we do so that ~~this~~ inside ~~aboutDeveloper~~ function (_which is inside ~~about~~ method_) refers to the ~~developer~~ object?

I'll show you two solutions:

### Solution-1

```js {numberLines, 6}
const developer = {
  name: "Hemanta",
  profession: "front-end developer",
  language: "JavaScript",
  about() {
    const that = this
    function aboutDeveloper() {
      console.log(`${that.name} is a ${that.profession}`)
    }
    aboutDeveloper()
  },
}

developer.about() // Hemanta is a front-end developer
```

We have already discussed that a method refers to the object the method is called on. Above, ~~this~~ inside the ~~about~~ method refers to the ~~developer~~ object and therefore has access to its ~~name~~, ~~profession~~ and ~~language~~ properties. So, all we need to do is to pass ~~this~~ from the ~~about~~ method to the ~~aboutDeveloper~~ function nested inside it. And thats exactly what we have done in the example above.

On line 6, we have saved ~~this~~ inside a variable called ~~that~~, and have passed that variable inside ~~aboutDeveloper~~ function. Now, ~~aboutDeveloper~~ function has access to the properties of the ~~developer~~ object and we get the desired output.

> As a side note, you can name the variable anything you want. However, it's a convention to use `that` or `self` as variable names.

### Solution-2

```js {numberLines}
const developer = {
    name: 'Hemanta',
    profession: 'front-end developer',
    language: 'JavaScript',
    about() {
      const aboutDeveloper = () => {
        console.log(${this.name} is a ${this.profession});
      }
      aboutDeveloper();
    }
}

developer.about(); // Hemanta is a front-end developer
```

What we have done above is we have changed ~~aboutDeveloper~~ function from a function declaration to an arrow function.

The problem is solved and we get our desired output. This is because arrow functions don't have their own ~~this~~ keyword. The value of ~~this~~ keyword inside an arrow function is taken from the outer scope. The scope of ~~about~~ method is the enclosing/outer scope of the ~~aboutDeveloper~~ function. Therefore, ~~this~~ inside the ~~aboutDeveloper~~ function refers to the same object ~~this~~ inside ~~about~~ method refers to - the ~~developer~~ object.

Using arrow functions to solve the issue of ~~this~~ keyword inside nested functions inside object methods is the preferred solution. As you move on to learn React (_a Javascript UI library_), you will come across extensive usage of arrow functions.

### "this" inside classes

```js {numberLines, 8}
class Developer {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

   selfTaught() {
     console.log(${this.name} is a self-taught developer.);
  }
}

const hemanta = new Developer('Hemanta');

hemanta.selfTaught(); // Hemanta is a self-taught developer.
```

~~this~~ inside of a class refers to an instance of that class. On line 8, ~~this~~ inside the ~~selfTaught~~ method refers to ~~hemanta~~, which is an instance of the ~~developer~~ class.

### Conclusion

Understanding ~~this~~ in JavaScript can be a bit challenging. However, with enough practice and perseverance you will be able to internalize the concepts.

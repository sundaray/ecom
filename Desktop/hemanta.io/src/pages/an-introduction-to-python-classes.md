---
title: "An Introduction to Python Classes"
date: "2021-08-23"
excerpt: "Learn to define classes - the building block of object-orinted programming."
categories: ["Python"]
---

```toc

```

Everything in Python - from numbers to functions - is an object.

An object is a custom data structure that contains both data (variables, called attributes) and code (functions, called methods).

We create an object by defining a class - a blueprint for objects.

Classes contain instructions for how to make an instance (a specific object) and are a fundamental building block of object-oriented programming.

### Creating a class

Let’s write a class that represents a laptop.

What do most laptops have in common?

At the very least, we can say that most laptops have a model name and belong to a brand. Also, we can restart and shut them down. These two pieces of information (brand & model) and these two behaviors (restart and shutdown) will go in our laptop class because they are common to most laptops.

Once we write a class that represents a laptop, we can then make individual instances - each of which represents one specific laptop.

```py {numberLines}
class Laptop:
    """Modelling a laptop"""

    def __init__(self, brand, model):
        """Initialize brand and model attributes."""
        self.brand = brand
        self.model = model

    def restart(self):
        print("The laptop is now restarting.")

    def shutdown(self):
        """Simulate a laptop shutting down in response to a command."""
        print("The laptop is shutting down.")
```

Let’s understand the code we have written.

Notice that the first character in the class name ~~Laptop~~ is uppercase. This is because by convention, we capitalize the name of a class.

Next, the class definition is immediately followed by a docstring, which is a brief description of what the class does.

### The init() method

A function that is part of a class is known as a method.

Whenever we create an instance of the ~~Laptop~~ class, Python runs the ~~\_\_init\_\_()~~ method automatically. Notice that the ~~\_\_init\_\_()~~ method has two underscores on each side.

The first parameter to the ~~\_\_init\_\_()~~ method is ~~self~~. The ~~self~~ parameter is required and must come first before other parameters. It gives instances of the ~~Laptop~~ class access to the attributes and methods of the ~~Laptop~~ class. More importantly, whenever we create an instance of the ~~Laptop~~ class, Python will automatically pass the ~~self~~ argument (_a reference to the instance itself_) to the ~~\_\_init\_\_()~~ method. We will provide values only for the ~~brand~~ and ~~model~~ parameters.

On line 6, we take the value associated with the ~~brand~~ parameter and associate it with the ~~brand~~ variable, which is then attached to the instance being created. The same process holds true for the ~~model~~ parameter as well.

Notice that the ~~brand~~ and ~~model~~ variables are prefixed with ~~self~~. Any variable prefixed with ~~self~~ is available to every method in the class and is also accessible through any instance created from the class. Variables that are accessible through instances like this are called **attributes**.

Our ~~Laptop~~ class has two methods: ~~restart()~~ & ~~shut_down()~~. We have defined both the methods with only the ~~self~~ parameter because our methods don’t need any other additional information to function. They are simple and just print a message. Any instance we create from the ~~Laptop~~ class will have access to these methods.

### Creating an instance

Creating an object from a class is known as **instantiation**.

We have defined the ~~Laptop~~ class. Now, let’s create an instance representing a specific laptop.

```py {numberLines}
my_laptop = Laptop('hp', 'probook')
```

On line 1, we tell Python to create a laptop whose brand is ~~hp~~ and whose model is ~~probook~~. When Python reads the line, it calls the ~~\_\_init\_\_()~~ method and passes ~~hp~~ and ~~probook~~ as arguments. The ~~\_\_init\_\_()~~ method creates an instance representing this particular laptop and sets the ~~brand~~ and ~~model~~ attributes using the values we provided. Then, Python returns an instance, which we assign to the ~~my_laptop~~ variable.

### Accessing attributes

We can access the attributes of an instance using the dot (~~.~~) notation.

We can access the value of ~~my_laptop~~’s ~~brand~~ and ~~model~~ attribute like so:

```py {numberLines}
print(my_laptop.brand)
# hp

print(my_laptop.model)
# probook
```

### Calling methods

We can call the methods defined inside the ~~Dog~~ class using the dot (~~.~~) notation. We mention the instance and the method we want to call separated by a dot.

Let’s restart and shutdown our laptop:

```py {numberLines}
print(my_laptop.restart())
# The laptop is now restarting.

print(my_laptop.shutdown())
# The laptop is shutting down.
```

### Creating multiple instances

We can create as many instances from the ~~Laptop~~ class as we need.

Let’s create a second laptop called ~~gaming_laptop~~:

```py {numberLines}
gaming_laptop = Laptop('Asus', 'ROG Zephyruse G15')
print(f"My friend has an {gaming_laptop.brand} gaming laptop.")
# My friend has an Asus gaming laptop.

print(f"I have the {gaming_laptop.model} model from {gaming_laptop.brand}.")
# I have the ROG Zephyruse G15 model from Asus.

print(gaming_laptop.shutdown())
# The laptop is shutting down.
```

In the code example above, the ~~gaming_laptop~~ is a separate instance of the ~~Laptop~~ class with its own set of attributes and is capable of two actions - restart and shutdown - as defined in the class.

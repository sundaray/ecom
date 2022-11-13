---
title: "A Comprehensive Guide to Python Dictionaries"
date: "2021-08-20"
excerpt: "An in-depth introduction to Python dictionaries."
categories: ["Python"]
---

```toc

```

In Python, a dictionary is a set of _key : value_ pairs.

- The keys in a dictionary must be unique.

- The keys can be any _immutable_ data type.

- Dictionaries are mutable. This means that we can add, delete and change _key : value_ pairs.

### Creating dictionaries

We can create a dictionary by placing comma separated _key : value_ pairs within curly brackets.

```py {numberLines}
creator = {'name' : 'Guido van Rossum', 'language' : 'Python'}

print(type(creator))
# <class 'dict'>
```

To create an empty dictionary, simply use a pair of curly brackets.

We can also create a dictionary by passing named arguments and values to the ~~dict()~~ function.

```py {numberLines}
tech = dict(mobile = 'React Native', web = 'React')

print(type(tech))
# <class 'dict'>
```

### Get an item by its key or using get()

We can get the value of an item by its _key_.

```py {numberLines}
lang_types = {'statically_typed' : 'Java', 'dynamically_typed' : 'Python'}

print(lang_types['statically_typed'])
# Java
```

We can also get the _value_ of an item using the ~~get()~~ function which receives the item _key_ as the argument.

```py {numberLines}
lang_types = {'statically_typed' : 'Java', 'dynamically_typed' : 'Python'}

print(lang_types.get('dynamically_typed'))
# Python
```

### Get all the keys

We can get all the keys of a dictionary using the ~~keys()~~ function.

The ~~keys()~~ function returns ~~dict_keys()~~, which is an iterable view of the keys. We can convert the ~~dict_keys()~~ object to a list using the ~~list()~~ function.

```py {numberLines}
billionaires = {'Jeff Bezos' : 'Amazon', 'Elon Musk' : 'Tesla'}

print(billionaires.keys())
# dict_keys(['Jeff Bezos', 'Elon Musk'])

billionaires_list = list(billionaires.keys())

print(billionaires_list)
# ['Jeff Bezos', 'Elon Musk']

print(type(billionaires_list))
# <class 'list'>
```

### Add or change an item by key

We can add an item to a dictionary by referring to the item by its _key_ and assigning a _value_.

If the _key_ is already present in the dictionary, its existing _value_ is replaced by the new _value_. If the _key_ is not present, then the new _key_ is added to the dictionary along with its associated value.

```py {numberLines}
ride = {'Uber' : 'America', 'Didi' : 'China'}

ride['Ola'] = 'India'

print(ride)
# {'Uber': 'America', 'Didi': 'China', 'Ola': 'India'}
```

We can assign a new _value_ to a key using the ~~=~~ operator.

```py {numberLines}
ride = {'Uber' : 'America', 'Didi' : 'China'}

ride['Didi'] = 'Republic of China'

print(ride)
# {'Uber': 'America', 'Didi': 'Republic of China'}
```

### Get all values

We can extract all the values of a dictionary using the ~~values()~~ function.

The ~~values()~~ function returns a ~~dict_values~~ object, which we can then convert to an object using the ~~list()~~ function.

```py {numberLines}
parent = {'Audi' : 'Volkswagen', 'Alfa Romeo' : 'Stellantis', 'Jaguar' : 'Tata Motors'}


print(parent.values())
# dict_values(['Volkswagen', 'Stellantis', 'Tata Motors'])

print(type(parent.values()))
# <class 'dict_values'>

print(list(parent.values()))
# ['Volkswagen', 'Stellantis', 'Tata Motors']

print(type(list(parent.values())))
# <class 'list'>
```

### Get key : value pairs

We can extract the _key : value_ pairs from a dictionary using the ~~items()~~ function. Each _key : value_ pair is returned as a _tuple_.

```py {numberLines}
backend = {'Node' : 'JavaScript', 'Express' : 'Python'}

print(backend.items())
# dict_items([('Node', 'JavaScript'), ('Express', 'Python')])
```

### Length of a dictionary

We can count the number of _key : value_ pairs in a dictionary using the ~~len()~~ function.

```py {numberLines}
me = {'first_name' : 'Hemanta', 'last_name' : 'Sundaray'}

print(len(me))
# 2
```

### Combine dictionaries

We can combine dictionaries using the ~~update()~~ function.

```py {numberLines}
person = {'first_name' : 'Hemanta', 'last_name' : 'Sundaray'}

profession = {'profession' : 'Retail Strategy'}

person.update(profession)

print(person)
# {'first_name': 'Hemanta', 'last_name': 'Sundaray', 'profession': 'Retail Strategy'}
```

### Delete a key : value pair

We can delete a _key : value_ pair using the ~~del~~ keyword.

```py {numberLines}
category = {'Web Development' : 'JavaScript', 'Data Science' : 'Python'}

del category['Web Development']

print(category)
# {'Data Science': 'Python'}
```

We can delete a _key : value_ pair using the ~~pop()~~ method as well. The ~~pop()~~ method takes in the _key_ and returns the associated _value_. The _key : value_ pair is deleted from the dictionary.

```py {numberLines}
category = {'Web Development' : 'JavaScript', 'Data Science' : 'Python'}

popped = category.pop('Data Science')

print(popped)
# Python

print(category)
# {'Web Development': 'JavaScript'}
```

### Delete all key : value pairs

We can delete all _key : value_ pairs using the ~~clear()~~ function.

```py {numberLines}
captain = {'name' : 'Ma Long', 'country' : 'China'}

captain.clear()

print(captain)
# {}
```

### Existence of a key

We can check whether a _key_ exists in a dictionary or not using the ~~in~~ operator.

```py {numberLines}
car_models = {'hyundai' : ['Creta', 'Tucson'], 'Honda' : ['City', 'Civic']}

print('hyundai' in car_models)
# True
```

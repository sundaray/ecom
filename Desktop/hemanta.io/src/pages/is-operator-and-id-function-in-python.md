---
title: "is Operator & id() Function in Python"
date: "2021-08-29"
excerpt: "Checking identity of objects in Python"
categories: ["Python"]
---

Once an object is created in Python, it’s identity never changes.

We use the ~~is~~ operator to compare the identity of two objects. The ~~id()~~ function returns an integer (_the memory address of the object_) representing its identity. The integer is a unique label that never changes during the life of the object.

```py {numberLines}
city_one = {'name' : 'Gurugram'}

city_two = city_one

print(city_one is city_two)
# True

print(id(city_one), id(city_two))
# 2855627537472 2855627537472
```

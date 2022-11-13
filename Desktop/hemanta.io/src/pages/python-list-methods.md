---
title: "Python List Methods"
date: "2021-08-17"
excerpt: "append(), insert(), remove(), pop(), clear(), count(), sort(), reverse()"
categories: ["Python"]
---

```toc

```

### append(x)

Adds the item ~~x~~ to the end of the list.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

cloud.append("Microsoft Azure")

print(cloud)
# ['AWS', 'Heroku', 'DigitalOcean', 'Microsoft Azure']
```

### insert(i, x)

Inserts an item at a given position. The first argument ~~i~~ is the index of the element before which to insert the item ~~x~~, provided as the second argument.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

cloud.insert(0, "Google Cloud Platform")

print(cloud)
# ['Google Cloud Platform', 'AWS', 'Heroku', 'DigitalOcean']
```

### remove(x)

Removes the first item from the list whose value is equal to ~~x~~.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

cloud.remove("Heroku")

print(cloud)
# ['AWS', 'DigitalOcean']
```

### pop(i)

~~pop()~~ removes and returns the item at the given position (_provided as the first argument_) in the list.

If no index is specified, ~~pop()~~ removes and returns the last item in the list.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

popped = cloud.pop(0)

print(cloud)
# ['Heroku', 'DigitalOcean']

print(popped)
# AWS
```

### clear()

Removes all items from the list.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

cloud.clear()

print(cloud)
# []
```

### count(x)

Returns the number of times ~~x~~ appears in the list.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

print(cloud.count("AWS"))
# 1
```

### sort()

Sorts the items of the list in place.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

cloud.sort()

print(cloud)
# ['AWS', 'DigitalOcean', 'Heroku']
```

### reverse()

Reverses the elements of the list in place.

```py {numberLines}
cloud = ['AWS', 'Heroku','DigitalOcean']

cloud.reverse()

print(cloud)
# ['DigitalOcean', 'Heroku', 'AWS']
```

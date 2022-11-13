---
title: "String Methods in Python"
date: "2022-07-06"
excerpt: "lower(), upper(), title(), split(), join()"
categories: ["Python"]
---

```toc

```

### Formatting Methods

There are three string methods that can change the casing of a string.

- ~~.lower():~~ Returns the string with all lowercase characters.
- ~~.upper():~~ Returns the string with all uppercase characters.
- ~~.title():~~ Returns the string in title case, which means the first letter of each word is capitalized.

```py {numberLines}
name = "Hemanta Sundaray"

print(name.upper())  # HEMANTA SUNDARAY
print(name.lower())  # hemanta sundaray

name = "hemanta sundaray"

print(name.title()) # Hemanta Sundaray
```

### Splitting Srings

#### split()

~~.split()~~ is performed on a string, takes one argument (_known as the delimiter_) and returns a list of substrings.

The syntax is as follows:

```sh
string_name.split(delimiter)
```

**Example:**

```py {numberLines}
name = "Hemanta Kumar Sundaray"

print(name.split())
# ['Hemanta', 'Kumar', 'Sundaray']
```

We can also provide an argument to ~~.split()~~.

```py {numberLines}
mountains = "Mount Everest, Kilimanjaro, Broad Peak"

print(mountains.split(","))

# ['Mount Everest', ' Kilimanjaro', ' Broad Peak']
```

We provided ~~,~~ as the arguemnt for ~~.split()~~, so our string got split at each ~~,~~ into a list of three strings.

### Joining Strings

#### join()

~~join()~~ _joins_ a list of strings together with a given delimiter.

The syntax of ~~.join()~~ is:

```sh
'delimiter'.join(list_you_want_to_join)
```

The string ~~.join()~~ acts on is the delimiter we want to join with, therefore the list we want to join has to be the argument.

```py {numberLines}
first_line = ['HOPE', 'is', 'the', 'thing', 'with', 'feathers']

print(" ".join(first_line))
# HOPE is the thing with feathers
```

We joined together a list of words using a space as the delimiter to create a sentence.

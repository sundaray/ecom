---
title: "An Introduction to YAML"
date: "2022-07-03"
excerpt: "YAML"
---

```toc

```

YAML is a standard format for storing data. It originally stood for "Yet Another Markup Language" but now stands for "YAML Ain’t Markup Language".

Because of its emphasis on human readability, YAML is increasingly relied upon for configuration files. It can also be used for log files, debugging complex data structures, interprocess messaging, and cross-language data sharing.

YAML is often compared to JSON due to their similarities. Both formats are human-readable and can represent complex data structures. However, there are some key differences. YAML is generally considered more human-readable due to its use of whitespace for separating objects rather than curly braces or brackets. It also offers additional features such as comments and object references. JSON, however, is superior when it comes to performance, specifically the speed at which a computer can parse it.

### YAML Structure

Let's take a look at an example YAML file:

```sh
---
# Our first YAML document
cup: coffee
capitals:
  India: New Delhi
  Japan: Tokyo
continets:
  - Asia
  - Europe
  - Africa
  - Antarctica
  - Australia
  - North America
  - South America
...
```

Note the following about the contents of this file:

- A YAML document begins with three dashes (~~---~~) and ends with three dots (~~…~~). These characters can separate multiple YAML documents within a single file. In a YAML file with a singular document (e.g., the above example), most parsers treat these characters as optional.

- The second line begins with ~~#~~, which makes it a comment. Comments are ignored by parsers but are helpful since YAML files are often shared by different developers and can provide insight into the document’s purpose.

- The bulk of this YAML document consists of mappings or key-value pairs, which are separated by a colon and a space (~~:~~). Every key must be a string and must be unique. Values can be **nested mappings**, as is the case with the value of _capitals_. They can also be **sequences**, as with the value of _continents_, or **scalars**, as with the value of _cup_. We’ll learn more about these data types a bit later in this article.

- The use of whitespace is a crucial aspect of YAML. Notice how a line break separates each mapping. When objects are nested, indentation indicates which objects are a part of the same value. **Indentation must consist of one or more spaces. Tabs, however, are forbidden in YAML.**

While not explicitly shown, note that YAML files should end with the extension ~~.yaml~~ or ~~.yml~~.

### Sequences

YAML sequences look a bit like lists or arrays in programming languages. They can contain any mix of data types, including nested sequences or mappings. Sequences are usually displayed on multiple lines, where each element begins with a dash, followed by a space, and ends with a line break. Take a look at an example:

```sh
fish:
  - Tuna
  - Trout
  - Salmon
numbers:
  - pi
  - 7
  - 1.1
```

Sequences can also be written on a single line surrounded by brackets. In this case, elements are separated by a comma and a space, like this:

```sh
planets: [Mercury, Venus, Mars]
```

### Scalars

All remaining data types in YAML are scalars, also known as single value data types. These include integers, floating-point numbers, booleans, null, and strings. Let’s see scalars in action:

```sh
scalars:
  - 1
  - 1.0
  - True
  - null
  - "string"
```

Let’s break down the types above:

- **Numbers**: In YAML, numbers are classified by a single rule. Any number that doesn’t have a decimal point is an integer, while numbers that do are floats.

- **Booleans**: For booleans, the keywords ~~True~~, ~~On~~, and ~~Yes~~ evaluate to true. The keywords ~~False~~, ~~Off~~, and ~~No~~ will to false.

- **Null**: A null value can be represented by either **~** or ~~null~~ (could also be written as ~~Null~~ or ~~NULL~~), like this:

```sh
nulls:

- null
- ~
```

- **Strings**: In YAML, strings generally do not need quotes. Two notable exceptions are as follows:
  - Use single or double quotes to create a value that would normally be interpreted as a different data type to be a string, i.e., "10" or "null"
  - Use double quotes to allow specific sequences to be escaped instead of being treated as literals, such as ~~"\n"~~ representing a line break.

Here are some more examples of strings in action:

```sh
strings:
- This string ends with a slash followed by n \n
- "This string ends with a line break \n"
- 'True'
```

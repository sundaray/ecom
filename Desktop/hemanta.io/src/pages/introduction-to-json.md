---
title: "Introduction to JSON"
date: "2021-11-17"
excerpt: "JSON, serialization, deserialization"
---

```toc

```

JSON is a full-text, lightweight and language-independent format for data representation and transportation.

When two systems, written in two different programming languages, want to exchange data, they need to have a mutually agreed standard for representing information. JSON provides that standard with its lightweight format.

When an application transmits a piece of information over the wire, the information gets serialized into plain strings. The receiving application then deserializes the information into its objects so that it becomes available to use.

> **Serialization**: Serialization is the process of converting an object into a stream of bytes to store the object or transmit it to memory, a database or a file. It’s main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization.

The grammar that defines the JSON format was derived from JavaScript’s syntax.

> Note: The objects, collections and variables of any programming language can naturally fit into the JSON structure. Most programming languages have parsers that can translate their own objects to and from JSON documents.

### Syntax

JSON documents or objects are a plain-text set of zero or more _key-value_ pairs.

In a JSON object, _key-value_ pairs are enclosed within curly braces. Within an object, the key is always a string; however, the value can be any of JSON’s specified types.

The document below represents a valid JSON object that has a single _key-value_ pair.

```json {numberLines}
"name": "hemanta"
```

### JSON data types

Unlike many programming languages, JSON supports a limited and basic set of data types, as follows:

- **String**: Refers to plain text
- **Number**: Consists of all numeric fields
- **Boolean**: Consists of ~~True~~ or ~~False~~
- **Object**: Other embedded JSON objects
- **Array**: Collection of fields
- **Null**: Special value to denote fields without any value.

### JSON & numbers

As per the JSON specification, a number is just a sequence of digits. It does not differentiate between numbers such as ~~integer~~, ~~float~~ or ~~long~~.

### JSON & dates

JSON documents don’t support the ~~Date~~ data type, and all dates are represented as plain strings.

The following is an example of a few JSON documents, each of which has a valid date representation:

```json {numberLines}
{
    "title" : "House of Gucci",
    "releaseDate" : "24-11-2021"
}

{
    "title" : "House of Gucci",
    "releaseDate" : "2021-11-24"
}

{
    "title" : "House of Gucci",
    "releaseDate" : "24th November 2021"
}
```

Although all the documents represent the same date, they are written in different formats. Different systems, based on their local standards, use different formats to write the same date and time instances.

Like the examples of JSON numbers, the parties exchanging the information need to standardize the ~~Date~~ format during the transfers.

> Note: Remember that the JSON specification defines syntax and grammar for data representation. However, how you read the data depends on the interpreters of the language and their data exchange contracts.

###### Learn how to convert a JavaScript object to a JSON string and parse a JavaScript string into a JavaScript object in my blog post [here](https://hemanta.io/what-is-json/).

---
title: "What is Big O Notation?"
date: "2021-09-19"
excerpt: "Learn how to express the efficiency of data structures and algorithms with Big O notation."
categories: ["JavaScript-Data Structures & Algorithms"]
---

```toc

```

###### Learn the concept of time complexity in my blog post [here](https://hemanta.io/data-structures-and-algorithms-what-is-time-complexity/).

We express the efficiency of data structures and algorithms with Big O notation (pronounced as "Big Oh of N", "Order of N" or simply "Oh of N").

It provides answers to two key questions:

- If there are N data elements, how many steps will the algorithm take?
- And how will an algorithm’s performance change as the data increases?

### Time complexity of linear search

How would we express the time-complexity of linear search using Big O notation?

If we are using linear search to find an item which is in the final cell of an array, we will take N steps to find it. But when the item is in the first cell of an array, linear search will find the item in just one step .

So, if we were to express the efficiency of linear search in its totality, we would say that linear search is O(1) in a best-case scenario and O(N) in a worst case scenario. An algorithm that is O(N) is also known as having **linear time**.

> **Big O notation generally refers to the worst-case scenario unless specified otherwise**. This is because a pessimistic approach can be useful too: knowing how inefficient an algorithm can get in a worst-case scenario prepares us for the worst and may have a strong impact on our choices.

The answer to the key question lies within the parentheses of our Big O expression. O(N) says that the answer to the key question is that the algorithm will take N steps. And for every additional piece of data, the algorithm takes one additional step.

How would we express the efficiency of reading from a standard array?

We ask the key question: if there are N data elements, how many steps will reading from an array take?

The answer is that reading an array takes just one step. No matter how many elements an array has, reading from the array always takes one step. So, we express this as O(1).

O(1) is considered the fastest kind of algorithm because even as the data increases, an O(1) algorithm does not take any additional steps. O(1) algorithm can be referred to as having **constant time**.

### Time complexity of binary search

We know that binary search on an ordered array is much faster than linear search on the same array. Whenever we search for an item in an array using binary search, we keep dividing the array’s cells in half until we narrow it down to the correct number.

How can we describe binary search in terms of Big O Notation?

In Big O terms, we describe binary search as having a time complexity of O(logN) (_logarithm to the base 2_).

O(log N) means that for N data elements the algorithm would take log2N (2 is the base of the logarithm) steps. If there are 8 elements, the algorithm would take 3 steps, since log2N = 3.

There is a striking difference between the efficiencies of O(N) and O(log N).

While the O(N) algorithm takes as many steps as there are data elements, the O(log N) algorithm takes just one additional step each time the data is doubled.

The three types of algorithms we have learnt so far can be sorted from the most efficient to the least efficient as follows:

- O(1)

- O(logN)

- O(N)

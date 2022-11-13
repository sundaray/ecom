---
title: "Architecture of Matplotlib"
date: "2022-04-16"
excerpt: "Backend layer, artist layer & scripting layer"
categories: ["Matplotlib"]
---

```toc

```

Matplotlib is a Python library for plotting two-dimensional graphs (also called plots).

### Architecture of Matplotlib

Matplotlib has a three-layer architecture: backend, artist, and scripting, organized logically as a stack.

Scripting is an API that developers use to create the graphs. Artist does the actual job of creating the graph internally. Backend is where the graph is displayed.

### Backend layer

This is the bottom-most layer where the graphs are displayed on to an output device.

### Artist layer

This is the middle layer of the stack. Matplotlib uses the artist object to draw various elements of the graph. So, every element in the graph is an artist.

This layer provides an object-oriented API for plotting graphs with maximum flexibility. This interface is meant for seasoned Python programmers, who can create complex dashboard applications.

### Scripting layer

This is the topmost layer of the stack. This layer provides a simple interface for creating graphs. This is meant for use by end users who don't have much programming expertise. This is called a pyplot API.

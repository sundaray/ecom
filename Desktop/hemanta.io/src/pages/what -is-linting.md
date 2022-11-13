---
title: "What is Linting?"
date: "2022-06-03"
excerpt: "Learn how linters can help your code be free of errors and vulnerabilities."
---

A linter is a tool that scans source code for potential issues, including syntax errors, faulty code structures, stylistic inconsistencies, and security.

Linters can automatically detect missing semicolons or future security breaches early on during the development cycle to reduce the number of errors that need to be resolved during testing.

Some popular linters include ~~ESLint~~ for JavaScript, ~~JSHint~~ for JavaScript, and ~~StyleLint~~ for CSS.

Linters provide a number of automated checks that help streamline software development.

### Syntax Errors

Linters can automatically find and fix syntax errors before running your code, meaning fewer bugs to deal with during production.

### Problematic Code Structure

Linters can also potentially flag problematic code structures. These are weak points in your application design, such as unnecessarily long methods and duplicated code, that could result in future bugs and impaired app performance.

### Stylistic Code Conventions

Linters also push developers to adhere to a consistent set of stylistic code standards, improving code readability and maintainability. Sticking to a consistent coding style saves time by enabling developers to focus on the application’s architecture and core logic rather than code aesthetics.

### Security

Some linters, such as ESLint, can detect potential security vulnerabilities in your code to help you ensure that the application is secure and well-protected.

### Linters vs Build Tools

Build tools and linters both go through and edit your source code, but they are separate categories of development tools. Linting occurs as you write your code, whereas build tools are applied only when you want to preview or ship your code base. However, linting can be a part of the build process with some build tools, such as Webpack or Parcel.

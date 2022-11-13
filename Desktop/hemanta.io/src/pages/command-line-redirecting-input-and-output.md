---
title: "Command Line - Redirecting Input & Output"
date: "2022-06-30"
excerpt: "> , >>, |, sort, uniq, grep, sed"
categories: ["Command Line"]
---

```toc

```

### >

```sh
$ echo "Hello" > hello.txt
```

The ~~>~~ command redirects the standard output to a file. Here, "Hello" is enered as the standard input, and is then redirected to the file **hello.txt** by ~~>~~.

```sh
$ cat milk.txt > coffee.txt
```

~~>~~ takes the standard output of the command on the left, and redirects it to the file on the right.
Here, the standard output of **cat milk.txt** is redirected to **coffee.txt**.

> Note that ~~>~~ overwrites all original content in **coffee.txt**.

### >>

```sh
$ cat sugar.txt >> coffee.txt
```

~~>>~~ takes the standard output of the command on the left, and _adds_ it to the file on the right.
Here, the output data of **coffee.txt** will contain the original contents of **coffee.txt** with the contents of the **sugar.txt** file appended to it.

### | (pipe)

The ~~|~~ takes the standard output of the command on the left, and pipes it as standard input to the command on the right.

```sh
$ cat countries.txt | wc
```

Above, the output of ~~cat countries.txt~~ becomes the standard input of ~~wc~~. In turn, the ~~wc~~, (word count) command outputs the number of lines, words and characters in **countries.txt**.

### sort

~~sort~~ takes the standard input and orders it alphabetically for the standard output (_it doesn't change the file itself_.)

```sh
$ sort countries.txt | wc
```

Here the countries in **countries.txt** will be listed in alphabetical order.

### uniq

```sh
$ uniq articles.txt
```

~~uniq~~ stands for unique. It filters out _adjacent duplicate lines_ in a file. And duplicates that are not adjacent remain in the file.

```sh
$ sort articles.txt | uniq
```

So, a more effective way to use ~~uniq~~ is to call ~~sort~~ to alphabetize a file and 'pipe' the standard output to ~~uniq~~.

```sh
$ sort articles.txt | uniq > unique_articles.txt
```

Above, by piping ~~sort articles.txt~~ to ~~uniq~~, all duplicate lines are alphabetized (_and thereby made adjacent_) and filtered out. Then, we send the filtered contents to **unique_articles.txt**, which you can view with the ~~cat~~ command.

### grep

~~grep~~ stands for **global regular expression print**. It searches files for lines that match a pattern and then returns the results. **It is also case sensitive**.

Below, ~~grep~~ searches for anything that matched "React" in **libraries.txt**.

```sh
$ grep React libraries.txt
```

~~grep -i~~ enables the ~~grep~~ command to be case insensitive. Below, ~~grep~~ searched for capital or lowercase strings that match "React" in **libraries.txt**.

```sh
$ grep -i React libraries.txt
```

### sed

~~sed~~ stands for "stram editor". It accepts standard input and modifies it based on an expression, before displaying it as output data. It is similar to "find & replace".

```sh
sed 's/Angular/React/' libraries.txt
```

- ~~s~~ stands for substitution.
- ~~Angular~~ is the search string.
- ~~React~~ is the replacement string

In this case, ~~sed~~ searches **libraries.txt** for the word "Angular" and replaces it with "React". More importantly, the above command will replace only the first occurence of the word "Angular".

To remove the search string _globally_, we use the ~~g~~ expression as shown below:

```sh
sed 's/Angular/React/g' libraries.txt
```

~~sed~~, as we have used, only rewrites the command line output and the actual file is not changed. In order to rewrite the actual file, we need to use ~~-i~~ at the beginning of the command.

```sh
sed -i 's/Angular/React/g' libraries.txt
```

The above command will rewrite **libraries.txt** and will replaces all instances of "Angular" with "React".

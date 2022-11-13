---
title: "Command Line - PS1 Environment Variable"
date: "2022-06-30"
excerpt: "Learn how to define the style of the command prompt."
categories: ["Command Line"]
---

~~PS1~~ is an environment variable that defines the makeup and style of the command prompt.

What happens when this is stored in **~/.bash_profile**?

```sh {numberLines}
export PS1=">> "
```

- ~~export PS1=">> "~~ sets the command prompt variable and exports the variable. Here we change the default command prompt from ~~$~~ to ~~>>~~.
- After using the source command, the command line displays the new command prompt.

###### Lear to edit your bash profile in my blog post [here](https://hemanta.io/editing-the-bash-profile/).

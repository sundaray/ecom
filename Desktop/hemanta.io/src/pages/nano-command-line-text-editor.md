---
title: "Nano - Command Line Text Editor"
date: "2022-06-30"
excerpt: "Learn how to work with nano"
categories: ["Command Line"]
---

_nano_ is a command line text editor. It works the same way as a desktop text editor like Notepad, except it is accessible from the command line and only accepts keyboard input.

```sh
$ nano hello.txt
```

The command above will open a new text file named **hello.txt** in the nano text editor.

![Nano Text Editor](../images/nano/nano_editor.png)

Let's enter the text string ~~"Hey, I'm Hemanta."~~ at the line indicated by the cursor.

![Nano Text Editor](../images/nano/nano_editor_text.png)

If we want to save the **hello.txt** file, we press ~~ctrl + O~~. This will result in the nano text editor display a prompt asking us to confirm the name of the file.

![Nano Text Editor](../images/nano/nano_editor_prompt.png)

Press ~~Enter~~. Then, we can exit the nano program using ~~ctrl + x~~.

Now, we can see the contents of the file using the command ~~cat hello.txt~~.

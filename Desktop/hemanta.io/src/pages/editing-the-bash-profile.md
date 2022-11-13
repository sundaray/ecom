---
title: "Editing the Bash profile"
date: "2022-06-30"
excerpt: "Learn how to edit the bash profile."
categories: ["Command Line"]
---

Each time we launch the terminal application, it creates a new session. The session immediately loads settings and preferences that make up the command line environment.

The setting for this environment are stored in a file known as a bash profile. And it's accessible by the name **~/.bash_profile**.

- The **~** represents the user's home directory.
- The **.** indicates a hidden file.

When a session starts it loads the contents of the bash profile before executing commands.

To open and edit the bash profile, we can use the command:

```sh {numberLines}
$ nano ~/.bash_profile
```

When you edit the bash profile, you can add commands to execute every time a new terminal session is started.

To activate the changes made in **~/.bash_profile** for the current session, use the following command:

```sh {numberLines}
$ source ~/.bash_profile
```

This makes the changes in the bash profile available right away without closing the terminal and needing to start a new session.

---
title: "Introduction to Command Line - Navigating Through a Computer's File System"
date: "2022-06-27"
excerpt: "Learn how to navigate through files and folders on your computer."
categories: ["Command Line"]
---

```toc

```

The command line is a text interface for the computer’s operating system. To access the command line, we use the terminal.

> On Mac & Linux systems, we access the command line through something called _Bash_.

The following are some of the commonly used commands in Unix based systems such as Linux & Mac OS X to navigate through the file system:

| Command | Meaning                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| pwd     | Outputs the name of the current working directory                                                                                 |
| ls      | Lists all files and directories in the working directory                                                                          |
| ls-a    | Lists all contents inclusing hidden files & directories                                                                           |
| ls-l    | Lists all contents of a directory in long format, as well as the file permissions                                                 |
| ls-t    | Orders files and directories by the time they were last modified                                                                  |
| ls -alt | Lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified. |
| cd      | Switches you into the directory you specify                                                                                       |
| mkdir   | Creates a new directory in the working directory                                                                                  |
| touch   | Creates a new file inside the working directory                                                                                   |
| clear   | Clears the terminal                                                                                                               |
| cat     | Outputs the contents of a specified file (cat container.txt)                                                                      |

### Copy

| Command                             | Meaning                                                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| cp source.txt destination.txt       | Copy the contents of a source file into a destination file                                                                            |
| cp source.txt destination/          | Copy a file to a destination directory                                                                                                |
| cp file1.txt file2.txt my_directory | Copy the files file1.txt & file2.txt into the same directory                                                                          |
| cp \* my_directory                  | Copy all files in the current working directory into another directory                                                                |
| cp w\*.txt my_directory             | Selects all files in the working directory starting with "w" (prefix) and ending with "txt" (suffix), and copies them to my_directory |

### Move

| Command                              | Meaning                                       |
| ------------------------------------ | --------------------------------------------- |
| mv my_file.txt my_directory/         | Move my_file.txt into my_directory/           |
| mv file1.txt file2.txt my_directory/ | Move file1.txt & file2.txt into my_directory/ |

### Rename a file

| Command                             | Meaning                             |
| ----------------------------------- | ----------------------------------- |
| mv file_origin.txt file_renamed.txt | Rename the file as file_renamed.txt |

### Delete

| Command                  | Meaning                                               |
| ------------------------ | ----------------------------------------------------- |
| rm unwanted_file.txt     | Delete the file unwanted_file.txt from the filesystem |
| rm -r unwanted_directory | Delete a directory & all of its child directories     |

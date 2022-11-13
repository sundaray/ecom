---
title: "Linux Shell Utilities - Summary"
date: "2022-06-26"
excerpt: "Documentation, Compression, Archive, Networking"
categories: ["Linux"]
---

```toc

```

### Documentation

Documentation is a great way to learn about installed utilities.

- The ~~/usr/share/doc/~~ directory contains README files and other documents for installed commands.
- ~~man~~: It is a command to access reference manual pages for all installed commands. Usage ~~man <command_name>~~.
- ~~info~~: It is a command to access full-detailed information pages for all installed commands. Usage ~~info <command_name>~~.

### Compression

Compression reduces file sizes.

Three popular compression commands are: ~~gzip~~, ~~bzip2~~ & ~~xz~~.

- **Compress:** To compress run commands like so: ~~compression utility [options] file_name~~.
- **Decompress:** To decompress include the ~~-d~~ option: ~~<compression_utility> -d <compressed_file_name>~~.

~~gzip~~ also supports the ~~-r~~ option to compress all files in a directory.

### Archive

> In computing, an archive file is a computer file that is composed of one or more files along with metadata. Archive files are used to compress files in order to use less storage space.

~~zip~~ & ~~tar~~ are two archiving utilities that package multiple files into a single archive file.

#### zip - Archives & compresses files

- **Archive:** zip <archive_name>.zip [file1] [file2]... Use the ~~-r~~ option for directories.
- **Extract:** ~~unzip <archive_name>.zip~~.

#### tar

Only archives files by default but has options to utilize compression utilities. Unlike ~~zip~~, it preserves Unix file attributes like file permissions.

- **Archive:** ~~tar -cf <archive_name>.tar files or directory~~.
- **Extract:** ~~tar -xf <archive_name>.tar~~.

Add options ~~-z~~, ~~-j~~, or ~~-J~~ to compress via ~~gzip~~, ~~bzip2~~, or ~~xz~~ respectively.

### Networking

- ~~curl~~ or ~~wget~~: Interacts with a webpage of file hosted online.
- ~~ping <target domain or IP>~~: Checks connectivity between two devices on the same network.
- ~~host domain or IP~~: Performs DNS lookups.
- ~~ifconfig~~: Shows network interface information.

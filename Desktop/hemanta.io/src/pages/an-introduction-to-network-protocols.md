---
title: "An Introduction to Network Protocols"
date: "2022-06-29"
excerpt: "DNS, HTTP, IMPA, POP, SMTP, SSH, FTP, SMB, Port"
categories: ["Networking"]
---

```toc

```

Networking protocols are simply a set of standards for devices interacting on the Internet!

The following are a few protocols within the TCP/IP implementation Application layer.

###### Learn what TCP/IP model is in my blog post [here](https://hemanta.io/what-is-tcp-ip-model-in-networking/).

### DNS

The Domain Name System (DNS) protocol converts domain names to IP addresses. Think of it as a phonebook for the Internet. It’s hard to remember an exact IP address when we want to access a website. When we request the URL ~~hemanta.io~~, our computer sends a DNS request to a DNS server. The server then returns the correct IP addresses to route data to and from my blog.

### HTTP

The HTTP (The Hyper Text Transfer Protocol) handles our web requests to servers. HTTP uses a set of verbs, like ~~GET~~, ~~POST~~, ~~PUT~~, and ~~HEAD~~, to retrieve and send data. Anytime a page is loaded, there are multiple web requests to retrieve content like images, text, and formatting code.

### IMAP, POP, and SMTP

How does email work? IMAP (_Internet Message Access Protocol_) and POP (_Post Office Protocol_) allow users to access emails stored on a remote web server. In IMAP, servers store your email and return copies to you, allowing you to access the same email on multiple devices. In POP3 (POP version 3), however, emails are generally downloaded from the server onto just a single device.

To send email, the standard is SMTP (_Simple Mail Transfer Protocol_).

How do data packets get routed to these services from the transport layer? Specific numbers called ports are reserved so that packets for different services can come in at the same time. Think of ports as lanes for network traffic!

| Protocol | Transport Protocol | Port Number |
| -------- | ------------------ | ----------- |
| DNS      | TCP/UDP            | 53          |
| HTTP     | TCP                | 80/8080     |
| IMAP     | TCP                | 143         |
| POP3     | TCP                | 110         |
| SMTP     | TCP                | 25 / 587    |

The following are Application-layer protocols:

### SSH

_Secure Shell (SSH)_ is used to access a remote terminal or virtual machine (VM) over a secure connection. IT professionals and engineers use this to help configure and program a system remotely and securely. For example, accessing Github from the command line uses SSH!

### FTP

The File Transfer Protocol (FTP) is used to transfer files from one system to another. Modern implementations of FTP can include encryption as well.

### SMB

The Server Message Block (SMB) protocol allows multiple users to interact with a remote system like a file share or printing services. Multiple people can view and modify shared resources and files in a centralized server.

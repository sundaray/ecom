---
title: "What is Infrastructure as Code?"
date: "2022-07-07"
excerpt: "Configuration Management, Server Templating Tools, Orchestration Tools, Provisioning Tools"
categories: ["DevOps"]
---

The idea behind infrastructure as code (IAC) is that you write and execute code to define, deploy, update, and destroy your infrastructure.

This represents an important shift in mindset in which you treat all aspects of operations as software - even those aspects that represent hardware (e.g., setting up physical servers). In fact, a key insight of DevOps is that you can manage almost everything in code, including servers, databases, networks, log files, application configuration, documentation, automated tests, deployment processes, and so on.

There are five broad categories of IAC tools:

- **Ad hoc scripts**

- **Configuration management tools** (Ex: Chef, Puppet, Ansible, SaltStack)

Configuration management tools are designed to install and manage software on existing servers.

- **Server templating tools** (An alternative to configuration management) (Ex: Docker, Packer, Vagrant)

The idea behind server templating tools is to create an _image_ of a server that captures a fully self-contained "snapshot" of the operating system (OS), the software, the files, and all other relevant details. We can then use some other IAC tool to install the image on all of our servers.

- **Orchestration tools** (Ex: Kubernetes, Docker Swarm, Amazon ECS (Elastic Container Service))

Orchestartion tools are used to manage VMs and containers. They roll out updates to an existing fleet of containers, monitor their health, scale them up or down in response to load, distribute traffic among them etc.

- **Provisioning tools** (Ex: Terraform, CloudFormation, OpenStack)

Provisioning tools are responsible for creating the servers themselves.

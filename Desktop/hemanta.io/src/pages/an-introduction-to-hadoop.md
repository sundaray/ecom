---
title: "An Introduction to Hadoop"
date: "2022-07-04"
excerpt: "Hadoop core components, Hadoop ecosystem"
---

```toc

```

### What is Hadoop?

Hadoop is a data storage and processing platform, based upon a central concept: **data locality**.

#### What is data locality?

It is the concept of processing data locally wherever possible. Hadoop intentionally attempts to minimize the amount of data transferred across the network by bringing the processing to the data instead of the reverse.

#### Shared nothing approach

Hadoop enables large datasets to be processed locally on the nodes of a cluster using a _shared nothing_ approach, where each node can independently process a much smaller subset of the entire dataset without needing to communicate with one another.

#### Hadoop is schemaless

Hadoop is schemaless with respect to its write operations (it is what’s known as a _schema-on-read_ system). This means that it can store and process a wide range of data, from unstructured text documents, to semi-structured JSON (JavaScript Object Notation) or XML documents, to well-structured extracts from relational database systems.

### Core components of Hadoop

Hadoop has two core components:

- **Hadoop Distributed File System (HDFS):** It is Hadoop’s storage subsystem.
- **YARN** (which stands for Yet Another Resource Negotiator): It can be thought of as Hadoop’s process scheduling subsystem

Each component is independent of one another and can operate in its own cluster. For example, a HDFS cluster and a YARN cluster can operate independently. However, when they are co-located with one another, the combination of both systems is considered to be a Hadoop cluster.

> **Note:** A cluster is a collection of systems that work together to perform functions, such as computational or processing functions. Individual servers within a cluster are referred to as nodes.

### Hadoop Ecosystem Components

Any other projects that interact or integrate with Hadoop in some way - for instance, data ingestion projects such as **Flume** or **Sqoop**, or data analysis tools such as **Pig** or **Hive**—are called Hadoop "ecosystem" projects. In many ways, you could consider **Spark** an ecosystem project, although this can be disputed because **Spark** does not require Hadoop to run.

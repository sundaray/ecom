---
title: "CPU, Multicore & Hyper-threading"
date: "2021-05-28"
excerpt: "Fundamentals of computer science."
categories: ["Computer Science"]
---

```toc

```

### CPU

CPU(Central Processing Unit), often referred to as the processor, executes instructions that make up a computer program.

When you fire up an application, the code for that program is taken from the hard drive and is stored in the random access memory(RAM) before being fed into the CPU. The CPU then reads the instructions from the RAM to perform the task at hand.

When data is sent from the RAM to the CPU, they are separated and directed to different cores.

### Multicore

A core is a smaller CPU or processor built into a big CPU. It can independently perform or process all computational tasks. The term multicore means multiple smaller CPUs within a large CPU. A dual-core CPU means that there are 2 cores(individual processing units) within the CPU.

### Hyper-threading

Imagine a train yard: programs such as Microsoft Word and Microsoft Excel are freights on a train moving through the station(the core) that has only one set of tracks. And the freights (program instructions) head down the track in succession.

When you hyper-thread your cores, you essentially create two tracks at the depot. Instead of travelling along a single track, data gets separated and processed at the depot, speeding up its travel time.

Instead of feeding one program at a time to the core, hyperthreading allows you to load multiple programs at once. Essentially one core becomes two processors.

The primary objective of hyperthreading is to increase the number of independent instructions on the tracks heading towards the core. This is the result of parallel computing in which the CPU manages multiple instruction pipelines to execute several instructions on a concurrent clock time.

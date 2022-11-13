---
title: "Calculate Mean, Median, Mode Using the statistics Module in Python"
date: "2021-08-22"
excerpt: "Calculate the measures of central tendency of a data set."
categories: ["Python"]
---

```toc

```

###### Learn to calculate the measures of variability (variance and standard deviation) of a data set usign the statistics module provided by the Python standard library in my blog post [here](https://hemanta.io/calculate-variance-and-standard-deviation-using-the-statistics-module-in-python/).

Mean, median and mode are measures of central tendency. In other words, they are used to represent the a _central_ value in a set of values.

### Mean

**Mean is the average value in a set of values.**

We can calculate the mean of a data set by dividing the sum of values by the count of values.

### Median

**Median is the middle value in an _ordered_ list of values.**

When there are odd numbers of data points, the median is always the middle number. In case there are even numbers of data points, the median is the average of the two middle numbers.

The median represents the 50th percentile of our data. This means that 50% of the values are greater than the median and 50% of the data are less than the median.

### Mode

**The mode of a data set is the most frequently occurring value.**

The Python standard library’s ~~statistics~~ module provides functions for calculating mean, median and mode.

First, we import the ~~statistics~~ module. Then we can access the module’s functions using the name of the module followed by a dot followed by the name of the function to call.

**Example:**

```py {numberLines}
import statistics

scores = [34, 45, 67, 38, 89, 45, 98, 12, 24]

mean = statistics.mean(scores)
print(mean)
# 50.22

median = statistics.median(scores)
print(median)
# 45

mode = statistics.mode(scores)
print(mode)
# 45
```

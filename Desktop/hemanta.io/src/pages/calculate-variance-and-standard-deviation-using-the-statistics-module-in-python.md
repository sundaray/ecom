---
title: "Calculate Variance & Standard Deviation Using the statistics Module in Python"
date: "2021-08-22"
excerpt: "Calculate the measures of dispersion of a data set."
categories: ["Python"]
---

```toc

```

###### Learn how to calculate mean, median and mode using the statistics module in Python in my blog post [here](https://hemanta.io/calculate-mean-median-mode-using-the-statistics-module-in-oython/).

Measures of dispersion (_also known as measures of variability_) help us understand how spread out values are.

### Variance

Variance describes how far apart observations are spread out from their _mean_. **It is calculated as the average squared distance from the _mean_.**

> Distances must be squared so that distances below the _mean_ don’t cancel out the distances above the mean.

The variance gives us a statistic in squared units. For example, if we calculated the _variance_ of the heights of students of a class (_the data is in feet_), the result would be in _feet squared_.

### Standard deviation

We use standard deviation to see how far from the mean data points are, on average.

A small standard deviation means that values are close to the mean, while a large standard deviation means that values are dispersed more widely.

**Standard deviation is simply the square root of the variance.**

We can calculate the variance and standard deviation of a set of data points using the ~~statistics~~ module provided by the Python standard library.

```py {numberLines}
import pandas as pd

import statistics

scores = [34, 45, 67, 38, 89, 45, 98, 12, 24]

statistics.pvariance(scores) # calculate the variance
# 742.6172839506172

statistics.pstdev(scores) # calculate the standard deviation
# 27.251005191563433
```

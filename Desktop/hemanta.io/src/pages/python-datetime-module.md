---
title: "Python datetime Module"
date: "2021-08-26"
excerpt: "date, time, datetime, timedelta"
categories: ["Python"]
---

```toc

```

~~datetime~~ is a built-in module in the Python standard library. It defines four main object classes, each with many methods:

- **date** - for years, months and days
- **time** - for hours, minutes, seconds and fractions
- **datetime** - for dates and time together
- **timedelta** - for date and/or time intervals

### date object

We can make a date object by specifying a year,month and day. These values are then available as attributes:

```py {numberLines}
from datetime import date

birthday = date(1987, 4, 26)

print(birthday)
# 1987-04-26

print(birthday.year)
# 1987

print(birthday.month)
# 4

print(birthday.day)
# 26
```

### isoformat()

We can print a date with its ~~isoformat()~~ method.

```py {numberLines}
from datetime import date

birthday = date(1987, 4, 26)

print(birthday.isoformat())
# 1987-04-26
```

The ~~iso~~ refers to ISO 8601, an international standard for representing dates and times.

### today()

We can generate today’s date using the ~~today()~~ method.

```py {numberLines}
from datetime import date

today = date.today()

print(today)
# 2021-08-27
```

### timedelta

We can add some time interval to a date using the ~~timedelta~~ object.

```py {numberLines}
from datetime import date, timedelta

today = date.today()

one_day = timedelta(days=1)

tomorrow = today + one_day

print(tomorrow)
# 2021-08-28

yesterday = today - one_day

print(yesterday)
# 2021-08-26
```

### time object

The ~~datetime~~ module’s ~~time~~ object is used to represent a time of the day:

```py {numberLines}
from datetime import time

noon = time(12, 0, 0)

print(noon)
# 12:00:00

print(noon.hour)
# 12

print(noon.minute)
# 0

print(noon.second)
# 0

print(noon.microsecond)
# 0
```

If we don’t provide all the arguments, ~~time~~ assumes all the rest are zero.

### datetime object

We can generate the current date and time using the ~~now()~~ method of the ~~datetime~~ object.

```py {numberLines}
from datetime import datetime

current_time_date =  datetime.now()

print(current_time_date)
# 2021-08-27 01:45:10.524517
```

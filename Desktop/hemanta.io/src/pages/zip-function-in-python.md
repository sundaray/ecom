---
title: "zip() Function in Python"
date: "2021-08-24"
excerpt: "Learn to process multiple sequences in parallel."
categories: ["Python"]
---

We can use the built-in ~~zip()~~ function in Python to process multiple sequences in parallel.

~~zip()~~ grabs the item from each sequence that has the same index value and creates a new tuple from them.

```py {numberLines}
players = ['Messi', 'Ronaldo', 'Neymar', 'Salah']

goals = [10, 12, 8]

print(zip(players, goals))
# <zip object at 0x000001B1E6624800>
```

```py {numberLines}
players = ['Messi', 'Ronaldo', 'Neymar']

goals = [10, 12, 8]

for player, goal in zip(players, goals):
    print(f"{player} - {goal}")

# Messi - 10
# Ronaldo - 12
# Neymar - 8
```

In our code example above, both the lists - ~~players~~ and ~~goals~~ had the same number of elements.

What happens when we provide two or more sequences with different numbers of elements to the ~~zip()~~ function?

In such a scenario, ~~zip()~~ will automatically stop processing the sequences when it reaches the end of the shortest sequence.

```py {numberLines}
players = ['Messi', 'Ronaldo', 'Neymar', 'Salah'] # 4 elements

goals = [10, 12, 8] # 3 elements

for player, goal in zip(players, goals):
    print(f"{player} - {goal}")

# Messi - 10
# Ronaldo - 12
# Neymar - 8
```

# Offline MicroPython Test Scripts

Use these in Kodeværksted without connecting a Pico. They are meant to test small
beginner-friendly MicroPython features.

## 1. For loop

```python
for i in range(5):
    print("hello", i)
```

Expected output:

```text
hello 0
hello 1
hello 2
hello 3
hello 4
```

## 2. Variables and math

```python
speed = 10
boost = 3

print("speed:", speed)
print("boost:", boost)
print("total:", speed + boost)
```

Expected output:

```text
speed: 10
boost: 3
total: 13
```

## 3. If/else

```python
temperature = 22

if temperature > 20:
    print("warm")
else:
    print("cold")
```

Expected output:

```text
warm
```

## 4. Time and sleep

```python
import time

for i in range(3):
    print("tick", i)
    time.sleep(1)

print("done")
```

Expected output:

```text
tick 0
tick 1
tick 2
done
```

This should take about 3 seconds.

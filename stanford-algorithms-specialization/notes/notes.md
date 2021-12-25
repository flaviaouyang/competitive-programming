# Algorithms Specialization

---

# Courses Overview

1. Divide and Conquer, Sorting and Searching and Randomized Algorithms
2. Graph Search, Shortest Paths, and Data Structures
3. Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming
4. Shortest Paths Revisited, NP-Complete Problems

---

# Course 001: Divide and Conquer, Sorting and Searching and Randomized Algorithms

---

## Merge sort

- A recursive algorithms that will sort the input array by dividing the input array in half and solve each half recurvisely, finally combine the results.

![merge sort](img/merge-sort.png)

```pseudocode
C = output array {length = n}
A = 1st sorted array {length = n/2}
B = 2nd sorted array {length = n/2}
i, j = 1

for k = 1 to n:
	if A(i) < B(j)
		C(k) = A(i)
		i++
	else
		C(k) = B(j)
		j++
```

```python
def merge_sort(list):
    if len(list) > 1:
        half = len(list)//2
        i = j = k = 0
        left = list[:half]
        right = list[half:]
        merge_sort(left)
        merge_sort(right)

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                list[k] = left[i]
                i += 1
            else:
                list[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            list[k] = left[i]
            k += 1
            i += 1

        while j < len(right):
            list[k] = right[j]
            k += 1
            j += 1
```

- Running Time: 




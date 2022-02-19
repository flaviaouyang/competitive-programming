# Data Structures and Algorithms

---

## ArrayList

- Array with primitive elements: `int[] myInts = new int[15];`
- Array with reference elements: `Shape[] myShapes = new Shape[428];`
- A computer accesses an element in an array in **constant time**
	- meaning the size of the array does not matter

- **List**: an ordered set of elements a~0~, a~1~, a~2~, a~3~, a~4~,...,a~n-1~
	- `n` being the number of elements in the list, or the **size** of the list
	- three implementations of a list:
		1. Array List
		2. Singly linked list
		3. Doubly linked list
- **ArrayList**: 
	- use an array to store the elements of the list; and keep track of how many elements we have inserted in the list
	- Java ArrayList creates an array of **length 10**


```java
public class ArrayLIst {
    private Shape[] arr;
    private int size;
    
    public ArrayList() {
        arr = new Shape[10];
        size = 10;
    }
    
    public Shape get(int i) {
        if (i >= 0 && i < size) {
            return arr[i];
        } else {
            throw new IndexOutOfBoundsException("Out of Bounds.");
        }
    }
    
    public Shape set(int i, Shape e) {
        if (i >=0 && i < size) {
            Shape temp = arr[i];
            arr[i] = e;
            return temp;
        }
    }
    
    public void add (Shape e) {
        arr[size] = e;
        size += 1;
    }
}
ArrayList list = new ArrayList();
```

- `ArrayList` is a generic class with a type parameter
	- When you create an object of type `ArrayList` you specify the type of the elements stored by the list by appending to `ArrayList` a class name enclosed in `< >`

```java
// create an arraylist of integers with initial capacity 10
ArrayList<Integer> words = new ArrayList<Integer>();

// create an arraylist of shapes with initial capacity 23
ArrayList<Shape> myShapes = new ArrayList<Shape>(23);
```

- **Wrapper classes**: `Integer`, `Double`, `Character` wrap a value of the primitive type `int`, `double`, `char` respectively <u>in an object</u>
	- Meaning they turn primitive types into reference types
- The conversion between the primitive types and their wrappers is done automatically: `Integer x = 5` (no compile-time error)
- **Autoboxing**: the <u>automatic conversion that Java compiler makes between the primitive types and their corresponding object wrapper classes</u>.
	- conversion in the other way is called **unboxing**
- **for each loop**

```java
int[] numbers = {1, 2, 3, 4, 5};
for(int element: numbers) {
    System.out.println(element);
}
```

## Singly Linked Lists

- ArrayList v.s. Linked List

![](img/arraylist-vs-linkedlist.png)

- Singly Linked List Node

```java
class SNode {
    Shape element;
    SNode next;
}

SNode myNode = new SNode();
n.element = new Shape();
```

- A linked list is **a sequence of nodes** along with **a reference to the <u>head</u> and <u>tail</u> node**.

![](img/head-tail.png)

```java
public class SLinkedList {
    private SNode head;
    private SNode tail;
    private int size;
    private class SNode {
        Shape element;
        SNode next;
    }
}

SLinkedList list = new SLinkedList();
```

![](img/singly.png)

- `addFirst()`

```pseudocode
SNode newNode = new SNode();
newNode.element = e;
newNode.next = head;
// edge case
if (head == null)
	tail = newNode;
head = newNode;
size = size + 1;
```

![](img/add-first.png)

- `removeFirst()`

```pseudocode
SNode tmp = head;
// edge case: size = 0
if size == 0
	throw exception
head = tmp.next;
tmp.next = null;
size--;
// edge case: size = 1
if size == 0
	tail = null;
return tmp.element;
```

![](img/remove-first.png)

- **Time Complexity**: let N be list size

![](img/singly-time-complexity.png)

## Doubly Linked Lists

- Doubly linked list: each node has a reference to the next node AND to the previous node

![](img/doubly-linked-list.png)

```java
class DNode {
    Shape element;
    DNode next;
    Dnode prev;
}

DNode myNode = new DNode();
n.element = new Shape();

public class DLinkedList {
    private DNode head;
    private DNode tail;
    private int size;
    
    private class DNode {
        Shape element;
        DNode next;
        DNode prev;
    }
}

DLinkedList list = new DLinkedList();
```

- **Time Complexity**:

![](img/doubly-linked-list.png)

- ArrayList v.s. Linked list:
	- both take **O(N)** to add/remove from position `k`

## Quadratic Sorting:

- Time complexity: O(N^2^)

### Bubble sort

- traverse the list repeatedly
	- if out of order elements are found, swap them

```javascript
for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
        if (list[j] > list[j+1]) {
            let store = list[j];
            list[j] = list[j+1];
            list[j+1] = store;
        }
    }
}
```

### Selection sort

- partition the list into two parts
	- one sorted and the other unsorted
- **Procedure**:
	1. select smallest element in the unsorted part of the list
	2. swap the element with element in the initial position of the unsorted array
	3. Change where you divide the array from sorted part to the unsorted part

```js
for ( let i = 0; i < list.length - 1; i++ ) {
    let min = i;
    for ( let j = i + 1; j < list.length; j++ ) {
        if (list[j] < list[min]) {
            min = j;
        }
    }
    if (min != i) {
        [list[min], list[i]] = [list[i], list[min]];
    }
}
```

### Insertion sort

- divide list into two parts
	- one sorted
	- another unsorted
- **Procedure**:
	1. select first element of the unsorted 
	2. insert selected element into correct position in the sorted part of list
	3. change division of list

```js
for ( let i = 0; i < list.length; i++ ) {
    let element = list[ i ];
    let j = i;
    while ( j > 0 && element < list[j-1]) {
        list[j] = list[j-1];
        j--;
    }
    list[j] = element;
}
```

## Asymptotic notations

### Big O

- Let t(n) be a well-defined sequence of integers. 
	- Let t(n) and g(n) be two sequences of integers, where n >= 0. We say that t(n) is ***asymptotically bounded above by*** g(n) if there exists a positive number n~0~ such that, for all n >= n~0~, t(n) <= g(n). That is t(n) **becomes less than or equal to g(n) once n becomes sufficiently large**.
	- **Example**: t(n) = 5n + 70 is for sure **not** asymptotically bounded above by n, however, it is by 6n.
- Big O allows us to define an aymptotic upper bound on t(n) in terms of *a simpler function* g(n):
	- `1, log(n), n, nlog(n), n^2, n^3, 2^n, ...`
- **Defintion**: Let t(n) and g(n) be well-defined sequences of integers. We say t(n) is O(g(n)) if there exists two positive numbers n~0~ and c such that, for all n >= n~0~, `t(n) <= c g(n)`.
	- We say **t(n) is big O of g(n)**

### Analysis of Algorithms

- Time taken by an algorithm depends on the input and it grows with the size of such input.
	- this is why we desribe the **running time of an algorithm with a function of the size of its input**.
- *input size* depends on the problem being studied, and it can vary depending on the algorithm
	- it can be
		- number of elements in the input
		- number of bits required to represent the input
		- multiple numbers
- *running time* is the number of primitive operations executed

### O(1)

- f(n) is O(1) if there exists two positive constants n~0~ and c such that, for all n >= n~0~
	- f(n) is **bounded by a constant**.

### Scaling

- For all constant factors *a*> 0, if f(n) is O(g(n)), then `a * f(n)` is also O(g(n)).

### Sum Rule

- If f~1~(n) is O(g(n)) and f~2~(n) is O(g(n)), then f~1~(n) + f~2~(n) is O(g(n)).

### Produce Rule

- If f~1~(n) ia O(g(n)) and f~2~(n) is O(g(n)), then f~1~(n) * f~2~(n) is O(g~1~(n) * g~2~(n)).

### Transitivity Rule

- If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is O(h(n)).

### Bounds

![](img/big-o.png)

### Big Omega Ω( )

- Aymptotic lower bounds: algortihms take ***at least*** a certain time to run as a function of input size *n*.
- f(n) is asymptotically bounded below by g(n) if there exists an n~0~ such that, for all n >= n~0~, f(n) >= g(n).
- Given a function g(n), we denote by Ω(g(n)), ***big-omega of g of n***.
	- Ω notation describes an **asymptotic lower bound**.

### Big Theta θ( )

- Given a function g(n), we denote by θ(g(n)), ***big theta of g of n***, the following set of functions:
	- θ(g(n)) = { f(n): there exists positive constants c~1~, c~2~, and n~0~ such that c~1~g(n) <= f(n) <= c~2~g(n) for all n >= n~0~.
	- We use big theta to describe an **asymptotic tight bound**.

## Stacks and Queues



### Merge sort

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

- Running Time: Merge sort on an array of size `m` is smaller or equal to `4m+2`
	- For every input array of size `n`, merge sort produces a sorted output array and uses at most **6nlog~2~n+6n** operations




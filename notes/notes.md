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

### Bubble sort

- traverse the list repeated
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
	- first part contains the smallest elements in order
	- second part contains the rest of the elements
	- 

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




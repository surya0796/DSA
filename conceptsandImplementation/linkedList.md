A linked list is a linear data structure that includes a series of connected nodes. Each node consists of a data value and a pointer that points to the next node. The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
Random access of elements is not feasible and accessing an element has linear time complexity.
The linked list data structure supports three main operations:
    Insertion - to add an element at the beginning, end or at a given index in the list.
    Deletion - to remove an item given its index or value.
    Search - to find an element given it's value.   
Linked list usage: All Applications of stacks and queues are applications of linked lists.

Advantages of Linked List:
    1. Elements can be inserted and removed with constant time.
    2. A linked list does not occupy any unused memory.

Advantages of Array:
    1. We can access any array element ("random access") in constant time.
    2. We can traverse an array from back to front – this is not possible with a singly linked list, only with a doubly linked one.
    3. When containing the same number of elements, an array occupies significantly less memory than a linked list.
    4. Due to the principle of locality, we can access elements close to each other much faster in an array.
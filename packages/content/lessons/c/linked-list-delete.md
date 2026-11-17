Putting nodes at the front is quick, but it gives us the newest value first. A queue, like people at a window, needs the opposite: new values go at the end. And sometimes a value must leave the list from the middle

We use the same node as in the last lesson

```c
struct node {
    int value;
    struct node *next;
};
```

---

To add at the end, we walk to the last node, the one whose next is NULL, and hang the new node there. An empty list is the special case: the new node becomes the head

```c
struct node *append(struct node *head, int value) {
    struct node *n = malloc(sizeof(struct node));
    n->value = value;
    n->next = NULL;

    if (head == NULL) {
        return n;
    }
    struct node *p = head;
    while (p->next != NULL) {
        p = p->next;
    }
    p->next = n;
    return head;
}
```

Notice the loop: it stops while p is still on the last node, because it checks `p->next`, not p. That's where we need to be, to change its next

---

Finding a value is a plain walk

```c
int contains(struct node *head, int value) {
    for (struct node *p = head; p != NULL; p = p->next) {
        if (p->value == value) {
            return 1;
        }
    }
    return 0;
}
```

---

Taking a node out is the tricky part. To remove a node, the node **before** it must skip over it and point to the one after it

```text
before:  [ 3 ] -> [ 7 ] -> [ 9 ] -> NULL
remove 7: [ 3 ] ---------> [ 9 ] -> NULL
```

So while we walk, we keep two pointers: the current node, and the one before it, prev. The head has no node before it, so it's a special case again: if the head goes, the next node becomes the new head

```c
struct node *remove_value(struct node *head, int value) {
    struct node *prev = NULL;
    struct node *p = head;
    while (p != NULL && p->value != value) {
        prev = p;
        p = p->next;
    }
    if (p == NULL) {
        return head;
    }
    if (prev == NULL) {
        head = p->next;
    } else {
        prev->next = p->next;
    }
    free(p);
    return head;
}
```

If the value is not in the list, the loop runs to the end, p is NULL, and nothing changes. Otherwise we link around the node and free it. Only the first node with that value goes

---

Putting it to work

```c
#include <stdio.h>
#include <stdlib.h>

struct node {
    int value;
    struct node *next;
};

struct node *append(struct node *head, int value) {
    struct node *n = malloc(sizeof(struct node));
    n->value = value;
    n->next = NULL;
    if (head == NULL) {
        return n;
    }
    struct node *p = head;
    while (p->next != NULL) {
        p = p->next;
    }
    p->next = n;
    return head;
}

struct node *remove_value(struct node *head, int value) {
    struct node *prev = NULL;
    struct node *p = head;
    while (p != NULL && p->value != value) {
        prev = p;
        p = p->next;
    }
    if (p == NULL) {
        return head;
    }
    if (prev == NULL) {
        head = p->next;
    } else {
        prev->next = p->next;
    }
    free(p);
    return head;
}

int main(void) {
    struct node *head = NULL;
    head = append(head, 3);
    head = append(head, 7);
    head = append(head, 9);
    head = remove_value(head, 3);
    head = remove_value(head, 9);

    for (struct node *p = head; p != NULL; p = p->next) {
        printf("%d\n", p->value);
    }

    while (head != NULL) {
        struct node *next = head->next;
        free(head);
        head = next;
    }
    return 0;
}
```

Output

```text
7
```

---

## Mission: The Print Queue

The line printer prints jobs in the order they arrive. Sometimes an operator changes their mind and cancels a job that is still waiting. Keep the print queue in a linked list

1. Write **struct node \*append(struct node \*head, int id)** that adds a job at the end and returns the head
2. Write **struct node \*cancel(struct node \*head, int id)** that takes the first job with that id out of the list, frees it, and returns the head
3. Read commands, one per line, until the input ends, and answer them
   - `ADD id`: add the job at the end of the queue. Print nothing
   - `CANCEL id`: take the job out. If no job has that id, print `No job ` and the id
   - `SHOW`: print `Queue:` and the ids in order, each after a space, or `Queue: empty`
4. Free every node that is still in the list at the end

Ids are whole numbers from 1 to 9999. The same id can be in the queue more than once. There are at most 500 commands

**Example**

Input

```text
ADD 12
ADD 40
ADD 7
CANCEL 40
CANCEL 99
SHOW
CANCEL 12
CANCEL 7
SHOW
```

Output

```text
No job 99
Queue: 12 7
Queue: empty
```

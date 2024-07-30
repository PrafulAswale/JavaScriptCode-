// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  head = null;
  constructor() {
    this.head = null;
  }

  addValue(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
    //console.log(temp.value);
  }

  removeValue() {
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    console.log(temp.next.value + " removed");
    temp.next = null;
  }

  traverseValues() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

let ll = new LinkedList();

ll.addValue(1);
ll.addValue(2);
ll.addValue(3);
ll.addValue(4);
ll.addValue(5);
ll.traverseValues();
ll.removeValue();
ll.removeValue();
ll.traverseValues();
// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  stack;
  count;
  constructor() {
    this.stack = [];
    this.count = -1;
  }

  push(value) {
    this.count++;
    this.stack[this.count] = value;
  }

  pop() {
    if (this.count == -1) return console.log("Stack is Empty");

    this.count--;
  }

  peek() {
    if (this.count == -1) return console.log("Stack is Empty");
    return this.stack[this.count];
  }
}

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
console.log(st.peek());
st.pop();
// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
let strReverse = new Stack();

let str = "desreveRsIgnirtS";
let result = "";
for (let i = 0; i < str.length; i++) {
  strReverse.push(str[i]);
}

for (let i = 0; i < str.length; i++) {
  result += strReverse.peek();
  strReverse.pop();
}

console.log(result);

// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first
// element).

class Queue {
  queue;

  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    let dequeueEle = this.queue[0];

    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue[i] = this.queue[i + 1];
    }

    return dequeueEle;
  }

  front() {
    return this.queue[0];
  }
}

let que = new Queue();

que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.enqueue(4);
console.log("Front: " + que.front());
console.log("Dequeue: " + que.dequeue());
console.log("Front: " + que.front());
// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
let printer = new Queue();

printer.enqueue("Job-1");
printer.enqueue("Job-2");
printer.enqueue("Job-3");
printer.enqueue("Job-4");

console.log(printer.dequeue("Job-1"));
console.log(printer.dequeue("Job-2"));
console.log(printer.dequeue("Job-3"));
console.log(printer.dequeue("Job-4"));

// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor() {
    this.value;
    this.left;
    this.right;
  }
}
// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  tRoot;
  idx;
  constructor() {
    this.tRoot = null;
    this.idx = -1;
  }

  buildTree(nodes) {
    this.idx++;
    if (nodes[this.idx] == -1) {
      return null;
    }

    let newNode = new Node(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);

    this.tRoot = newNode;

    return this.tRoot;
  }

  inorder(tRoot) {
    if (tRoot === null) return;

    this.inorder(tRoot.left);
    console.log(tRoot.value + "");
    this.inorder(tRoot.right);
  }
}

let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

let tree = new BinaryTree();

tree.buildTree(nodes);
tree.inorder(tree.tRoot);
// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

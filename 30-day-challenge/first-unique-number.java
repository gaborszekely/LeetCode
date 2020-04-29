import java.util.*;

class FirstUnique {
    private DoublyLinkedList<Integer> list = new DoublyLinkedList<>();

    public FirstUnique(int[] nums) {
        // Initialize list
        for (int num : nums) {
            add(num);
        }
    }

    public int showFirstUnique() {
        return (list.getHead() != null) ? list.getHead().val : -1;
    }

    public void add(int value) {
        if (!list.seen(value)) {
            list.addToTail(value);
        } else if (list.has(value)) {
            list.remove(value);
        }
    }
}

class DoublyLinkedList<T> {
    private Map<T, Node<T>> nodes = new HashMap<>();
    private Node<T> head, tail;

    public void addToHead(T val) {
        Node<T> node = registerNode(val);
        if (head == null) {
            head = tail = node;
        } else {
            node.next = head;
            head.prev = node;
            head = node;
        }
    }

    public void addToTail(T val) {
        Node<T> node = registerNode(val);
        if (tail == null) {
            head = tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
    }

    public void remove(T val) {
        Node<T> node = nodes.get(val);
        if (node == head && node == tail) {
            head = tail = null;
        } else if (node == head) {
            head = head.next;
        } else {
            node.prev.next = node.next;
            if (node.next != null) {
                node.next.prev = node.prev;
            } else {
                tail = node.prev;
            }
        }
        nodes.put(val, null);
    }

    public Node<T> getHead() {
        return head;
    }

    public boolean seen(T val) {
        return nodes.containsKey(val);
    }

    public boolean has(T val) {
        return nodes.containsKey(val) && nodes.get(val) != null;
    }

    private Node<T> registerNode(T val) {
        Node<T> node = new Node<>(val);
        nodes.put(val, node);
        return node;
    }

    static class Node<T> {
        public T val;
        public Node<T> next, prev;

        public Node(T val) {
            this.val = val;
        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such: FirstUnique
 * obj = new FirstUnique(nums); int param_1 = obj.showFirstUnique();
 * obj.add(value);
 */

/**
 * Explanation: FirstUnique firstUnique = new FirstUnique([2,3,5]);
 * firstUnique.showFirstUnique(); // return 2 firstUnique.add(5); // the queue
 * is now [2,3,5,5] firstUnique.showFirstUnique(); // return 2
 * firstUnique.add(2); // the queue is now [2,3,5,5,2]
 * firstUnique.showFirstUnique(); // return 3 firstUnique.add(3); // the queue
 * is now [2,3,5,5,2,3] firstUnique.showFirstUnique(); // return -1
 */
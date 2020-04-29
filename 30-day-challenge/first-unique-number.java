import java.util.*;

class FirstUnique {
    public Node head, tail;
    Map<Integer, Node> nodes = new HashMap<>();
    Set<Integer> seen = new HashSet<>();

    public FirstUnique(int[] nums) {
        // Initialize queue
        for (int num : nums) {
            add(num);
        }
    }

    public int showFirstUnique() {
        if (head != null) {
            return head.val;
        }
        return -1;
    }

    public void add(int value) {
        if (!seen.contains(value)) {
            // Create new list Node
            Node newNode = new Node(value);
            nodes.put(value, newNode);

            // Register as a seen value
            seen.add(value);

            // Add to back of queue
            if (head == null) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                newNode.prev = tail;
                tail = newNode;
            }
            return;
        }

        // Remove from list if present
        if (nodes.containsKey(value)) {
            Node node = nodes.get(value);
            if (node == head && node == tail) {
                head = null;
                tail = null;
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
            nodes.remove(value);
        }
    }

    static class Node {
        public int val;
        public Node next, prev;

        public Node(int val) {
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
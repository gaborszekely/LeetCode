import java.util.*;

class Solution {
  HashMap<String, List<String>> adjacencyList = new HashMap<>();

  public int numSimilarGroups(String[] A) {
    // Initialize adjacency list of words
    for (int i = 0; i < A.length; ++i) {
      adjacencyList.put(A[i], new ArrayList<String>());
    }

    // Get Set of unique words
    Set<String> keySet = adjacencyList.keySet();
    String[] words = keySet.toArray(new String[keySet.size()]);

    // Populate adjacency list with swappable words
    for (int i = 0; i < words.length - 1; ++i) {
      for (int j = i + 1; j < words.length; ++j) {
        if (singleSwap(words[i], words[j])) {
          adjacencyList.get(words[i]).add(words[j]);
          adjacencyList.get(words[j]).add(words[i]);
        }
      }
    }

    // Perform DFS to see how many connected components we can find
    int result = 0;

    HashSet<String> visited = new HashSet<>();

    for (Map.Entry<String, List<String>> entry : adjacencyList.entrySet()) {
      String word = entry.getKey();
      if (visited.contains(word))
        continue;
      result++;
      dfs(word, visited);
    }

    return result;
  }

  private void dfs(String word, HashSet<String> visited) {
    if (visited.contains(word))
      return;
    visited.add(word);
    adjacencyList.get(word).forEach((w) -> {
      dfs(w, visited);
    });
  }

  private Boolean singleSwap(String a, String b) {
    if (a == b) return true;

    int edits = 0;

    for (int i = 0; i < a.length(); ++i) {
      if (a.charAt(i) != b.charAt(i))
        edits++;
      if (edits > 2)
        return false;
    }

    return edits == 2;
  }
}

import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagrams = new HashMap<>();

        for (int i = 0; i < strs.length; ++i) {
            String current = strs[i];
            String sorted = sortString(current);

            if (!anagrams.containsKey(sorted)) {
                anagrams.put(sorted, new ArrayList<String>());
            }

            anagrams.get(sorted).add(current);
        }

        return new ArrayList<List<String>>(anagrams.values());
    }

    // Sort a string alphabetically
    private String sortString(String str) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}
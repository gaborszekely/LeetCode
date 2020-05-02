#include <unordered_set>

using namespace std;

class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int totalJewels = 0;
        unordered_set<char> jewels(begin(J), end(J));
        
        for (char c : S) {
            if (jewels.find(c) != jewels.end()) 
                totalJewels++;
        }
        
        return totalJewels;
    }
};
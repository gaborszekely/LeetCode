#include <vector>;

using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
        int lastValidIndex = nums.size() - 1;
        for (int i = nums.size() - 2; i >= 0; --i) {
            if (lastValidIndex <= i + nums[i]) {
                lastValidIndex = i;
            }
        }
        return lastValidIndex == 0;
    }
};
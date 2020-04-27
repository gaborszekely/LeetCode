#include <vector>;
#include <limits>;
#include <algorithm>;

using namespace std;

class Solution {
public:
    int constrainedSubsetSum(vector<int> &nums, int k) {
        int largestI = nums.size() - 1;
        int largest = nums[largestI];

        for (int i = nums.size() - 2; i >= 0; --i) {
            if (largestI > i + k) {
                largestI = findLargestIndex(nums, i, k);
            }

            nums[i] = max(nums[i], nums[i] + get(nums, largestI, numeric_limits<int>::min()));

            if (nums[i] > largest) {
                largest = nums[i];
                largestI = i;
            }
        }

        return largest;
    }
private:
    int findLargestIndex(vector<int> &nums, int i, int k) {
        int largest = std::numeric_limits<int>::min();
        int largestIndex = -1;

        for (int j = i + 1; j <= i + k; ++j) {
            int current = get(nums, j, numeric_limits<int>::min());
            if (current > largest) {
                largest = current;
                largestIndex = j;
            }
        }

        return largestIndex;
    }

    int get(vector<int> &ary, int i, int defaultVal) {
        return (i >= 0 && i < ary.size()) ? ary[i] : defaultVal;
    }
};
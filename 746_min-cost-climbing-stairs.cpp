#include <vector>;

using namespace std;

class Solution {
public:
    int minCostClimbingStairs(vector<int> &cost) {
        int len = cost.size();

        if (len == 1) {
            return cost[0];
        }

        for (int i = len - 3; i >= 0; --i) {
            cost[i] = cost[i] + min(cost[i + 1], cost[i + 2]);
        }

        return min(cost[0], cost[1]);
    }
};
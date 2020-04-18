#include <vector>;

using namespace std;

class Solution {
public:
	int minPathSum(vector<vector<int>> &grid) {
		int r = grid.size() - 1;
		int c = grid[0].size() - 1;

        int minPaths[r+1][c+1];

		for (int i = r; i >= 0; --i) {
			for (int j = c; j >= 0; --j) {
				if (i == r && j == c) {
                    minPaths[i][j] = grid[i][j];
					continue;
				}

				if (i == r) {
					minPaths[i][j] = grid[i][j] + minPaths[i][j + 1];
					continue;
				}

				if (j == c) {
					minPaths[i][j] = grid[i][j] + minPaths[i + 1][j];
					continue;
				}

				minPaths[i][j] = grid[i][j] + min(minPaths[i][j + 1], minPaths[i + 1][j]);
			}
		}

		return minPaths[0][0];
	}
};
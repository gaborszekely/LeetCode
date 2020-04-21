#include <vector>;
#include <math.h>;

using namespace std;

class Solution {
public:
    int leftMostColumnWithOne(BinaryMatrix &binaryMatrix) {
        vector<int> dimensions = binaryMatrix.dimensions();
        int r = dimensions[0];
        int firstOneIndex = dimensions[1];
        
        for (int row = 0; row < r; ++row) {
            if (binaryMatrix.get(row, firstOneIndex - 1) == 0) continue;
            firstOneIndex = binarySearchRow(binaryMatrix, row, firstOneIndex);
            if (firstOneIndex == 0) return 0;
        }
        return firstOneIndex == dimensions[1] ? -1 : firstOneIndex;
    }
private:
    int binarySearchRow(BinaryMatrix &binaryMatrix, int row, int col) {
        int i = 0, j = col - 1;
        while(i <= j) {
            int mid = floor((i + j) / 2);
            int curr = binaryMatrix.get(row, mid);
            int prev = (mid - 1 < 0) ? 0 : binaryMatrix.get(row, mid - 1);
            if (curr == 1 && prev == 0) return mid;
            if (curr == 0) i = mid + 1;
            else j = mid - 1;
        }
        return col;
    }
};

class BinaryMatrix {
    public:
      int get(int x, int y);
      vector<int> dimensions();
};
import java.util.*;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        ArrayList<Integer> result = new ArrayList<>();

        if (matrix.length == 0) {
            return result;
        }

        int r = matrix.length;
        int c = matrix[0].length;
        int numItems = r * c;

        int iterations = 0;

        while (result.size() < numItems) {
            spiralize(matrix, iterations, result, r, c);
            iterations++;
        }

        return result;
    }

    private void spiralize(int[][] matrix, int iterations, ArrayList<Integer> result, int r, int c) {
        int startIndex = iterations;
        int endRow = r - iterations;
        int endCol = c - iterations;

        // 1.) Add first row
        for (int i = startIndex; i < endCol; ++i) {
            result.add(matrix[iterations][i]);
        }

        // 2.) Add last column
        for (int i = startIndex + 1; i < endRow; ++i) {
            result.add(matrix[i][c - iterations - 1]);
        }

        // Avoid duplicate entries if first row == last row or first col == last col
        if (endRow - 1 == iterations || endCol - 1 == iterations) {
            return;
        }

        // 3.) Add final row in reverse
        for (int i = endCol - 2; i >= startIndex; --i) {
            result.add(matrix[endRow - 1][i]);
        }

        // 4.) Add first col in reverse
        for (int i = endRow - 2; i > startIndex; --i) {
            result.add(matrix[i][iterations]);
        }
    }
}
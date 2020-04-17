import java.util.*;

class Solution {
    public int numIslands(char[][] grid) {
        if (grid.length == 0) {
            return 0;
        }

        int r = grid.length;
        int c = grid[0].length;

        boolean[][] seen = new boolean[r][c];
        int count = 0;

        for (int i = 0; i < r; ++i) {
            for (int j = 0; j < c; ++j) {
                if (isLand(grid, i, j) && !hasVisited(seen, i, j)) {
                    visit(grid, i, j, seen);
                    count++;
                }
            }
        }
        return count;
    }

    private void visit(char[][] grid, int i, int j, boolean[][] seen) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[] { i, j });

        while (q.size() > 0) {
            int[] current = q.remove();
            int r = current[0];
            int c = current[1];

            if (hasVisited(seen, r, c)) {
                continue;
            }

            seen[r][c] = true;

            int[][] neighbors = { { r + 1, c }, { r - 1, c }, { r, c + 1 }, { r, c - 1 } };

            for (int[] neighbor : neighbors) {
                int neighborR = neighbor[0];
                int neighborC = neighbor[1];

                if (inBounds(grid, neighborR, neighborC) && isLand(grid, neighborR, neighborC)) {
                    q.add(new int[] { neighborR, neighborC });
                }
            }
        }
    }

    private boolean inBounds(char[][] grid, int r, int c) {
        return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
    }

    private boolean isLand(char[][] grid, int r, int c) {
        return grid[r][c] == '1';
    }

    private boolean hasVisited(boolean[][] seen, int r, int c) {
        return seen[r][c] == true;
    }
}
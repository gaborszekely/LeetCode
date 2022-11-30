class Solution {
    public static class Room {
        int index;
        int timeAvailable;

        public Room(int index, int timeAvailable) {
            this.index = index;
            this.timeAvailable = timeAvailable;
        }
    }

    public int mostBooked(int n, int[][] meetings) {
        int mostBooked = 0;
        int mostBookedIndex = Integer.MAX_VALUE;
        int[] bookings = new int[n];

        // Sort meetings by ascending start time.
        Arrays.sort(meetings, (a, b) -> a[0] - b[0]);

        Queue<Integer> availableRooms = new PriorityQueue<>((a, b) -> a - b);
        Queue<Room> roomsInUse = new PriorityQueue<>((a, b) -> {
            if (a.timeAvailable == b.timeAvailable) {
                return a.index - b.index;
            }
            return a.timeAvailable - b.timeAvailable;
        });

        for (int i = 0; i < n; ++i) {
            availableRooms.add(i);
        }

        for (int[] meeting : meetings) {
            int startTime = meeting[0];
            int endTime = meeting[1];

            // Flush all rooms in use that have become available.
            while (!roomsInUse.isEmpty() && roomsInUse.peek().timeAvailable <= startTime) {
                availableRooms.add(roomsInUse.poll().index);
            }

            Room room;

            // If no rooms are available, assign the first room that will come available.
            if (availableRooms.isEmpty()) {
                room = roomsInUse.poll();
                room.timeAvailable += (endTime - startTime);
            } else {
                int roomIndex = availableRooms.poll();
                room = new Room(roomIndex, endTime);
            }

            roomsInUse.add(room);
            bookings[room.index]++;

            if (bookings[room.index] > mostBooked) {
                mostBooked = bookings[room.index];
                mostBookedIndex = room.index;
            } else if (bookings[room.index] == mostBooked
                    && room.index < mostBookedIndex) {
                mostBookedIndex = room.index;
            }
        }

        return mostBookedIndex;
    }
}
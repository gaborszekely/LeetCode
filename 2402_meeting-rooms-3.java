/*
https://leetcode.com/problems/meeting-rooms-iii/description/
You are given an integer n. There are n rooms numbered from 0 to n - 1.

You are given a 2D integer array meetings where meetings[i] = [starti, endi] means that a meeting will be held during the half-closed time interval [starti, endi). All the values of starti are unique.

Meetings are allocated to rooms in the following manner:

Each meeting will take place in the unused room with the lowest number.
If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
When a room becomes unused, meetings that have an earlier original start time should be given the room.
Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.

A half-closed interval [a, b) is the interval between a and b including a and not including b.
*/

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
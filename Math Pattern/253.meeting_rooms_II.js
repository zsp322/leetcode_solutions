var minMeetingRooms = function(intervals) {
     if (intervals === null || intervals.length === 0) return 0;

     let start = [];
     let end = [];

     for (let i = 0; i < intervals.length; i++) {
         start[i] = intervals[i][0];
         end[i] = intervals[i][1];
     }

     start.sort();
     end.sort();


     let endIdx = 0;
     let rooms = 0;

     for (let i = 0; i < start.length;i++) {
         if (start[i] < end[endIdx]) {
             rooms++;
         } else {
             endIdx++;
         }
     }

     return rooms;
};
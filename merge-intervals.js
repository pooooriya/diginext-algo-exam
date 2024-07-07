const mergeIntervals = (intervals) => {
    const merged = [];

    intervals.sort((a, b) => a[0] - b[0]);

    let [start, end] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];

        if (currentStart <= end) {
            end = Math.max(end, currentEnd);
        } else {
            merged.push([start, end]);
            [start, end] = intervals[i];
        }
    }

    merged.push([start, end]);

    return merged;
}


const input = [[1, 3], [2, 6], [8, 10]];
const output = mergeIntervals(input);
console.log(output);
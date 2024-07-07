const longestConsecutive = (nums) => {
    const numSet = new Set(nums);
    let maxStreak = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            maxStreak = Math.max(maxStreak, streak);
        }
    }

    return maxStreak;
};

const input = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(input)); 
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let interval of intervals) {
    if (result.length === 0 || interval[0] > result[result.length - 1][1]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1],
      );
    }
  }

  return result;
};

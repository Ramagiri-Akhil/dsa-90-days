var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length;
  let n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);

    let partition2 = Math.floor((m + n + 1) / 2) - partition1;

    let left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];

    let right1 = partition1 === m ? Infinity : nums1[partition1];

    let left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];

    let right2 = partition2 === n ? Infinity : nums2[partition2];

    if (left1 <= right2 && left2 <= right1) {
      if ((m + n) % 2 === 1) {
        return Math.max(left1, left2);
      }
      let leftMax = Math.max(left1, left2);
      let rightMin = Math.min(right1, right2);

      return (leftMax + rightMin) / 2;
    }
    if (left1 > right2) {
      high = partition1 - 1;
    } else {
      low = partition1 + 1;
    }
  }
};

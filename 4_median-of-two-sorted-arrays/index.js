/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  return (
    getPartitionedMedian(nums1, nums2) ?? getPartitionedMedian(nums2, nums1)
  );
};

function getPartitionedMedian(arr1, arr2) {
  let l = 0;
  let r = arr1.length - 1;
  const totalLength = arr1.length + arr2.length;
  const isEven = totalLength % 2 === 0;

  // How many values should be to the left of the median value.
  const toLeft = Math.floor(totalLength / 2);

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midVal = arr1[mid];
    const arr2Index = toLeft - mid - 1;

    const getMedian = () =>
      isEven
        ? (arr1[mid] +
            Math.max(
              arr1[mid - 1] ?? -Infinity,
              arr2[arr2Index] ?? -Infinity
            )) /
          2
        : midVal;

    if (arr2Index >= arr2.length) {
      l = mid + 1;
      continue;
    }

    if (arr2Index <= -1) {
      if (arr2Index === -1 && (arr2[0] ?? Infinity) >= midVal) {
        return getMedian();
      }
      r = mid - 1;
      continue;
    }

    if (
      arr2[arr2Index] <= midVal &&
      (arr2[arr2Index + 1] ?? Infinity) >= midVal
    ) {
      return getMedian();
    }

    if (arr2[arr2Index] > midVal) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}

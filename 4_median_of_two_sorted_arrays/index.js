/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length) return getMedian(nums2);
  if (!nums2.length) return getMedian(nums1);
  return (
    getPartitionedMedian(nums1, nums2) ?? getPartitionedMedian(nums2, nums1)
  );
};

function getPartitionedMedian(arr1, arr2) {
  let l = 0;
  let r = arr1.length - 1;
  const totalLength = arr1.length + arr2.length;
  const isEven = totalLength % 2 === 0;
  let toLeft = Math.floor(totalLength / 2);

  // Gets the median if the combined array length is even.
  const getEvenMedian = (i, otherI) =>
    (arr1[i] + Math.max(arr1[i - 1] ?? -Infinity, arr2[otherI] ?? -Infinity)) /
    2;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midVal = arr1[mid];
    const otherIndex = toLeft - mid - 1;

    if (otherIndex >= arr2.length) {
      l = mid + 1;
      continue;
    }

    if (otherIndex <= -1) {
      if (otherIndex === -1 && arr2[0] >= midVal) {
        return isEven ? getEvenMedian(mid, otherIndex) : midVal;
      }
      r = mid - 1;
      continue;
    }

    if (
      arr2[otherIndex] <= midVal &&
      (arr2[otherIndex + 1] ?? Infinity) >= midVal
    ) {
      return isEven ? getEvenMedian(mid, otherIndex) : midVal;
    }

    if (arr2[otherIndex] > midVal) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}

// Gets the median of a single array.
function getMedian(arr) {
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 1 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {

    if (!Array.isArray(ranges) || ranges.length === 0) return [];

    if (ranges.length === 1) return [...ranges];

    // Sort ranges based on the start value
    ranges.sort((a, b) => a[0] - b[0]);
  
    const result = [];

    const n = ranges.length;
  
    let temp = [...ranges[0]];
  
    for (let i = 1; i < n; i++) {

      if ((ranges[i][0] - temp[1]) <= threshold) {

        if (ranges[i][1] > temp[1]) {
          temp[1] = ranges[i][1];
        }
        
      } else {
        result.push(temp);
        temp = ranges[i];
      }
    }
  
    result.push(temp);
    return result;
  }
  
  module.exports = {
      mergeTimeRanges
  }
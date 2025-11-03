const { mergeTimeRanges } = require('./index.js');
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
// Expected Output [
//     [1000, 2000],
//     [2500, 4100],
//     [8000, 9500]
//   ]
console.log(mergeTimeRanges(ranges1, 200)); 

const ranges2 = [
    [0, 10],
    [15, 20],
    [25, 30]
  ];
  const threshold2 = 4;
// Expected Output  [
//     [0, 10],
//     [15, 20],
//     [25, 30]
//   ]
  console.log(mergeTimeRanges(ranges2, threshold2));

  const ranges3 = [
    [0, 10],
    [12, 15],
    [17, 25],
    [27, 35]
  ];
  const threshold3 = 3;
//   Expected Output  [
//     [0, 35]
//   ]
  console.log(mergeTimeRanges(ranges3, threshold3));

// reduce is a little bit problematic it's normally use two parameters 
// the first one is the callback function which basically do operations 
// and the second one is the initialization which should be zero
// Then finally it returns an array after doing the whole Operation

const heights = [175, 177, 135, 155, 159, 165, 167.5];

const sum = heights.reduce((p, c) => p + c ,0);

console.log(sum);

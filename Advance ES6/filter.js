// Filter basically selects elements based on a condition 
// that returns the elements that full-filled the condition 

const heights = [175, 177, 135, 155, 159, 165, 167.5];

const selected  = heights.filter(select => select >160);
const selected2  = heights.filter(select => select < 177);
const selected3  = heights.filter(select => select < 150);
console.log(selected);
console.log(selected2);
console.log(selected3);

const friends = ['Jhon','Don','Rafi', 'Baron', 'Fuad'];
const oddsFriends = friends.filter(frnd => frnd.length > 4);
console.log(oddsFriends);

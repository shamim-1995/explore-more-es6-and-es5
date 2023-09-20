// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [1, 2, 5, 6, 9, 10];
const players = [75, 76, 67, 72, 56, 59];


// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);

const selected = players.filter(p => p % 2 === 1);
// console.log(selected);


const friends = ['Tom', 'mikel', 'oliver', 'tim', 'zosna'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);
const numbers = [12, 10, 8, 15, 7];


// step-1
const doubled = numbers.map(num => num * 2);
// console.log(doubled);

// step-2: added 5 extra.
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);


// step-3:do all the numbers half
const half = numbers.map(num => num/ 2);
// console.log(half);


// step-4: find out lenght.
const friends = ['Tom', 'mikel', 'oliver'];
const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);

// step-5: find out first letter.
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);
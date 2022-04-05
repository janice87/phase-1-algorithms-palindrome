function isPalindrome(word) {
  // Write your algorithm here
let string = word.split('').reverse().join('');
if (word === string) {
  return true
} else {
  return false
}
}
//isPalindrome("racecar")
/* 
  Add your pseudocode here
  reverse the string
*/

/*
  Add written explanation of your solution here
split() method splits the string into an array
reverse() reverses an array
join() joins all elemes of an array into a string
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("mother");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

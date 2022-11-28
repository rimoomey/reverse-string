function reverseString(str) {
  const splitStr = str.split('');
  let reverse = '';

  for (i = splitStr.length - 1; i >= 0; i--) {
    reverse += splitStr[i];
  }

  return reverse;
 }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
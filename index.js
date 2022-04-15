
  function reverseString(word) {
    // create an array from the input string
    const wordArray = word.split("");
    // reverse the array
    const reversedWordArray = wordArray.reverse();
    // create a string from the reversed array
    const reversedWord = reversedWordArray.join("");
    // return the reversed string
    return reversedWord;
  }
  
  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // if the reversed string is the same as the input
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }


/* 
  // reverse the input string
  // if the reversed string is the same as the input
  //   return true
  // else
  //   return false
*/

/*
  i wanted to use .reverse function, but it only works on arrays
  -need to split string into individ elements (into an array)
  -then reverse those individ elements
  -then join individ elements/array back into a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

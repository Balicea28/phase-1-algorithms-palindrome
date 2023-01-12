function isPalindrome(word) {
  let wordBackward = ''
  for (let index = (word.length)-1; index >= 0; index--) {
    wordBackward = wordBackward + word[index]
  }
  if (wordBackward == word) return true
  return false
}



if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

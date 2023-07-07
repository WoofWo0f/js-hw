const isPalindrome = (word) => {
  let wordArray = word.split("");
  let wordArrayReversed = Object.assign([], wordArray).reverse();
  if (word === wordArrayReversed.join("")) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
};

alert(isPalindrome(prompt("Enter your word:")));

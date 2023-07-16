// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = (str) => {
  const middleChar = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str.slice(middleChar - 1, middleChar + 1);
  } else {
    return str.charAt(middleChar);
  }
};

console.log(getMiddle("test"));
console.log(getMiddle("A"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("HHHHHHHHHHHHHHHHRFDGRdrgrgdgsdgsgsgs"));

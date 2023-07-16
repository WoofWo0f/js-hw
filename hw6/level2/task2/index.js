// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
const findShortest = (str) => {
  const words = str.split(" ");
  const wordLengths = words.map((word) => word.length);
  const shortestLength = Math.min(...wordLengths);
  return shortestLength;
};

console.log(findShortest("esa fdasd feasdsda efasd feaaa"));

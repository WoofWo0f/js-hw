// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(str) {
  return str.replace(/\s/g, "");
}

console.log(noSpace("ad  asfafa  afef   aewfraf  rfe"));

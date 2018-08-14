module.exports = string => {
  if (string.length <= 1) {
    return "Needs more characters";
  } else {
    // takes string and removes all punctuation and converts to lowercase
    strWithoutStuff = string.replace(/\W+|\d+/g, "").toLowerCase();

    // takes that string and splits, reverses, and rejoins back together.  split() and join() require parameters
    palindrome = strWithoutStuff
      .split("")
      .reverse()
      .join("");

    // strWithoutStuff = strWithoutStuff.split();
    // strReversedArray = strWithoutStuff.reverse();
    // strPalindrome = strReversedArray.join();
    if (strWithoutStuff === palindrome) {
      console.log(strWithoutStuff, "string without stuff");
      console.log(palindrome, "palindrome");
      return `Palindrome!`;
    } else {
      return `Cheeseburgers`;
    }
  }
};

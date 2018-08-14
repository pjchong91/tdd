module.exports = string => {
  //handle errors first
  var hasNumber = /\d/;

  if (string === null) {
    return "Requires a string";
  } else if (
    typeof string !== "string" ||
    string === "" ||
    hasNumber.test(string)
  ) {
    return 0;
  } else {
    string = string.replace(/\W+|\d+/g, "").toLowerCase();
    // string = string.replace(/[.,\/#!$+%\^&\*;:{}=\-_`~()]/g, "");
    string.split("");
    let i;
    let unique = [];
    // a brute force method, checking every array position against every other array position
    //  O^2 because every letter of hello is being checked against hello
    // for (i = 0; i < string.length; i++) {
    //   const letter = string[i];
    //   let unique = true;
    //   for (let j = 0; j < string.length; j++) {
    //     if (letter === string[j] && i !== j) {
    //       unique = false;
    //     }
    //   }
    //   if (unique) return letter;
    // }
    uselessLetters = [];
    goodLetters = [];
    for (i = 0; i < string.length; i++) {
      newArr = string.slice(i + 1);
      if (newArr.indexOf(string[i]) >= 0) {
        uselessLetters.push(string[i]);
      } else if (uselessLetters.indexOf(string[i]) >= 0) {
      } else {
        goodLetters.push(string[i]);
      }
    }
    return goodLetters[0];
  }
};

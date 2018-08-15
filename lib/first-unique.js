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
    let dict = {};

    // make a dictionary - it is O(n)

    for (i = 0; i < string.length; i++) {
      if (dict[string[i]] === undefined) {
        dict[string[i]] = 1;
      } else {
        count = dict[string[i]];
        dict[string[i]] = count + 1;
      }
    }
    console.log(dict);
    for (var letter in dict) {
      if (dict[letter] === 1) {
        console.log(letter, "letter");
        return letter;
      }
    }
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
  }
};

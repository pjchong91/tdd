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
    string = string.replace(/[.,\/#!$+%\^&\*;:{}=\-_`~()]/g, "");
    string.split("");
    let i;
    let count = 0;
    let answer = "";
    for (i = 0; i < string.length; i++) {
      count++;
      if (string[i] != string[i + 1]) {
        answer += string[i] + count;
        count = 0;
      }
    }
    return answer;
  }
};

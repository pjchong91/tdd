// function was largely written out by my boyfriend.  I'm working at trying to understand the logic behind the structure

isInserted = (longerStr, shorterStr) => {
  let i = 0;
  let j = 0;

  while (i < longerStr.length) {
    if (longerStr[i] === shorterStr[j]) {
      i++;
      j++;
    } else {
      i++;
      //Could also omit line above and do ++i below.
      if (i - j > 1) {
        return false;
      }
    }
  }
  return true;
};

module.exports = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return 0;
  }

  if (Math.abs(str1.length - str2.length) >= 2) {
    return false;
  }

  if (str1.length - str2.length === 1) {
    // insertion
    return isInserted(str1, str2);
  } else if (str2.length - str1.length === 1) {
    // deletion
    return isInserted(str2, str1);
  } else {
    // replacement
    let i = 0;
    let j = 0;
    let numReplacements = 0;

    while (i < str1.length) {
      //++numReplacement is the same as numReplacement = numReplacement + 1
      if (str1[i] !== str2[j] && ++numReplacements > 1) {
        return false;
      }
      i++;
      j++;
    }
    return true;
  }
};

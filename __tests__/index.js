// __tests__/frog-jumps.spec.js

//can also consider tests for: types of input, or missing input
// const frogJumps = require("../lib/frog-jumps.js");
// describe("frogJumps", () => {
//   describe("when start is equal to end", () => {
//     it("should return 0", () => {
//       const result = frogJumps(10, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when start is greater than end", () => {
//     it("should return 0", () => {
//       const result = frogJumps(100, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("jumplength is 0", () => {
//     it("should return 0", () => {
//       const result = frogJumps(100, 10, 5);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when start is less than end (whole number of jumps)", () => {
//     it("should return 2", () => {
//       const result = frogJumps(0, 10, 5);
//       expect(result).toEqual(2);
//     });
//   });
//   describe("jumplength is less than 0", () => {
//     it("should return 0", () => {
//       const result = frogJumps(100, 10, -10);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when partial number of jumps is required", () => {
//     it("should round to a whole number", () => {
//       const result = frogJumps(3, 10, 5);
//       expect(result).toEqual(2);
//     });
//   });
//   describe("jumplength is greater than 0", () => {
//     it("should return the number of jumps", () => {
//       const result = frogJumps(3, 10, 5);
//       expect(result).toEqual(2);
//     });
//   });
// });

// const palindrome = require("../lib/palindrome.js");
// describe("palindrome", () => {
//   describe("when length less than or equal to one character", () => {
//     it("should return 'Needs more characters'", () => {
//       const result = palindrome("i");
//       expect(result).toEqual("Needs more characters");
//     });
//   });
//   describe("first letter matches last letter", () => {
//     it("should return first and last letters match", () => {
//       const result = palindrome("mom");
//       expect(result).toEqual("Palindrome!");
//     });
//   });
//   describe("allows for spaces", () => {
//     it("should recognize palindrome despite spaces", () => {
//       const result = palindrome("never odd or even");
//       expect(result).toEqual("Palindrome!");
//     });
//   });
//   describe("allows for punctuation", () => {
//     it("should recognize palindrome despite punctuation", () => {
//       const result = palindrome("race-car!");
//       expect(result).toEqual("Palindrome!");
//     });
//   });
//   describe("disregards capitalization", () => {
//     it("should recognize palindrome despite capitalization", () => {
//       const result = palindrome("Mom");
//       expect(result).toEqual("Palindrome!");
//     });
//   });
//   describe("is a palindrome", () => {
//     it("same string resulted when read forward or backward", () => {
//       const result = palindrome("RaCecar");
//       expect(result).toEqual("Palindrome!");
//     });
//   });
//   describe("is not a palindrome", () => {
//     it("should recognize not a palindrome", () => {
//       const result = palindrome("omoplata");
//       expect(result).toEqual("Cheeseburgers");
//     });
//   });
// });

// const stringCompression = require("../lib/string-compression.js");

// describe("stringCompression", () => {
//   describe("letter followed by number", () => {
//     it("should have a pattern of letter and number", () => {
//       const result = stringCompression("aaa");
//       expect(result).toEqual("a3");
//     });
//   });
//   describe("when string contains spaces, punctuation and capitalization", () => {
//     it("should ignore those and count letters", () => {
//       const result = stringCompression("aaa---!!bBb++c");
//       expect(result).toEqual("a3b3c1");
//     });
//   });
//   describe("input at minimum is one letter", () => {
//     it("should take a letter and output letter and number", () => {
//       const result = stringCompression("a");
//       expect(result).toEqual("a1");
//     });
//   });
//   describe("input is an empty string", () => {
//     it("should return 0", () => {
//       const result = stringCompression("");
//       expect(result).toEqual(0);
//     });
//   });
//   describe("input is null", () => {
//     it("should indicate a string is required", () => {
//       const result = stringCompression(null);
//       expect(result).toEqual("Requires a string");
//     });
//   });
//   describe("input string contains numbers", () => {
//     it("should throw an error", () => {
//       const result = stringCompression("a7bcd");
//       expect(result).toEqual(0);
//     });
//   });
//   describe("input is not a string", () => {
//     it("should throw an error", () => {
//       const result = stringCompression(400);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("repeated letters that exist at different parts in the sequence are not grouped together", () => {
//     it("should separately identify characters that do not sit side by side but exist multiple times in the sequence", () => {
//       const result = stringCompression("abba");
//       expect(result).toEqual("a1b2a1");
//     });
//   });
// });

// const firstUnique = require("../lib/first-unique.js");

// describe("firstUnique", () => {
//   describe("string contains a unique character", () => {
//     it("unique character should not be repeated anywhere through the given string", () => {
//       const result = firstUnique("frof");
//       expect(result).toEqual("r");
//     });
//   });
//   describe("when string contains spaces, punctuation and capitalization", () => {
//     it("should ignore those and count letters", () => {
//       const result = firstUnique("aaa---!!bBb++c");
//       expect(result).toEqual("c");
//     });
//   });
//   describe("input at minimum is one letter", () => {
//     it("should return the letter if only one letter is given", () => {
//       const result = firstUnique("a");
//       expect(result).toEqual("a");
//     });
//   });
//   describe("input is an empty string", () => {
//     it("should return 0", () => {
//       const result = firstUnique("");
//       expect(result).toEqual(0);
//     });
//   });
//   describe("input is null", () => {
//     it("should indicate a string is required", () => {
//       const result = firstUnique(null);
//       expect(result).toEqual("Requires a string");
//     });
//   });
//   describe("input string contains numbers", () => {
//     it("should throw an error", () => {
//       const result = firstUnique("a7bcd");
//       expect(result).toEqual(0);
//     });
//   });
//   describe("input is not a string", () => {
//     it("should throw an error", () => {
//       const result = firstUnique(400);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("when string is all the same character", () => {
//     it("should return undefined", () => {
//       const result = firstUnique("fffffff");
//       expect(result).toBeUndefined();
//     });
//   });
// });

// const lowestInteger = require("../lib/lowest-integer.js");

// describe("lowestInteger", () => {
//   describe("no integer possible between min-max of given array", () => {
//     it("should return the next highest integer", () => {
//       const result = lowestInteger([1, 2, 3]);
//       expect(result).toEqual(4);
//     });
//   });
//   describe("integers in array are all the same", () => {
//     it("should return the next highest integer", () => {
//       const result = lowestInteger([1, 1, 1]);
//       expect(result).toEqual(2);
//     });
//   });
//   describe("lowest integer is below min of array range", () => {
//     it("should return the minimum integer possible", () => {
//       const result = lowestInteger([2, 10, 3]);
//       expect(result).toEqual(1);
//     });
//   });
//   describe("array contains a string", () => {
//     it("should return 0", () => {
//       const result = lowestInteger([10, "hello", 1, 5]);
//       expect(result).toEqual(0);
//     });
//   });
//   describe("input is not an array", () => {
//     it("should return 0", () => {
//       const result = lowestInteger("hello");
//       expect(result).toEqual(0);
//     });
//   });
//   describe("array contains a negative number", () => {
//     it("should return the minimum positive integer", () => {
//       const result = lowestInteger([5, -5, 10]);
//       expect(result).toEqual(1);
//     });
//   });
// });

const editChecker = require("../lib/edit-checker.js");

describe("editChecker", () => {
  describe("strings differ by one insertion", () => {
    it("should return true", () => {
      const result = editChecker("pale", "ple");
      expect(result).toEqual(true);
    });
  });
  describe("strings differ by one replacement", () => {
    it("should return true", () => {
      const result = editChecker("pale", "bale");
      expect(result).toEqual(true);
    });
  });
  describe("strings differ by two replacements", () => {
    it("should return false", () => {
      const result = editChecker("pale", "bake");
      expect(result).toEqual(false);
    });
  });
  describe("strings differ by one deletion", () => {
    it("should return 0", () => {
      const result = editChecker("ple", "pale");
      expect(result).toEqual(true);
    });
  });
  describe("inputs are not strings", () => {
    it("should return 0", () => {
      const result = editChecker(1, [42]);
      expect(result).toEqual(0);
    });
  });
  describe("strings are the same", () => {
    it("should return true", () => {
      const result = editChecker("hello", "hello");
      expect(result).toEqual(true);
    });
  });
  describe("string lengths differ by more than 2 characters", () => {
    it("should return false", () => {
      const result = editChecker("hello", "hellohi");
      expect(result).toEqual(false);
    });
  });
  describe("string has one replacement and one deletion", () => {
    it("should return false", () => {
      const result = editChecker("hell", "helpp");
      expect(result).toEqual(false);
    });
  });
  describe("string has one replacement and one insertion", () => {
    it("should return false", () => {
      const result = editChecker("helpp", "hell");
      expect(result).toEqual(false);
    });
  });
});

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

const stringCompression = require("../lib/string-compression.js");

describe("stringCompression", () => {
  describe("letter followed by number", () => {
    it("should have a pattern of letter and number", () => {
      const result = stringCompression("aaa");
      expect(result).toEqual("a3");
    });
  });
  describe("input at minimum is one letter", () => {
    it("should take a letter and output letter and number", () => {
      const result = stringCompression("a");
      expect(result).toEqual("a1");
    });
  });
  describe("input is null", () => {
    it("should indicate a string is required", () => {
      const result = stringCompression(null);
      expect(result).toEqual("Requires a string");
    });
  });
  describe("repeated letters that exist at different parts in the sequence are not grouped together", () => {
    it("should separately identify characters that do not sit side by side but exist multiple times in the sequence", () => {
      const result = stringCompression("abba");
      expect(result).toEqual("a1b2a1");
    });
  });
});

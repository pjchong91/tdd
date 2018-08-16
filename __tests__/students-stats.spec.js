const StudentStats = require("../lib/student-data.json");
const statsMachine = require("../lib/student-tests.js");

describe("Student Stats", () => {
  let statsMachine, processedData;
  beforeEach(() => {
    statsMachine = new StudentStats("./../lib/student-data.json");
    processedData = {
      projects: {
        project1: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        3: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        satisfaction: 10
      }
    };
  });
  it("should load the JSON", () => {
    expect(statsMachine.data).toBeDefined();
    expect(statsMachine.data[0].name).toEqual("Miss Jermain Waters");
  });

  describe("Query project by name", () => {
    describe("When project name does not exist", () => {
      it("Should throw an error", () => {
        //the callback allows an error to be caught - it would otherwise bubble right through and disappear
        expect(() => statsMachine.getProjectByName("aaaa")).toThrow(
          "Invalid Project Provided"
        );
      });
    });
    describe("When project name exists", () => {
      it("Should return correct stats", () => {
        expect(statsMachine.getProjectByName("project1")).toEqual(
          processedData.projects["project1"]
        );
      });
    });
  });
});

const data = require("./../lib/student-data.json");
const processData = require("./../lib/process-data");

describe("Process Data", () => {
  let processedData;
  let mockData = [
    {
      name: "Miss Jermain Waters",
      age: 31,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "pass",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Juliana Runte",
      age: 42,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "fail",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Emmalee Daugherty",
      age: 25,
      yearsExperience: 2,
      satisfaction: 4,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    }
  ];
  beforeEach(() => {
    processedData = processData(mockData);
  });
  describe("Shape of processed data", () => {
    it("Should generate an object with 3 keys", () => {
      expect(Object.keys(processedData)).toEqual([
        "projects",
        "experience",
        "demographics"
      ]);
    });
    //LEFT OFF HERE. LEAVING NOW..
    describe("Projects", () => {
      it("should create an object for each project", () => {
        expect(Object.keys(processedData.projects)).toEqual([
          "project1",
          "project2",
          "project3",
          "project4"
        ]);
      });
      it("should calculate the average satisfaction for passing students", () => {
        expect(processedData.projects["project1"].passed.satisfaction).toEqual(
          10
        );
      });
      it("should calculate the average satisfaction for failing students", () => {
        expect(processedData.projects["project1"].failed.satisfaction).toEqual(
          10
        );
      });
    });
    describe("Experience", () => {
      it("should return the average satisfaction for all years of experience", () => {
        expect(processedData.experience[1].satisfaction).toEqual(10);
        expect(processedData.experience[2].satisfaction).toEqual(10);
        expect(processedData.experience[3].satisfaction).toEqual(10);
      });
    });
    describe("Demographics", () => {
      it("should return average age and satisfaction for the cohort ", () => {
        expect(processedData.demographics.averageAge).toEqual(10);
        expect(processedData.demographics.satisfaction).toEqual(10);
      });
    });
  });
});

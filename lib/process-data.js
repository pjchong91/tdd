module.exports = data => {
  let reducer = (a, b) => a + b;
  let satisfactionArr = [];
  let ageArr = [];
  let projectArr = [];
  let i = 0;

  // PROJECTS
  let projects = {};
  projects.project1 = {
    passed: {},
    failed: {}
  };
  projects.project2 = {
    passed: {},
    failed: {}
  };
  projects.project3 = {
    passed: {},
    failed: {}
  };
  projects.project4 = {
    passed: {},
    failed: {}
  };

  let p1 = projects.project1;
  let numP = p1.passed.number;
  let satisfactionP = p1.passed.satisfaction;

  let numF = p1.failed.number;
  let satisfactionF = p1.failed.satisfaction;

  for (i = 0; i < data.length; i++) {
    // console.log(data[i].project1)
    if (data[i].project1 === "pass") {
      // console.log('hello')
      // console.log(p1.passed.number,'number')
      if (p1.passed.number === undefined) {
        p1.passed.number = 1;
      }
      if (p1.passed.satisfaction === undefined) {
        p1.passed.satisfaction = data[i].satisfaction;
      } else {
        p1.passed.number = numP + 1;
        p1.passed.satisfaction = (data[i].satisfaction + satisfactionP) / 2;
      }
    } else {
      if (data[i].project1 === "fail") {
        if (p1.failed.number === undefined) {
          p1.failed.number = 1;
        }
        if (p1.failed.satisfaction === undefined) {
          p1.failed.satisfaction = data[i].satisfaction;
        } else {
          numF = p1.failed.number;
          satisfactionF = p1.failed.satisfaction;
          p1.failed.number = numF + 1;
          p1.failed.satisfaction = (data[i].satisfaction + satisfactionF) / 2;
        }
      }
    }
  }

  //   // EXPERIENCE
  let experience = {};
  let yearsOfExp;

  for (i = 0; i < data.length; i++) {
    yearsOfExp = data[i].yearsExperience;
    if (experience[yearsOfExp] === undefined) {
      experience[yearsOfExp] = { satisfaction: data[i].satisfaction };
      // experience[yearsOfExp] = 'sup'
    } else {
      current = experience[yearsOfExp].satisfaction;
      experience[yearsOfExp] = {
        satisfaction: (current + data[i].satisfaction) / 2
      };
    }
  }

  // DEMOGRAPHICS
  for (i = 0; i < data.length; i++) {
    satisfactionArr.push(data[i].satisfaction);
    ageArr.push(data[i].age);
  }
  let satisfactionAvg =
    satisfactionArr.reduce(reducer) / satisfactionArr.length;
  let ageAvg = ageArr.reduce(reducer) / ageArr.length;

  let demographics = {};
  demographics.averageAge = ageAvg.toFixed(1);
  demographics.satisfaction = satisfactionAvg.toFixed(1);
  return { projects, experience, demographics };
};

module.exports = data => {
  let reducer = (a, b) => a + b;
  let satisfactionArr = [];
  let ageArr = [];
  let i = 0;

  // PROJECTS
  let projects = {};

  // EXPERIENCE
  let experience = {};
  let yearsOfExp = data[i].yearsExperience;

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

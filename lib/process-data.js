module.exports = data => {
  //TODO
  let satisfactionArr = [];
  let i = 0;
  for (i = 0; i < data.length; i++) {
    satisfactionArr.push(data[i].satisfaction);
  }
  //   let satisfactionAvg =
  //     satisfactionArr.reduce((a, b) => a + b) / satisfactionArr.length;
  //   return satisfactionAvg;
  console.log(satisfactionArr);
};

const fetch = require('node-fetch');
const FormData = require('form-data');

const monthStringFromMonthNum = num => (new Date(0, num, 0)).toString().split(' ')[1];

module.exports = function() {
  const start = new Date(2017, 0, 1);
  const end = new Date();

  const day = 24*60*60*1000; // hours*minutes*seconds*milliseconds

  const diffDays = Math.floor(Math.abs((start.getTime() - end.getTime())/(day)));

  const [month, date, year] = end.toLocaleString('en-US', {timeZone: "America/Los_Angeles"}).split(',')[0].split('/');

  console.log(`${date}-${month}-${year}`);
  const data = {
    startDate: '1-Jan-2017',
    endDate: `${date}-${monthStringFromMonthNum(month)}-${year}`,
    timeframeOption: 'CURRENT_YEAR',
    chartTimeBuckets: 'MONTH',
    reportConfigJson: '{"totalBoxes":{"TOTAL_DISTANCE":{"field":"TOTAL_DISTANCE"}},"charts":{"chart1":{"field":"TOTAL_DISTANCE","stack":"true"}}}'
  };
  console.log(data);

  let formData = new FormData();
  for (var key in data ) {
    formData.append(key, data[key]);
  }

  return fetch('https://runkeeper.com/user/2104721070/fitnessReportsData', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(obj => {
    const miles = obj.totalBoxes.TOTAL_DISTANCE.value;
    return {
      miles: miles,
      days: diffDays,
    };
  });
}
const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = function() {
  const hour = 60 * 60 * 1000
  const day = 24 * hour;
  const timeZoneOffset = (7 - (new Date().getTimezoneOffset()) / 60) * hour;

  const start = new Date(2017, 0, 1);
  const end = new Date(new Date() - timeZoneOffset);

  const diffDays = Math.floor(Math.abs((start.getTime() - end.getTime())/(day)));

  const [_, month, date, year] = end.toString().split(' ');

  const data = {
    startDate: '1-Jan-2017',
    endDate: `${date}-${month}-${year}`,
    timeframeOption: 'CURRENT_YEAR',
    chartTimeBuckets: 'MONTH',
    reportConfigJson: '{"totalBoxes":{"TOTAL_DISTANCE":{"field":"TOTAL_DISTANCE"}},"charts":{"chart1":{"field":"TOTAL_DISTANCE","stack":"true"}}}'
  };

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
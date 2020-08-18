const request = require('request');

export default (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  const nextUrl = req.url.split('/api')[1];
  console.log(req.url, nextUrl);
  request.get(`https://runkeeper.com${nextUrl}`).pipe(res);
}

const express = require('express');
const app = express();
const request = require('request');
const getRatioData = require('./getRatioData');
const getRatioHtml = require('./getRatioHtml');

app.use('/static', express.static('client-dist'));
app.get('/index.html', (req, res) =>
  res.sendFile('index.html', {root: __dirname + '/../client-dist'})
);
app.get('/', (req, res) =>
res.sendFile('index.html', {root: __dirname + '/../client-dist'})
);

// Could do without this route now if desired
app.get('/ratio.json', (req, res) => {
  getRatioData().then(data => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  })
  .catch(err => {
    res.status(500).send(err);
  });
});

app.get('/ratio.html', (req, res) => {
  getRatioHtml().then(html => res.send(html))
  .catch(err => {
    res.status(500).send(err);
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/activitiesByDateRange', runkeeper);
app.get('/user/:userId/activity/:activityId', runkeeper);
app.get('/ajax/pointData', runkeeper);

function runkeeper(req, res) {
  request.get(`https://runkeeper.com${req.url}`).pipe(res);
}

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

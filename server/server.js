var express = require('express');
const request = require('request')
const cors = require('cors');
const app = express();


app.use(express.json({ strict: false }));
app.use(cors());

app.post('/translate', (req, res, next) => {
  console.log('');
});

app.get('/translate', function (req, res) {
    let api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    let client_id = '_J5K65eyavx8JdUT2y6L';
    let client_secret = 'ckCUTOh8cU';
    console.log("query: " + req.query.text);
    let options = {
      url: api_url,
      form: {
        source: req.query.source,
        target: req.query.target,
        text: req.query.text,
      },
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret,
      },
    };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  });
  
  app.use((error, req, res, next) => {
    if (error) {
      res.status(400).send('error');
    } else {
      res.status(500).send('sorry try later');
    }
  });
  
  app.listen(5000, function () {
    console.log('http://localhost:5000/translate app listening on port 5000!');
  });
  
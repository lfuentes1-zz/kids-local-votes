/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/api/attractions', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/attractions', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const attractions = JSON.parse(data);
    const newAttraction = {
      attractionId: req.body.attractionId,
      attractionName: req.body.attractionName,
      attractionDescription: req.body.attractionDescription,
      attractionUrl: req.body.attractionUrl,
      attractionImageUrl: req.body.attractionImageUrl,
      attractionVoteCount: 0,
      attractionLastVoteAvatarUrl: "public/images/avatars/neutral.png",
      attractionLastVoteName: "no votes yet",
    };
    attractions.push(newAttraction);
    fs.writeFile(DATA_FILE, JSON.stringify(attractions, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(attractions);
    });
  });
});

app.put('/api/attractions', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const attractions = JSON.parse(data);
    attractions.forEach((attraction) => {
      if (attraction.attractionId === req.body.attractionId) {
        attraction.attractionName = req.body.attractionName;
        attraction.attractionDescription = req.body.attractionDescription;
        attraction.attractionUrl = req.body.attractionUrl;
        attraction.attractionImageUrl = req.body.attractionImageUrl;
        attraction.attractionVoteCount = req.body.attractionVoteCount;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(attractions, null, 4), () => {
      res.json({});
    });
  });
});

app.delete('/api/attractions', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let attractions = JSON.parse(data);
    attractions = attractions.reduce((memo, attraction) => {
      if (attraction.attractionId === req.body.attractionId) {
        return memo;
      } else {
        return memo.concat(attraction);
      }
    }, []);
    fs.writeFile(DATA_FILE, JSON.stringify(attractions, null, 4), () => {
      res.json({});
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

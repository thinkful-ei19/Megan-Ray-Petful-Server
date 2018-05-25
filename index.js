'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

const cats = [
  {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street' 
  },
  {
  imageURL:'https://lh3.googleusercontent.com/aGFfr04fxrySBqOnIMfW6ibioA7lJs-Mu1S_2aJ9ionBywFvM_gei2r9hOEWQaJCMkByezdwuR3m3gw1vc2-3s1hFlQZDrg-SfVPE_9rCiz9j9TvknVFipRFZaXDl5gtNquEF6d4=w2400', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
  },
  {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
  }
];

const dogs = [
  {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
  },
  {
  imageURL:'https://lh3.googleusercontent.com/FY6jhC1EVK7THmrsNwQdNOsVyKYaDEvwOIL9WWagB17iTekclKIQhJGJ08KcyzUpKnvrcR93v4e6CDAV42ewpcZd8ru9lr-60Hznl3g8MEyJpypTBj-3tjwxrcgcoWoWkZTud4jx=w2400', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
  },
  {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
  }
];

app.get('/api/cat', (req, res) => {
  return res.json(cats);
});

app.get('/api/dog', (req, res) => {
  return res.json(dogs);
});

app.delete('/api/cat', (req, res) => {
  cats.shift();
  // res.json(cats[0]);
  return res.status(204).end();
});

app.delete('/api/dog', (req, res) => {
  dogs.shift();
  // res.json(dogs[0]);
  return res.status(204).end();
});


function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };

'use strict';

const express = require('express');
const router = express.Router();
const dogData = require('../db/dogs.json');
const {Dog, peek} = require('../queue/dogs-queue');


// GET ALL ITEMS
router.get('/dog', (req, res, next) => {
  res.json(peek(Dog));
});

// DELETE FIRST ITEM
router.delete('/dog', (req, res, next) => {
  Dog.dequeue();
  if(!Dog.head) {
    dogData.map(dog => Dog.enqueue(dog));
  }
  res.json(peek(Dog));
});

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const catData = require('../db/cats.json');
const {Cat, peek} = require('../queue/cats-queue');


// console.log(catData);
// GET ALL ITEMS
router.get('/cat', (req, res, next) => {
  res.json(peek(Cat));
});

// DELETE FIRST ITEM
router.delete('/cat', (req, res, next) => {
  Cat.dequeue();
  if(!Cat.first) {
    catData.map(cat => Cat.enqueue(cat));
  }
  res.json(peek(Cat));
});

module.exports = router;
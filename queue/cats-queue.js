'use strict';

const Queue = require('./queue-class');
const catData = require('../db/cats.json');

const Cat = new Queue();

catData.map(cat => Cat.enqueue(cat));

function peek(queue) {
  return queue.head.value;
}

module.exports = {Cat, peek};
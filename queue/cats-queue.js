'use strict';

const Queue = require('./queue-class');
const catData = require('../db/cats.json');

const Cat = new Queue();

catData.map(cat => Cat.enqueue(cat));

function peek(queue) {
  let currNode = queue.first;
  let displayQueue = currNode.value;
  return displayQueue;
}

module.exports = {Cat, peek};
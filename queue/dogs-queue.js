'use strict';

const Queue = require('./queue-class');
const dogData = require('../db/dogs.json');

const Dog = new Queue();

dogData.map(dog => Dog.enqueue(dog));

function peek(queue) {
  let currNode = queue.first;
  let displayQueue = currNode.value;
  return displayQueue;
};


module.exports = {Dog, peek};
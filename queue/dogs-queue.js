'use strict';

const Queue = require('./queue-class');
const dogData = require('../db/dogs.json');

const Dog = new Queue();

dogData.map(dog => Dog.enqueue(dog));

function peek(queue) {
  return queue.head.value;
};


module.exports = {Dog, peek};
#!/usr/bin/env node

const talk = require("../lib/talk");
const createTextBaloon = require("../utils/create-text-baloon");
const [_, __, ...restArgs] = process.argv;
const args = { animal: null, text: null }

for (let i = 0; i < restArgs.length; i++) {
  const el = restArgs[i];
  if (el.substring(0, 2) === '--') {
    args[el.replace('--', '')] = restArgs[i + 1]
  }
}

const { animal: argsAnimal, text } = args

const animals = Object.keys(talk)
const animal = argsAnimal || animals[Math.floor(Math.random() * animals.length)];
console.log(talk[animal](createTextBaloon(text)));

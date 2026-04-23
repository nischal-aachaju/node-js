const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });

const shortName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors],
  length: 2
});

console.log(randomName);
console.log(shortName);
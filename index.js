const casual = require('casual');

const city = casual.city;
console.log('City name: ' + city);

const randomNumber = casual.integer(from = 1, to = 10);
console.log('Random number: ' + randomNumber);

const fullName = `${casual.name_prefix} ${casual.first_name} ${casual.last_name}`;
console.log(fullName);
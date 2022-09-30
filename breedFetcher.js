const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("error: Breed name not found", null);
      return;
    }
    const desc = data[0].description;
    callback(null, desc);
  });
};

module.exports = {
  fetchBreedDescription
};
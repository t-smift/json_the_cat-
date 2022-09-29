const request = require('request');
const breed = process.argv[2];



request(`https://api.thecatap.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    if (error.code === "ENOTFOUND") {
      console.log("Error:", "Breed name not found");
      return;
    }
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  });

const request = require('request');

const search = "https://api.thecatapi.com/v1/breeds/search?q=";
const breedName = process.argv[2];
const URL = search + breedName;

request(URL, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Cat breed not found");
  } else {
    console.log(data[0].description);
  }
});
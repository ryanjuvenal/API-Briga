const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  headers: {
    'X-RapidAPI-Key': 'fda1dd862emsh66a48f8ff8aee31p1a9dc4jsncfcc25861035',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
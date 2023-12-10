const express = require('express');

const app = express();

app.get('/', (requeste, response) => {
  response.send('Hello, World!');
});

app.listen(3000, () => console.log('Server started at http://localholt:3000'));

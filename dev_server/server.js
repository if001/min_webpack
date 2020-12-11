const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(process.cwd()));

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

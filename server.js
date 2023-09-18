const express = require('express');
const app = express();
const path = require('path'); // Import the 'path' module to work with file paths
const port = 3001;

app.get('/', (req, res) => {
  // Use the 'path' module to construct the full path to the 'index.html' file
  const indexPath = path.join(__dirname, 'index.html');
  console.log(indexPath)
  
  // Send the 'index.html' file
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

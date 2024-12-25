const fs = require('fs');

function readFileCallback(err, data) {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data.toString());
  }
}

fs.readFile('example.txt', readFileCallback);

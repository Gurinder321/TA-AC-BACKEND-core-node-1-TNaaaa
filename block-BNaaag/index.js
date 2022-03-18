const fs = require('fs');

console.log('execute me first');

fs.readFile('./file.md', 'utf8', (err, content) => {
  console.log(content);
});

console.log('number 3');

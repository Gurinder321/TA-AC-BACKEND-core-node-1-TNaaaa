const { readFile, readFileSync } = require('fs');

readFile('./content.md', 'utf8', (err, content) => {
  console.log(content);
});

const results = readFileSync('./content.md', 'utf8');

console.log(results);

const buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');

console.log(buff1);

const os = require('os');

console.log('Welcome to Node.js');

const cpus = os.cpus().length;
const freeMem = os.freemem();
const uptime = os.uptime();

console.log(cpus, freeMem, uptime);

const buff1 = Buffer.alloc(12);
const buff2 = Buffer.allocUnsafe(12);

buff1.write('Hello, World!');
console.log(buff1);
console.log(buff1.toString());

const { readFile, readFileSync, unlink, readSync, read } = require('fs');

const sync = readFileSync('./app.js');

readFile('./app.js', (err, content) => {
  console.log(err, content.toString());
});

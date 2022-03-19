writeCode

Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?

Go to the folder where index.js is hosted. Run "node index.js"

Q. In above `index.js` file

- require os module
- write code to get `number of cpu's, free memory, uptime and version from os module`
- write code to require only readFile and unlink method from fs module.

const os = require('os')
os.cpus()
os.freemem()
os.uptime()
os.version()

Q. Create 2 files

1. area.js
2. app.js
3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

Q. Write 2 different methods for creating buffer in nodejs using Buffer class.

- create a fixed length buffer of 12.
  var ubuf = Buffer.alloc(12);
- write code to convert buffer back to string.
  rbuf = new Buffer(26);
  var j;

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
rbuf[j] = i ;
}

console.log( rbuf.toString('ascii'));

Q. Write code example to demonstrate blocking and non-blocking code.

blocking
console.log('Welcome to Node.js');

function sum(a, b) {
return a + b;
}

console.log(sum(2, 3));

for (let i = 0; i < 10000; i++) {
console.log(i);
}

console.log("Hello, World!")
non-blocking

console.log('Welcome to Node.js');

function sum(a, b) {
return a + b;
}

console.log(sum(2, 3));
setTimeout(() => {
console.log('Hello, World!!!!!!!!!!!!!!!!')
})

console.log("Hello, World!")

#### http protocol

Q. In server.js

1. require parse method from url core node module.
2. parse `https://airindia.com/fares/calculate?from=delhi&to=detroit`and store parsed value in varaible named parsedUrl.
3. console query string from parsed url
4. console pathname
5. console protocol
6. use parse method from url module to parse query string as well.

var url = require("url");
const parsedUrl = url.parse(
"https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
true
);
console.log(parsedUrl);
console.log(parsedUrl.query, parsedUrl.pathname, parsedUrl.protocol, ??);

const { writeFile, readFile } = require('./file-storage.service');

const fileName = 'some-file.txt';

writeFile(fileName, 'This is my text');

const text = readFile(fileName);

console.log(text);

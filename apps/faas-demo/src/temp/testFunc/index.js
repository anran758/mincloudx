'use strict';
const { sayHi } = require('@mincloud/io');
const path = require('path');
const rootPath = path.resolve(__dirname);

console.log('rootPath', rootPath);

sayHi();

export default function main1(event, callback) {
  console.log(`export default trigger`);
  callback(null, 'hello !');
}

// module.exports = function main11(event, callback) {
//   console.log('module.exports!!')
//   callback(null, 'hello !');
// }

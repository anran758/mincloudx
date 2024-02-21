import path from 'path';
import { sayHi } from '@mincloudx/io';

import { NAME } from '@/config';

const rootPath = path.resolve(__dirname);

console.log('rootPath -->', rootPath);
console.log('NAME -->', NAME);

sayHi();

export default function main1(event, callback) {
  console.log(`export default trigger`);
  callback(null, 'hello !');
}

import { NAME_MAP } from '@/config';

console.log('NAME_MAP -->', NAME_MAP);

export default function main(event, callback) {
  callback(null, 'hello !');
}

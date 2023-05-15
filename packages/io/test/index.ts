// TODO: 临时测试用
import Client from '../src/index';

console.log('Client:', Client);

// 应用实例化
const app = new Client();
console.log('app:', app);

// 实例化 DB
const db = app.db();
console.log('db:', db);

// 获取数据表
const collection = db.collection('channel');
console.log('collection:', collection);

// 获取数据行引用
const row = collection.doc('6150680286b5502fba1221ea');
console.log('row:', row);

// 获取数据
row.get().then(res => console.log('row response, no options:', res));
row
  .get({ parseRes: false })
  .then(res => console.log('row response, close parseRes:', res));

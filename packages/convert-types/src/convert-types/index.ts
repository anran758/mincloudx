import path from 'path';

import { generatorSchemaTs } from './template/template';

async function main() {
  await generatorSchemaTs({
    input: path.resolve(__dirname, '../../_schema.json'),
    output: path.resolve(__dirname, '../../dist/types/schema'),
  });
}

// TODO: 临时方案，调用即生成
main();

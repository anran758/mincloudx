import { createFaas } from '@mincloudx/faas';
import io from '@/io';

import { getCurrentDate } from '@/utils';

function generatorMockData() {
  const rawData = {
    name: `新书本-${getCurrentDate()}`,
    cover:
      'https://cloud-minapp-47549.cloud.ifanrusercontent.com/1rmlh9degSiaF4ua.jpg',
  };

  return Array(6)
    .fill(0)
    .map((_, i) => {
      return {
        ...rawData,
        name: `${rawData.name}_${i}`,
      };
    });
}
export default createFaas(async function main() {
  const list = generatorMockData();

  const {
    operation_result: result,
    succeed,
    total_count,
  } = await io.product.createMany(list);

  console.log('result:', result);
  console.log('succeed: ', succeed);
  console.log('total: ', total_count);

  return result;
});

import { createFaas } from '@mincloudx/faas';
import io from '@/io';

export default createFaas(async function main() {
  const result = await io.product.deleteMany(io.query, {
    limit: 2,
  });
  console.log(
    'result: ',
    result.succeed,
    result.offset,
    result.limit,
    result.next,
  );

  return result;
});

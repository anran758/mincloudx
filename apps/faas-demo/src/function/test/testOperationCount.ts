import { createFaas } from '@mincloudx/faas';
import io from '@/io';

export default createFaas(async function main() {
  const query = io.getQuery({
    description: 'This is description.',
  });
  const count = await io.product.count(query);

  console.log('count: ', count);

  return { count };
});

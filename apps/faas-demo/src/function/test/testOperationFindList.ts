import { createFaas } from '@mincloudx/faas';
import io from '@/io';

export default createFaas(async function main() {
  const query = io.getQuery({
    description: 'This is description.',
  });
  const result = await io.product.find(query, {
    select: ['id', 'name', 'description'],
    plain: true,
  });

  return result;
});

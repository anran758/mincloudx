import { createFaas } from '@mincloudx/faas';
import io from '@/io';

export default createFaas(async function main() {
  const list = await io.product.updateMany({
    query: io.getQuery({
      created_at: 1711691446,
    }),
    data: {
      description: `update date: ${new Date()}`,
    },
  });

  console.log('result:', list);

  return list;
});

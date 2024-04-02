import { createFaas } from '@mincloudx/faas';
import io from '@/io';

export default createFaas(async function main() {
  const query = io.getQuery({
    description: 'This is description.',
  });
  const record = await io.product.first<
    {
      description: string;
      id: string;
      name: string;
    },
    false
  >(query, {
    plain: false,
    select: ['description', 'id', 'name'],
  });
  // const record = await io.product.first(query);

  console.log('record: ', record.data);

  return record;
});

import { createFaas } from '@mincloudx/faas';
import io from '@/io';

interface EventParams {
  data: {
    name: string;
    cover: string;
  };
}

export default createFaas<EventParams>(async function main(event) {
  const { data } = event.data;

  const record = await io.channel.create(data);
  console.log('create result:', record);

  const updatedResult = await io.channel.update(record.id, {
    data: {
      description: 'This is description.',
    },
  });
  console.log('updated result:', updatedResult);

  const channel = await io.channel.get(record.id, {
    select: ['id', 'name', 'cover', 'description'],
  });
  console.log('get result:', channel);

  return channel;
});

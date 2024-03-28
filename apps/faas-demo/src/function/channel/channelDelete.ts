import { createFaas } from '@mincloudx/faas';
import io from '@/io';

interface EventParams {
  id: string;
}

export default createFaas<EventParams>(async function main(event) {
  const { id } = event.data;
  const result = await io.channel.delete(id);

  // const query = io.getQuery({ id });
  // const result = await io.channel.delete(query);
  console.log('delete result:', result);

  return result;
});

import { createFaas } from '@mincloudx/faas';

export default createFaas(async function main(event) {
  console.log(`event:`, event);

  return { status: 'ok' };
});

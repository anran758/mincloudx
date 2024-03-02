const { createFaas } = require('..');

test('create faas', async () => {
  const data = await createFaas();
  expect(data).toBe('Hi, cloud function!');
});

const { createFaas } = require('..');

// Mock global BaaS
global.BaaS = {
  VERSION: 'v2.0',
  useVersion(version) {
    this.VERSION = version;
  },
};

describe('createFaas Functionality', () => {
  describe('Default Parameters Handling', () => {
    it('transforms event.data from null to an empty object if no event data is passed', async () => {
      const fn = await createFaas(event => {
        expect(event.data).toEqual({});
      });

      await fn({}); // Passing an empty event object
    });
  });

  describe('Unified Return Format', () => {
    it('wraps non-object return values from the user-defined function in {data: value}', async () => {
      const returnValue = 'Test String';
      const fn = await createFaas(() => returnValue);

      const response = await fn({});
      expect(response).toEqual({ data: returnValue });
    });
  });
});

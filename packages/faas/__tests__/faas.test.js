const { createFaas, FAAS_LATEST_SDK_VERSION } = require('..');

// Mock global BaaS
const SKD_VERSION = 'v2.0';
global.BaaS = {
  VERSION: SKD_VERSION,
  useVersion(version) {
    BaaS.VERSION = version;
  },
};

function defaultUserDefinedFunction() {
  return { status: 'ok' };
}

describe('createFaas Functionality', () => {
  describe('Default Parameters Handling', () => {
    it('transforms event.data from null to an empty object if no event data is passed', async () => {
      const userDefinedFunction = createFaas(event => {
        expect(event.data).toEqual({});
      });

      await userDefinedFunction({}); // Passing an empty event object
    });
  });

  describe('Unified Return Format', () => {
    it('wraps non-object return values from the user-defined function in {data: value}', async () => {
      const returnValue = 'Test String';
      const exceptResponse = { data: returnValue };
      const userDefinedFunction = createFaas(() => returnValue);

      const response = await userDefinedFunction({});
      expect(response).toEqual(exceptResponse);
    });

    it('returns the object as-is if the return value from the user-defined function is an object', async () => {
      const returnValue = { key: 'value' };
      const userDefinedFunction = createFaas(() => returnValue);

      const response = await userDefinedFunction({});
      expect(response).toEqual(returnValue);
    });
  });

  describe('BaaS SDK version', () => {
    // reset to original version before each test to prevent tests from affecting each other
    beforeEach(() => {
      BaaS.VERSION = SKD_VERSION;
    });

    it('default to using latest SDK version', async () => {
      const userDefinedFunction = createFaas(defaultUserDefinedFunction);
      await userDefinedFunction({});
      expect(BaaS.VERSION).toEqual(FAAS_LATEST_SDK_VERSION);
    });

    // Ensure the version is updated to the latest by default
    it('updates to the latest SDK version by default', async () => {
      const userDefinedFunction = createFaas(defaultUserDefinedFunction, {
        updateVersion: true,
      });
      await userDefinedFunction({});
      expect(BaaS.VERSION).toEqual(FAAS_LATEST_SDK_VERSION);
    });

    // Keep the default version when updateVersion is explicitly set to false
    it('remains at the default SDK version when updateVersion is explicitly set to false', async () => {
      const userDefinedFunction = createFaas(defaultUserDefinedFunction, {
        updateVersion: false,
      });
      await userDefinedFunction({});
      expect(BaaS.VERSION).toEqual(SKD_VERSION); // Assuming originalVersion is the default version
    });

    // Allow setting BaaS.VERSION to a specified version
    it('sets SDK to the specified version', async () => {
      const specifiedVersion = 'v3.0';
      const userDefinedFunction = createFaas(defaultUserDefinedFunction, {
        version: specifiedVersion,
      });
      await userDefinedFunction({});
      expect(BaaS.VERSION).toEqual(specifiedVersion);
    });
  });
});

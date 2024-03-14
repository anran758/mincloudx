const SKD_VERSION = 'v2.0';
global.BaaS = {
  VERSION: SKD_VERSION,
  useVersion(version) {
    BaaS.VERSION = version;
  },
};

const loadUserFunction = fileName => {
  const { main } = require(`./dist/${fileName}.js`);
  return main;
};

const main = loadUserFunction(process.argv[process.argv.length - 1]);
main();

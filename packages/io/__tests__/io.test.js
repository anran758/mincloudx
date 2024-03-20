// 引入所需模块和初始化代码
require('../tool/baas-init');
const { createIo } = require('..');
const TABLE_OPERATION_KEYS = ['create', 'get', 'update', 'delete'];

describe('createIo Functionality', () => {
  it('register table to io', async () => {
    const tables = ['channel', 'product'];
    const io = createIo({ tables });

    expect(io).toHaveProperty('channel');
    TABLE_OPERATION_KEYS.forEach(key => {
      expect(io.channel).toHaveProperty(key);
    });
  });

  it('io.channel read table property should return an instance of BaaS.TableObject', () => {
    const tables = ['channel'];
    const io = createIo({ tables });

    expect(io.channel).toBeDefined();
    expect(io.channel.table).toBeDefined();
    expect(io.channel.table._tableID).toEqual('channel');
  });
});

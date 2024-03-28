// 引入所需模块和初始化代码
require('../tool/baas-init');
const { createIo } = require('..');
const TABLE_OPERATION_KEYS = ['create', 'get', 'update', 'delete'];

describe('createIo functionality', () => {
  it('register table to io', async () => {
    const tables = ['channel', 'product'];
    const io = createIo({ tables });

    expect(io).toHaveProperty('channel');
    TABLE_OPERATION_KEYS.forEach(key => {
      expect(io.channel).toHaveProperty(key);
    });
  });
});

describe('IO operations defined correctly after table registration', () => {
  let io;
  let tables;

  // init
  beforeEach(() => {
    tables = ['channel'];
    io = createIo({ tables });
  });

  it('read table property should return an instance of BaaS.TableObject', () => {
    expect(io.channel).toBeDefined();
    expect(io.channel.table).toBeDefined();
    expect(io.channel.table._tableID).toEqual('channel');
  });

  it('create method should be defined and be a function', () => {
    expect(io.channel.create).toBeDefined();
    expect(typeof io.channel.create).toBe('function');
  });

  it('get method should be defined and be a function', () => {
    expect(io.channel.get).toBeDefined();
    expect(typeof io.channel.get).toBe('function');
  });

  it('update method should be defined and be a function', () => {
    expect(io.channel.update).toBeDefined();
    expect(typeof io.channel.update).toBe('function');
  });

  it('delete method should be defined and be a function', () => {
    expect(io.channel.delete).toBeDefined();
    expect(typeof io.channel.delete).toBe('function');
  });

  it('find method should be defined and be a function', () => {
    expect(io.channel.find).toBeDefined();
    expect(typeof io.channel.find).toBe('function');
  });
});

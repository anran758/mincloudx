// 引入所需模块和初始化代码
require('../tool/baas-init');
const { createIo } = require('..');
const TABLE_OPERATION_KEYS = ['create', 'get', 'update', 'delete'];

describe('createIo functionality', () => {
  it('register table to io', async () => {
    const tables = ['product', 'channel'];
    const io = createIo({ tables });

    tables.forEach(key => expect(io).toHaveProperty(key));
    TABLE_OPERATION_KEYS.forEach(key => {
      expect(io.product).toHaveProperty(key);
    });
  });
});

describe('IO operations defined correctly after table registration', () => {
  const tables = ['product'];
  let io;

  beforeEach(() => {
    io = createIo({ tables });
  });

  it('read table property should return an instance of BaaS.TableObject', () => {
    expect(io.product).toBeDefined();
    expect(io.product.table).toBeDefined();
    expect(io.product.table._tableID).toEqual('product');
  });

  it('`create` method should be defined and be a function', () => {
    expect(io.product.create).toBeDefined();
    expect(typeof io.product.create).toBe('function');
  });

  it('`get` method should be defined and be a function', () => {
    expect(io.product.get).toBeDefined();
    expect(typeof io.product.get).toBe('function');
  });

  it('`update` method should be defined and be a function', () => {
    expect(io.product.update).toBeDefined();
    expect(typeof io.product.update).toBe('function');
  });

  it('`delete` method should be defined and be a function', () => {
    expect(io.product.delete).toBeDefined();
    expect(typeof io.product.delete).toBe('function');
  });

  it('`find` method should be defined and be a function', () => {
    expect(io.product.find).toBeDefined();
    expect(typeof io.product.find).toBe('function');
  });

  it('`count` method should be defined and be a function', () => {
    expect(io.product.count).toBeDefined();
    expect(typeof io.product.count).toBe('function');
  });

  it('`createMany` method should be defined and be a function', () => {
    expect(io.product.createMany).toBeDefined();
    expect(typeof io.product.createMany).toBe('function');
  });
});

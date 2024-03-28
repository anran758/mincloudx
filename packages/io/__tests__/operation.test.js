// 引入所需模块和初始化代码
require('../tool/baas-init');
const { createIo } = require('..');

describe('Mocking CRUD Operations in TableObject', () => {
  const tables = ['product'];
  let io;

  beforeEach(() => {
    io = createIo({ tables });

    io.product.create = jest
      .fn()
      .mockResolvedValue({ id: '1', name: 'Test product' });
    io.product.get = jest.fn().mockResolvedValue({
      id: '1',
      name: 'Test product',
      description: 'A product for testing',
    });
    io.product.update = jest.fn().mockResolvedValue({
      id: '1',
      name: 'Test product Updated',
      description: 'Updated description',
    });
    io.product.delete = jest.fn().mockResolvedValue(true);
    io.product.find = jest.fn().mockResolvedValue({
      meta: { limit: 20, next: null, offset: 0, previous: null },
      objects: [
        { id: 1, description: 'This is description.' },
        { id: 2, description: 'This is description.' },
      ],
    });

    io.product.count = jest.fn().mockResolvedValue(5);
  });

  it('should correctly call and mock `create` method', async () => {
    const productData = { name: 'Test Product' };
    const result = await io.product.create(productData);

    expect(io.product.create).toHaveBeenCalledWith(productData);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name', 'Test Product');
  });

  it('should correctly call and mock `get` method', async () => {
    const productId = '1';
    const result = await io.product.get(productId);

    expect(io.product.get).toHaveBeenCalledWith(productId);
    expect(result).toHaveProperty('id', productId);
    expect(result).toHaveProperty('name', 'Test Product');
    expect(result).toHaveProperty('description');
  });

  it('should correctly call and mock `find` method', async () => {
    const query = io.getQuery({
      description: 'This is description.',
    });
    const result = await io.product.find(query, {
      select: ['id', 'description'],
    });

    // 验证返回的结果是否符合预期
    expect(result).toEqual({
      meta: { limit: 20, next: null, offset: 0, previous: null },
      objects: [
        { id: 1, description: 'This is description.' },
        { id: 2, description: 'This is description.' },
      ],
    });
  });

  it('should correctly call and mock `update` method', async () => {
    const productId = '1';
    const updateData = { description: 'Updated description' };
    const result = await io.product.update(productId, updateData);

    expect(io.product.update).toHaveBeenCalledWith(productId, updateData);
    expect(result).toHaveProperty('description', 'Updated description');
  });

  it('should correctly call and mock `delete` method', async () => {
    const productId = '1';
    const result = await io.product.delete(productId);

    expect(io.product.delete).toHaveBeenCalledWith(productId);
    expect(result).toBe(true);
  });

  it('should correctly call and mock `count` method', async () => {
    const query = { description: 'This is description.' };

    // 调用 count 方法
    const countResult = await io.product.count(query);

    // 验证 count 方法是否被以正确的参数调用
    expect(io.product.count).toHaveBeenCalledWith(query);

    // 验证返回的计数值是否符合预期
    expect(countResult).toBe(5);
  });
});

describe('Mocking `createMany` method in TableObject', () => {
  const tables = ['product'];
  const dataList = [
    { name: 'Product 1', value: 100 },
    { name: 'Product 2', value: 200 },
    { name: 'Product 3', value: 300 },
  ];
  const expectData = {
    operation_result: [
      { success: { id: 1, name: 'Product 1', value: 100 } },
      { success: { id: 2, name: 'Product 2', value: 200 } },
      { success: { id: 3, name: 'Product 3', value: 300 } },
    ],
    succeed: dataList.length,
    total_count: dataList.length,
  };
  let io;

  beforeEach(() => {
    io = createIo({ tables });

    io.product.createMany = jest
      .fn()
      .mockImplementation((dataList, { plain = true } = {}) => {
        const createdList = dataList.map((item, index) => {
          return { success: { ...item, id: index + 1 } };
        });
        const result = {
          operation_result: createdList,
          succeed: createdList.length,
          total_count: createdList.length,
        };

        return Promise.resolve(
          plain
            ? result
            : {
                status: 200,
                statusText: 'OK',
                headers: {},
                data: result,
              },
        );
      });
  });

  it('should correctly call and mock `createMany` method, when plain is default', async () => {
    const result = await io.product.createMany(dataList);

    // 验证 createMany 方法是否以默认参数调用
    expect(io.product.createMany).toHaveBeenCalledWith(dataList);
    expect(result).toEqual(expectData);
  });

  it('should correctly call and mock `createMany` method, when plain is true', async () => {
    const result = await io.product.createMany(dataList, { plain: true });

    expect(io.product.createMany).toHaveBeenCalledWith(dataList, {
      plain: true,
    });
    expect(result).toEqual(expectData);
  });

  it('should correctly call and mock `createMany` method, when plain is false', async () => {
    // 调用方法
    const result = await io.product.createMany(dataList, { plain: false });

    expect(io.product.createMany).toHaveBeenCalledWith(dataList, {
      plain: false,
    });
    expect(result).toEqual({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: expectData,
    });
  });
});

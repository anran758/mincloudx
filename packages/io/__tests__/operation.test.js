// 引入所需模块和初始化代码
require('../tool/baas-init');
const { createIo } = require('..');

describe('Mocking CRUD Operations in TableObject', () => {
  const tables = ['channel'];
  let io;

  beforeEach(() => {
    io = createIo({ tables });

    io.channel.create = jest
      .fn()
      .mockResolvedValue({ id: '1', name: 'Test Channel' });
    io.channel.get = jest.fn().mockResolvedValue({
      id: '1',
      name: 'Test Channel',
      description: 'A channel for testing',
    });
    io.channel.update = jest.fn().mockResolvedValue({
      id: '1',
      name: 'Test Channel Updated',
      description: 'Updated description',
    });
    io.channel.delete = jest.fn().mockResolvedValue(true);
    io.channel.find = jest.fn().mockResolvedValue({
      meta: { limit: 20, next: null, offset: 0, previous: null },
      objects: [
        { id: 1, description: 'This is description.' },
        { id: 2, description: 'This is description.' },
      ],
    });

    io.channel.count = jest.fn().mockResolvedValue(5);
  });

  it('should correctly call and mock `create` method', async () => {
    const channelData = { name: 'Test Channel' };
    const result = await io.channel.create(channelData);

    expect(io.channel.create).toHaveBeenCalledWith(channelData);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name', 'Test Channel');
  });

  it('should correctly call and mock `get` method', async () => {
    const channelId = '1';
    const result = await io.channel.get(channelId);

    expect(io.channel.get).toHaveBeenCalledWith(channelId);
    expect(result).toHaveProperty('id', channelId);
    expect(result).toHaveProperty('name', 'Test Channel');
    expect(result).toHaveProperty('description');
  });

  it('should correctly call and mock `find` method', async () => {
    const query = io.getQuery({
      description: 'This is description.',
    });
    const result = await io.channel.find(query, {
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
    const channelId = '1';
    const updateData = { description: 'Updated description' };
    const result = await io.channel.update(channelId, updateData);

    expect(io.channel.update).toHaveBeenCalledWith(channelId, updateData);
    expect(result).toHaveProperty('description', 'Updated description');
  });

  it('should correctly call and mock `delete` method', async () => {
    const channelId = '1';
    const result = await io.channel.delete(channelId);

    expect(io.channel.delete).toHaveBeenCalledWith(channelId);
    expect(result).toBe(true);
  });

  it('should correctly call and mock `count` method', async () => {
    const query = { description: 'This is description.' };

    // 调用 count 方法
    const countResult = await io.channel.count(query);

    // 验证 count 方法是否被以正确的参数调用
    expect(io.channel.count).toHaveBeenCalledWith(query);

    // 验证返回的计数值是否符合预期
    expect(countResult).toBe(5);
  });
});

describe('Mocking `createMany` method in TableObject', () => {
  let io;
  let tables;
  // 共享测试数据
  const dataList = [
    { name: 'Test Object 1', value: 100 },
    { name: 'Test Object 2', value: 200 },
    { name: 'Test Object 3', value: 300 },
  ];
  const expectData = {
    operation_result: [
      { success: { id: 1, name: 'Test Object 1', value: 100 } },
      { success: { id: 2, name: 'Test Object 2', value: 200 } },
      { success: { id: 3, name: 'Test Object 3', value: 300 } },
    ],
    succeed: dataList.length,
    total_count: dataList.length,
  };

  beforeEach(() => {
    tables = ['channel'];
    io = createIo({ tables });

    io.channel.createMany = jest
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
    const result = await io.channel.createMany(dataList);

    // 验证 createMany 方法是否以默认参数调用
    expect(io.channel.createMany).toHaveBeenCalledWith(dataList);
    expect(result).toEqual(expectData);
  });

  it('should correctly call and mock `createMany` method, when plain is true', async () => {
    const result = await io.channel.createMany(dataList, { plain: true });

    expect(io.channel.createMany).toHaveBeenCalledWith(dataList, {
      plain: true,
    });
    expect(result).toEqual(expectData);
  });

  it('should correctly call and mock `createMany` method, when plain is false', async () => {
    // 调用方法
    const result = await io.channel.createMany(dataList, { plain: false });

    expect(io.channel.createMany).toHaveBeenCalledWith(dataList, {
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

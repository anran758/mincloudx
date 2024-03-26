// 引入所需模块和初始化代码
require('../tool/baas-init');
const { createIo } = require('..');

describe('CRUD Operations Defined Correctly After Table Registration', () => {
  let io;
  let tables;

  // init
  beforeEach(() => {
    tables = ['channel'];
    io = createIo({ tables });
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

describe('Mocking CRUD Operations in io.channel After Table Registration', () => {
  let io;
  let tables;

  beforeEach(() => {
    tables = ['channel'];
    io = createIo({ tables });

    // 设置模拟函数
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

  it('should correctly call and mock io.channel.create', async () => {
    const channelData = { name: 'Test Channel' };
    const result = await io.channel.create(channelData);

    expect(io.channel.create).toHaveBeenCalledWith(channelData);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name', 'Test Channel');
  });

  it('should correctly call and mock io.channel.get', async () => {
    const channelId = '1';
    const result = await io.channel.get(channelId);

    expect(io.channel.get).toHaveBeenCalledWith(channelId);
    expect(result).toHaveProperty('id', channelId);
    expect(result).toHaveProperty('name', 'Test Channel');
    expect(result).toHaveProperty('description');
  });

  it('should correctly call and mock io.channel.find', async () => {
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

  it('should correctly call and mock io.channel.update', async () => {
    const channelId = '1';
    const updateData = { description: 'Updated description' };
    const result = await io.channel.update(channelId, updateData);

    expect(io.channel.update).toHaveBeenCalledWith(channelId, updateData);
    expect(result).toHaveProperty('description', 'Updated description');
  });

  it('should correctly call and mock io.channel.delete', async () => {
    const channelId = '1';
    const result = await io.channel.delete(channelId);

    expect(io.channel.delete).toHaveBeenCalledWith(channelId);
    expect(result).toBe(true);
  });

  it('should correctly call and mock .count with a given query', async () => {
    const query = { description: 'This is description.' };

    // 调用 count 方法
    const countResult = await io.channel.count(query);

    // 验证 count 方法是否被以正确的参数调用
    expect(io.channel.count).toHaveBeenCalledWith(query);

    // 验证返回的计数值是否符合预期
    expect(countResult).toBe(5);
  });
});

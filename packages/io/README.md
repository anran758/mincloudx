# @mincloudx/io

The `@mincloudx/io` package simplifies CRUD (Create, Read, Update, Delete) operations on database tables, offering a streamlined interface for table management with minimal setup.

## Installation

Install `@mincloudx/io` in your project using npm or pnpm:

```bash
npm install @mincloudx/io
# or
pnpm add @mincloudx/io
```

## Usage

Begin by importing `createIo` and specifying your tables in the `tables` option to register them. This setup enables CRUD operations on the registered tables.

```javascript
const { createIo } = require('@mincloudx/io');

// Registering tables
const tables = ['channel', 'product'];
const io = createIo({ tables });
```

Access a registered table by appending its name to `io`, such as `io.channel` or `io.product`.

### query

In batch lookup, update, delete, and other operations, the Query object is needed. It is used to describe the characteristics of the data rows that need to be matched.

We can generate and obtain an instance of a `Query` object by reading `io.query`.

```ts
const query = io.product.query;
query.compare('name', '=', 'book');
```

In most cases of query requests, many scenarios involve comparing values to see if they match. `io.getQuery` supports a more convenient way to generate a Query instance. The example code below is equivalent to the one above:

```ts
const query = io.getQuery({ name: 'book' });
```

### create record

create a record:

```ts
const product = await io.product.create({ name: 'New product' });
```

create many record:

```ts
const dataList = [
  { name: 'Product 1', value: 100 },
  { name: 'Product 2', value: 200 },
  { name: 'Product 3', value: 300 },
];

const { operation_result } = await io.product.createMany(dataList);
console.log('result: ', operation_result);

// or
const result = await io.product.createMany(dataList, { plain: false });
console.log('result: ', result.data.operation_result);
```

### update record

```ts
const product = await io.product.update('productId', { name: 'product 2' });
```

### read record

fetch record:

```ts
const product = await io.product.get('recordId');
```

fetch list:

```ts
const query = io.query.compare('deleted', '=', false);
const list = await io.channel.find(query, { offset: 0, limit: 20 });
```

### delete record

delete a record:

```ts
const result = await io.channel.delete('recordId', { offset: 0, limit: 20 });
```

delete many record

```ts
const query = io.query.compare('deleted', '=', true);
const result = await io.channel.deleteMany(query, { offset: 0, limit: 20 });
```

### count

fetch record count:

```ts
const query = io.getQuery({ deleted: false });
const count = await io.channel.deleteMany(query);
```

## Development

```bash
# local develop
pnpm watch

# build package
pnpm build

# run test case
pnpm test
```

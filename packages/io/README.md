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

### Performing CRUD Operations

Registered tables come with CRUD operation support: `create`, `get`, `update`, and `delete`.

create record:

```ts
// create a record.
const product = await io.product.create({ name: 'New product' });

// create many record.
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

update record:

```ts
const product = await io.product.update('productId', { name: 'product 2' });
```

fetch data:

```ts
const product = await io.product.get('recordId');

// or fetch list
const query = io.query.compare('deleted', '=', false);
const list = await io.channel.find(query, { offset: 0, limit: 20 });
```

delete record:

```ts
const query = io.query.compare('deleted', '=', true);
await io.channel.deleteMany(query, { offset: 0, limit: 20 });
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

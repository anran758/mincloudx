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

```javascript
// Create a new record
const newChannel = await io.channel.create({ name: 'New Channel' });

// Retrieve a record by its ID
const channel = await io.channel.get('recordId');

// Update a record by its ID
const updatedChannel = await io.channel.update('recordId', {
  name: 'Updated Name',
});

// Delete a record by its ID
await io.channel.delete('recordId');

// Delete multiple records based on a query
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

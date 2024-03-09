# @mincloudx/types

![Version](https://badgen.net/npm/v/@mincloudx/types)
![TypeScript](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

Common TypeScript types in MinCloud.

## Usage

```bash
pnpm install @mincloudx/types

# or use npm
npm install @mincloudx/types
```

When we need to import the corresponding types, we can do so through the import statement:

```ts
import type { FaaS } from '@mincloudx/types';

interface EventData {
  productId: string;
  name?: string;
}

export default async function userDefinedFunctionProxy(
  evt: FaaS.Event<EventData>,
) {
  const { productId, name = 'mincloudx' } = evt.data;

  return `${name}_${productId}`;
}
```

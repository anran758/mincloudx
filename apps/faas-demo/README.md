# @mincloudx/faas-demo

**命令**

```bash
# 编译源码
pnpm build

# 部署云函数
pnpm deploy
```

**目录结构**

```bash
.
├── _schema.json                // [可选] 数据表结构，可从知晓云中下载到本地，也可以直接通过 mincloudx login 后获取
├── src                         // 项目源码
│   ├── config                  // 配置信息
│   │   └── index.js
│   └── function                // 云函数源码
│       ├── createProduct.js    // 云函数 A
│       └── user                // 分类文件夹
│           └── createUser.js   // 云函数 B
├── tsconfig.json
└── typings                     // TypeScript 类型
    └── schema.d.ts             // 通过 cli 生成的数据表类型
```

`src` 的源码应该直接使用 `ESModule` 语法，当 cli 构建源码时能对源码进行 `Tree Shaking`.

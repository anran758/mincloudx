# @mincloudx/cli

[![npm version](https://badge.fury.io/js/@mincloudx%2Fcli.svg)](https://www.npmjs.com/package/@mincloudx/cli)
[![GitHub](https://img.shields.io/github/license/anran758/mincloudx)](https://github.com/anran758/mincloudx/blob/master/LICENSE)

基于知晓云生态的命令行工具，旨在提供一种简单、快捷的方式，帮助开发者快速处理知晓云相关的业务。

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
  - [login](#login)
  - [type](#type)
  - [faas](#faas)
    - [build](#build)
    - [deploy](#deploy)
  - [help](#help)
- [Development](#development)

## Installation

可以通过 yarn 或 npm 安装：

```bash
# 通过 yarn 安装
yarn add @mincloudx/cli -D

# 通过 npm 安装
npm install @mincloudx/cli -D
```

## Usage

```bash
mincloudx [command] [options]
```

| Commands        | Description                   |
| --------------- | ----------------------------- |
| [login](#login) | 登录知晓云                    |
| [type](#type)   | 将知晓云数据表转换 TypeScript |
| [help](#help)   | 输出命令的帮助信息。          |

**Global Options:**

- `-V, --version`：输出版本号
- `--env-id <envId>`：设置环境 ID
- `-h, --help`：输出帮助信息

## Commands

### login

登录知晓云。

```bash
mincloudx login [options] <clientSecret> [clientId]
```

**Parameter:**

- `clientSecret`: 知晓云应用的密钥。
- `clientId`: 知晓云应用的 clint_id，默认从 rc 文件中读取。

**Example:**

```bash
mincloudx login clientSecret clientId
```

当 `mincloudx` 的命令中需要与知晓云应用交互时将优先读取 `.mincloudxrc` 配置文件中的 `client_id`。若项目目录或本地缓存中没有读取到，将会从知晓云官方提供的 `.mincloudrc` 中的 `client_id` 环境变量。

因此，若你不希望在项目中创建太多 `rc` 配置文件，也可以直接使用 `.mincloudrc` 配置，`mincloudx` 不会污染 `.mincloudrc` 的配置信息。

### type

`type` 命令用于将知晓云数据表转换为 TypeScript 的 `.d.ts` 类型文件。

```bash
mincloudx type [options]
```

**选项**:

| 选项              | 描述                                        | 默认值             |
| ----------------- | ------------------------------------------- | ------------------ |
| `--pull`          | 读取线上的知晓云数据表信息来转换类型文件    | `false`            |
| `-f, --transform` | 解析本地的 JSON 数据表文件来转换 TypeScript | `"./_schema.json"` |
| `--output-path`   | 类型文件的输出目录                          | `"./typings"`      |
| `--output-file`   | 类型文件的文件名                            | `"schema"`         |

---

**转换方式**:

**1. 在线转换**:

登录知晓云账号后，直接读取线上最新的数据表记录来转换。

```bash
mincloudx type --pull
```

**2. 本地转换**:

若顾虑应用密匙泄露的安全性等因素也可以直接读取本地的 schema JSON 文件来转换。

方法：进入知晓云控制面板，打开浏览器开发者工具，在网络面板找到 `dserve/v1.8/schema/?offset=0&
limit=200` 请求，并将响应保存为 `_schema.json` 文件，放在与 `package.json` 同级目录中。

![copy response](./static/network-save-response.png)

```bash
mincloudx type --transform ./_schema.json
```

**注意**:

生成的类型文件可能会引用知晓云官方的全局命名空间。在使用前，请确保将 `minapp-sdk-typings` 添加到 `tsconfig.json` 的 `compilerOptions.types` 中。

### faas

`faas` 命令为云函数环境下提供相应的帮助。

目前常规的云函数的项目结构如下：

```bash
.
├── package.json
├── src
│   ├── config                    // 项目常量或配置项
│   │   └── index.js
│   └── function                  // 云函数源码文件
│       ├── updateProduct.ts        // 云函数 A
│       └── user                    // 云函数分类
│           └── createUser.js         // 云函数 B
└── ...
```

`faas` 命令将按照项目结构的约束对项目中常见的操作做封装。

#### build

构建云函数源码。`faas build` 将通过 webpack 对源码进行打包压缩。

构建云函数源码：

```bash
# 默认打包 ./src/function 目录下云函数文件，默认输出到 ./dist 目录下
mincloudx faas build
```

可以通过传参的方式来修改输入/输出路径的默认值：

```bash
mincloudx faas build --entry-path ./src -o ./dist
```

#### deploy

部署云函数。默认情况下，云函数编译后的代码都会放在 `./dist` 目录下，因此 `faas deploy` 默认从 `./dist` 目录中部署全部云函数文件：

```bash
mincloudx faas deploy
```

若需要修改部署的目录:

```bash
mincloudx faas deploy --deploy-dir dist-test
```

### help

输出命令的帮助信息。

**Parameter:**

- `command`: 要输出帮助信息的命令名称

**Example:**

```bash
# 查看 type 命令的使用方式
mincloudx help type
```

## Development

运行以下命令进行开发：

```shell
# 监听项目中的文件变化
yarn watch

# 执行本地编译后的 cli 文件
yarn test
```

项目初始化使用 `yarn install` 或 `yarn` 安装依赖时会自动将 bin 安装到 node_modules 中。

若在开发过程中修改了 bin 名称，可在对应 package 中先通过 `yarn unlink` 取消关联，再通过 `yarn link` 重新关联。
